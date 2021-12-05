import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ImageCropper from "../components/ImageCropper";
import { logout } from "../store/authSlice";
import { loading, notLoading } from "../store/loadingSlice";


const Profile = () => {
    const [changePassword, setChangePassword] = useState(false)
    const [deleteAccount, setdeleteAccount] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [error, setError] = useState('')
    const [profileImg, setProfileImg] = useState('')
    const [email, setEmail] = useState('')
    const imgForm = useRef(null)
    const [imageToCrop, setImageToCrop] = useState(undefined);
    const [croppedImage, setCroppedImage] = useState(undefined);
    const dispatch = useDispatch()



    const handleChangePassword = () => {
        if (oldPassword && newPassword) {
            dispatch(loading())
            axios.post('https://notes-app-portfolio-project.herokuapp.com/changePassword', {
                newPassword: newPassword,
                oldPassword: oldPassword
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                if (res.data.success) {
                    setChangePassword(false)
                    dispatch(notLoading())
                    setError('')
                    setNewPassword('')
                    setOldPassword('')
                } else {
                    dispatch(notLoading())
                    setError(res.data.msg)

                }
            })
        } else {

            if (!oldPassword && newPassword) {
                setError('please enter old password')
            }
            if (!newPassword && oldPassword) {
                setError('please enter new password')
            }
            if (!newPassword && !oldPassword) {
                setError('please enter passwords')
            }
        }
    }


    const handleDeleteAccount = () => {
        if (oldPassword) {
            dispatch(loading())
            axios.post('https://notes-app-portfolio-project.herokuapp.com/deleteAccount', {

                password: oldPassword
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => {
                if (res.data.success) {
                    dispatch(logout())
                    setdeleteAccount(false)
                    dispatch(notLoading())
                    setError('')
                    setOldPassword('')
                } else {
                    dispatch(notLoading())
                    setError(res.data.msg)

                }
            })
        } else {
            setError('please enter password')
        }
    }

    const uploadImageToServer = (file) => {
        dispatch(loading())
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {

            axios.post('https://notes-app-portfolio-project.herokuapp.com/profileImage', { file: reader.result }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            }).then(res => {

                if (res.data.success) {

                    setProfileImg(res.data.profile_img.toString())
                    imgForm.current.reset()
                    dispatch(notLoading())
                    setImageToCrop(undefined)
                    setCroppedImage(undefined)
                }


            })
        }


    }

    const handleImageInput = (file) => {
        if (file) {

            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onloadend = () => setImageToCrop(reader.result)

        }
    }
  

    useEffect(() => {
        dispatch(loading())
        axios.get('https://notes-app-portfolio-project.herokuapp.com/profile', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            if (res.data.success) {


                setEmail(res.data.profile.email)

                setProfileImg(res.data.profile.profile_img)
               
                dispatch(notLoading())
            }
        })

    }, [dispatch])


    return (
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className=' pt-5 pb-2 flex-grow overflow-hidden mx-auto w-11/12 max-w-[1300px]  md:pb-4 lg:pb-6 xl:pb-16 xl:py-10 2xl:py-16 2xl:pb-24 flex flex-col items-center justify-center'>
            <div className="w-11/12 mx-auto  max-w-[500px] bg-[#E8E8E8] dark:bg-black rounded-3xl p-4 py-10  box-border   text-white md:rounded-[38px] md:p-8 2xl:p-10 2xl:px-14 2xl:max-w-[600px] 2xl:text-lg transition-colors duration-300 flex flex-col items-center " >

                <form ref={imgForm} className='relative text-black transition-colors duration-300 dark:text-white mb-5 box-content px-2 cursor-pointer'>
                    <input onInput={(e) => handleImageInput(e.target.files[0])} accept="image/png, image/jpeg" type="file" className='hidden' id='uploadImg' />

                    {!profileImg && <label for='uploadImg' type='file' className={`cursor-pointer w-10 block border-4 border-solid border-black  dark:border-white  p-5 box-content rounded-full md:w-20 md:p-8 `}>
                        <svg className='w-full fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" /></svg>
                        
                    </label>}
                    {profileImg && <label for='uploadImg' type='file' className={`cursor-pointer w-24 block ring-4 dark:ring-white ring-black  rounded-full md:w-32 xl:w-44 overflow-hidden transition-colors duration-300 `}>
                        <img className='w-full rounded-full' src={profileImg} alt='profile'  />
                    </label>}
                    <svg className='w-4 absolute bottom-0 right-0 fill-current xl:w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
                </form>
                <div className='flex  flex-col w-11/12 lg:mb-5'>
                    <p className='text-black dark:text-white mb-1 ml-1 lg:text-md xl:text-lg 2xl:text-xl transition-colors duration-300'>Email :</p>
                    <input readOnly value={email} type="text" className='bg-white dark:text-white text-black dark:bg-[#3F3F3FA3] placeholder-black dark:placeholder-[#DDDDDD] box-border px-4  rounded-2xl w-full h-[45px] outline-none border-2 border-solid border-transparent focus:border-[#DDDDDD] max-w-[500px] mx-auto block xl:h-[50px] 2xl:h-[60px] 2xl:rounded-3xl 2xl:text-xl  transition-colors duration-300' />
                </div>

                <button className='bg-transparent border-2 border-black border-solid text-black dark:text-white dark:border-white transition-colors duration-300 lg:mb-3  p-2 px-4 rounded-lg mt-5 sm:max-w-[250px] w-11/12' onClick={() => setChangePassword(true)}>
                    Change password
                </button>
                <button onClick={() => setdeleteAccount(true)} className='bg-red-500  p-2 px-4 rounded-lg mt-2 sm:max-w-[250px] w-11/12'>
                    Delete Account
                </button>

                <AnimatePresence >
                    {changePassword && <motion.div className='w-full h-full absolute top-0 left-0 flex items-center justify-center  '>
                        <motion.div initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className='bg-white dark:bg-black w-10/12 max-w-[400px] p-6 rounded-lg shadow-xl border-black dark:border-white border-4 border-solid flex flex-col justify-between 2xl:max-w-[600px] 2xl:min-h-[300px] '>
                            <p className='font-medium mb-4 lg:text-lg 2xl:text-xl 2xl:m-5 text-black dark:text-white '>Change password</p>
                            <input onChange={(e) => setNewPassword(e.target.value)} value={newPassword} type="text" placeholder='Enter new password' className='bg-gray-300/50 mb-4 dark:text-white text-black dark:bg-[#3F3F3FA3] placeholder-black dark:placeholder-[#DDDDDD] box-border px-4  rounded-2xl w-full h-[45px] outline-none border-2 border-solid border-transparent focus:border-[#DDDDDD] max-w-[500px] mx-auto block xl:h-[50px] 2xl:h-[60px] 2xl:rounded-3xl 2xl:text-xl  transition-colors duration-300' />
                            <input onChange={(e) => setOldPassword(e.target.value)} value={oldPassword} type="text" placeholder='Enter old password' className='bg-gray-300/50 mb-1 dark:text-white text-black dark:bg-[#3F3F3FA3] placeholder-black dark:placeholder-[#DDDDDD] box-border px-4  rounded-2xl w-full h-[45px] outline-none border-2 border-solid border-transparent focus:border-[#DDDDDD] max-w-[500px] mx-auto block xl:h-[50px] 2xl:h-[60px] 2xl:rounded-3xl 2xl:text-xl  transition-colors duration-300' />
                            {error && <p className='text-red-500 text-xs md:text-sm ml-2'>{error}</p>}
                            <div className='flex justify-end items-center mt-3'>
                                <button onClick={handleChangePassword} class='p-1 rounded font-medium shadow mr-4 bg-black text-white dark:text-black dark:bg-white min-w-[60px] text-sm lg:text-base lg:p-2 2xl:text-lg 2xl:px-4'>send</button>
                                <button onClick={() => { setChangePassword(false); setNewPassword(''); setOldPassword(''); setError('') }} class='p-1 rounded font-medium shadow bg-gray-500/50 text-black dark:text-white min-w-[60px] text-sm lg:text-base lg:p-2 2xl:text-lg 2xl:px-4' >discard</button>
                            </div>
                        </motion.div>
                    </motion.div>}
                    {deleteAccount && <motion.div className='w-full h-full absolute top-0 left-0 flex items-center justify-center  '>
                        <motion.div initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} className='bg-white dark:bg-black w-10/12 max-w-[400px] p-6 rounded-lg shadow-xl border-black dark:border-white border-4 border-solid flex flex-col justify-between 2xl:max-w-[600px] 2xl:min-h-[300px] '>
                            <p className='font-medium mb-4 lg:text-lg 2xl:text-xl 2xl:m-5 text-black dark:text-white '>Are you sure that you want to delete your account?</p>
                            <input onChange={(e) => setOldPassword(e.target.value)} value={oldPassword} type="text" placeholder='Enter password' className='bg-gray-300/50 mb-1 dark:text-white text-black dark:bg-[#3F3F3FA3] placeholder-black dark:placeholder-[#DDDDDD] box-border px-4  rounded-2xl w-full h-[45px] outline-none border-2 border-solid border-transparent focus:border-[#DDDDDD] max-w-[500px] mx-auto block xl:h-[50px] 2xl:h-[60px] 2xl:rounded-3xl 2xl:text-xl  transition-colors duration-300' />
                            {error && <p className='text-red-500 text-xs md:text-sm ml-2'>{error}</p>}

                            <div className='flex justify-end items-center mt-4'>
                                <button onClick={handleDeleteAccount} class='p-1 rounded font-medium shadow mr-4 bg-black text-white dark:text-black dark:bg-white min-w-[60px] text-sm lg:text-base lg:p-2 2xl:text-lg 2xl:px-4'>yes</button>
                                <button onClick={() => { setdeleteAccount(false); setOldPassword(''); setError('') }} class='p-1 rounded font-medium shadow bg-gray-500/50 text-black dark:text-white min-w-[60px] text-sm lg:text-base lg:p-2 2xl:text-lg 2xl:px-4' >cancel</button>
                            </div>
                        </motion.div>
                    </motion.div>}
                </AnimatePresence>

            </div>
            <AnimatePresence>
            {imageToCrop && <motion.div initial  = {{x:200, opacity: 0}} exit =  {{x: 200, opacity: 0}} animate = {{x: 0, opacity: 1}} className='absolute w-11/12 max-w-[500px] max-h-full '>
                <ImageCropper imageToCrop={imageToCrop} onImageCropped={setCroppedImage} />
                <div className = 'flex items-center justify-between'>
                <p className='text-white text-center'>Drag to crop</p>
                <div className = 'flex'>
                <button onClick={() => {setImageToCrop(undefined); imgForm.current.reset();} } className='bg-white rounded p-1 px-4  block w-[fit-content] lg:text-lg ml-3'>Cancel</button>
                {croppedImage && <motion.button initial = {{scale: 0}} animate = {{scale: 1}} onClick={() => uploadImageToServer(croppedImage)} className='bg-white rounded p-1 px-4  block w-[fit-content] lg:text-lg ml-3'>
                    Done
                </motion.button>  }
                </div>
                
                </div>
            </motion.div>}
            </AnimatePresence>
        </motion.div>

    );
}

export default Profile;