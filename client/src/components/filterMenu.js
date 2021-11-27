import MenuFunc from "./MenuFunc"
import { useDispatch } from "react-redux"
import { sortByDate, sortByLength } from "../store/sortSlicer"
import { useSelector } from "react-redux"

const Btn = () => {
    return (
        <svg className='w-8 xl:w-10' viewBox="0 0 71 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="71" height="7" rx="3.5" fill="white" />
            <rect y="18" width="52" height="7" rx="3.5" fill="white" />
            <rect y="36" width="30" height="7" rx="3.5" fill="white" />
        </svg>
    )
}
const Drop = () => {
    const sortBy  = useSelector(state => state.sortBy)
    const dispatch = useDispatch()
    

    return (
        <>
            <button onClick = {() => dispatch(sortByDate())}  className={` w-full whitespace-nowrap flex py-2 2xl:text-lg items-center  px-2 rounded-md mb-1 ${sortBy === 'date' && 'bg-gray-300/50'}`}>
                <svg className = 'w-5 mr-2 xl:w-6 xl:mr-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 13h-4v-4h4v4zm6-4h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v13.386c0 2.391-6.648 9.614-9.811 9.614h-14.189v-23h24zm-2 6h-20v15h11.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-6.543z" /></svg>
                <span>
                    sort by date
                </span>
            </button>
            <button onClick = {() => dispatch(sortByLength())}  className={` w-[fit-content] whitespace-nowrap flex py-2 2xl:text-lg items-center  px-2 rounded-md  ${sortBy === 'length' && 'bg-gray-300/50'}`}>
                <svg className = 'w-5 mr-2 xl:w-6 xl:mr-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm3 19c0 1.302-.839 2.401-2 2.816v-2.816h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2v-3h-1v2.815c-1.161-.414-2-1.513-2-2.815v-14c0-1.302.839-2.401 2-2.816v2.816h1v-3h2v6h1v-6h2v3h1v-3h2v3h1v-3h2v6h1v-6h2v3h1v-2.816c1.161.415 2 1.514 2 2.816v14zm-14.141-9h1.141v6h-1.354v-3.889h-1.488v-1c.893-.041 1.701-.201 1.701-1.111zm8.315 4.667h1.826v1.306h-3.922v-.958c1.529-1.491 2.379-2.244 2.389-3.018 0-.462-.268-.717-.754-.717-.453 0-.816.245-1.168.524l-.424-1.148c.545-.452 1.191-.656 1.833-.656 1.179 0 1.941.74 1.941 1.885.001 1.155-.899 2.043-1.721 2.782z" /></svg>
                <span> sort by length</span>

            </button>
        </>
    )
}
const FilterMenu = () => {
    return (
        <div className='ml-2 md:m-0'>
            <MenuFunc btn={<Btn />} drop={<Drop />} />
        </div>
    );
}

export default FilterMenu;