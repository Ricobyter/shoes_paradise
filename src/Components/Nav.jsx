import React, { useState } from 'react'
import {headerLogo} from '../assets/images';
import {navLinks} from '../constants'
import { hamburger } from '../assets/icons';
const Nav = () => {

  return (
    
 <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex items-center justify-between  '>
        <a href="/">
            <img src={headerLogo} alt="LOGO" width={130} height={30}/>
        </a>
        <ul className='flex-1 flex justify-center items gap-16 max-lg:hidden '>
{navLinks.map((item) =>(
    <li key={item.label}>
        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red'>
            {item.label}
        </a>
    </li>
))}
</ul>
<div className='hidden max-lg:block'><img src={hamburger} alt="Hamburger" width={25} height={25}/></div>


            </nav>
 </header>
  )
}

export default Nav

