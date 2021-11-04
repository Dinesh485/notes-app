import AddBtn from "../components/AddBtn";
import FilterMenu from "../components/filterMenu";
import List from "../components/List";
import { Input, Wrapper } from "../lib/ui/styled-components";
import { useState } from 'react'
import Add from "../components/Add";


const Home = () => {




    return (

        <div className=' pt-5 pb-3 flex-grow overflow-hidden mx-auto w-11/12 max-w-[1300px] md:flex '>
            
            <div className='flex flex-col h-full overflow-hidden'>
                <div className='flex items-center flex-row'>
                    <Input type="text" className='bg-black text-white mr-3 w-[200px] h-[32px]' placeholder='Search' />
                    <FilterMenu />
                </div>
                <div className='mt-4 flex-grow overflow-hidden  flex flex-col justify-between  items-center h-full md:flex-row md:items-end'>
                    <List />
                    {/* <Add /> */}
                    <AddBtn />
                </div>
            </div>
        </div>

    );
}

export default Home;