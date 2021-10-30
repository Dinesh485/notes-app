import { useEffect, useRef, useState } from "react";
import { Card } from "../lib/ui/styled-components";

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
        <div  className = 'bg-black text-white rounded-xl py-4 px-2  w-full h-[85%]  after:w-full after:block after:abosolute '>
             <div ref = {parent} className = 'h-full overflow-scroll pr-5'>
             {list.map(item =>{
                 return (
                  
                    <Card className = ' bg-[#363636] relative p-3 px-4  rounded-xl mb-2  overflow-hidden h-full flex  flex-col 'height = {height}>
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