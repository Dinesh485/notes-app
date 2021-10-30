import Add from "../components/Add";
import FilterMenu from "../components/filterMenu";
import List from "../components/List";
import { Input, Wrapper } from "../lib/ui/styled-components";

const Home = () => {
    return (
       
            <Wrapper className = 'flex flex-col pt-5 pb-3 flex-grow overflow-hidden'>
                <div className = 'flex items-center flex-row'>
                    <Input type="text" className='bg-black text-white mr-3' placeholder = 'Search' />
                    <FilterMenu />
                </div>
                <div className ='mt-4 flex-grow overflow-hidden  flex flex-col justify-between  items-center h-full'>
                           <List />
                           <Add />
                </div>
            </Wrapper>
        
    );
}

export default Home;