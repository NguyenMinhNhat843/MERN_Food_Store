import React from 'react'
import logo from '../assest/logo.png'
import { Link } from 'react-router-dom'
import { FaUserLarge, FaCartShopping  } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
        {/* deskop */}
        <div className='flex items-center h-full justify-between'>
            <Link to={""} >
                <div className='h-12'>
                    <img src={logo} alt='' className='h-full' />
                </div>
            </Link>

            <div className='flex items-center gap-4 md:gap-7'>
                <nav className='flex gap-4 md:gap-7 text-base md:text-lg'>
                    <Link to={""}>Home</Link>
                    <Link to={"Menu"}>Menu</Link>
                    <Link to={"About"}>About</Link>
                    <Link to={"Contact"}>Contact</Link>
                </nav>
                <div className='text-2xl text-slate-600'>
                    <FaCartShopping />
                </div>
                <div className='text-2xl text-slate-600'> 
                    <FaUserLarge />
                </div>
            </div>
        </div>

        {/* mobile */}
    </header>
  )
}

export default Header
