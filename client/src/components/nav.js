import { Wrapper } from "../lib/ui/styled-components";
import Logo from '../lib/images/logo.svg'

import ModeToggleBtn from "./modeToggle";

import { useState } from "react";
import DropMenu from "./dropMenu";
const Nav = () => {

    


    return (
        <nav className='py-4'>
            <Wrapper className='flex justify-between items-center'>
                <div>
                    <img className='w-[60px]' src={Logo} alt="" />
                </div>
                <div className='flex items-center'>

                    <ModeToggleBtn />
                    <DropMenu />
                </div>
            </Wrapper>
        </nav>
    );
}

export default Nav;