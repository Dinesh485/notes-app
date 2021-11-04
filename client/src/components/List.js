import { useEffect, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { Card,  } from "../lib/ui/styled-components";

const List = () => {
    const parent = useRef(null)
   const [height, setHeight] = useState(0);
  
    const list = [
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
        {
            title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus consectetur a saepe eligendi ducimus hic deleniti nesciunt doloremque corrupti.'
      },
       
    ]
     
    useEffect(() =>{
        const h = parseInt(parent.current.offsetHeight)
        setHeight(h)
        

    },[])
   
    return ( 
        <div className = '  w-full h-[85%] bg-black text-white py-4 px-2 rounded-xl overflow-hidden  md:h-full '   >
             <div ref = {parent} className = 'h-full overflow-scroll pr-5'>
             {list.map(item =>{
                 return (
                  
                    <Card className = ' bg-[#363636] relative p-3 px-4  rounded-xl mb-2  overflow-hidden h-full flex  flex-col ' height = {height}>
                    <h2 className= 'text-xl font-medium mb-1 xs:mb-2'>{item.title}</h2>
                     <p className = 'text-sm text-white  truncate' >{item.content}</p>
                   </Card>
                   
                 )
             })}
             </div>
        </div>
     );
}
 
export default List;