
import Logo from '../lib/images/logo.svg'

import ModeToggleBtn from "./modeToggle";

import { useState } from "react";
import DropMenu from "./dropMenu";
const Nav = () => {

    


    return (
        <nav className='py-4'>
            <div className='flex justify-between items-center w-11/12 max-w-[1300] mx-auto'>
                <div>
                    <img className='w-[60px]' src={Logo} alt="" />
                </div>
                <div className='flex items-center'>

                    <ModeToggleBtn />
                    <DropMenu />
                </div>
            </div>
        </nav>
    );
}

export default Nav;