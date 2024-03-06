import React, { useState } from 'react'
import logo from '../assest/logo.png'
import { Link } from 'react-router-dom'
import { FaUserLarge, FaCartShopping  } from "react-icons/fa6";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handlerShowMenu = () => {
        setShowMenu(pre => !pre)
    }

    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
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
                    <div className='text-2xl text-slate-600 relative'>
                        <FaCartShopping />
                        <div className='absolute text-white -top-2 -right-2 bg-red-500 h-4 w-4 m-0 p-0 text-sm text-center rounded-full '>0</div>
                    </div>
                    <div className='text-2xl text-slate-600 relative' onClick={handlerShowMenu}> 
                        <div className='border-2 border-solid border-slate-700 p-1 rounded-full cursor-pointer' >
                            <FaUserLarge />
                        </div>
                        {
                            showMenu && (
                                <div className='absolute text-base right-0 p-2 bg-white shadow drop-shadow flex flex-col'>
                                    <Link to={'new_product'} className='whitespace-nowrap cursor-pointer'>New Product</Link>
                                    <Link to={'login'} className='whitespace-nowrap cursor-pointer'>Login</Link>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>

            {/* mobile */}
        </header>
    )
}

export default Header
