import { BigInput, Input, RoundedDiv } from "../lib/ui/styled-components";

const Add = () => {
    return ( 
        <div className='bg-[rgba(202, 204, 204, 0.42] absolute w-screen py-4 px-4 h-screen left-0 top-0 backdrop-filter backdrop-blur-[30px] flex justify-center items-center '>
             <div className  = 'bg-black text-white rounded-2xl p-4   h-[75%]  overflow-hidden w-[90%]  flex flex-col'>
                 <BigInput type="text" className = 'bg-[#363636] text-white w-full block m-0 h-[40px] mb-5' placeholder = 'Title'/>
                 <textarea className = 'bg-[#363636] text-white w-full block rounded-xl flex-grow outline-none border-2 border-transparent border-solid focus:border-white resize-none p-2 px-3' placeholder = 'Content'></textarea>
             </div>
        </div>
     );
}
 
export default Add;