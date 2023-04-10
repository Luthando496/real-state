import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose, AiFillTag,AiOutlineSearch } from 'react-icons/ai'
import {BsFillHouseDoorFill, BsFillSave2Fill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {MdFavorite,MdHelp,MdFoodBank} from 'react-icons/md'



const Navbar = () => {

    const [nav ,setNav]= useState(false)

    return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left */}
    <div className='flex items-center'>
        <div className='cursor-pointer' onClick={()=>setNav(!nav)}>
            <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:4xl px-2'>Real <span className='font-bold'>Estate</span></h1>

        <div className='hidden lg:flex items-center bg-pink-300 rounded-full p-1 text-[14px]'>
            <p className='bg-black rounded-full text-white p-2'>Real</p>
            <p className='p-2'>Estate</p>
        </div>
    </div>

    {/* search input */}
    <div className='px-2 w-[200px] flex items-center sm:w-[400px] lg:w-[500px]'>
        <h2 className="text-xl sm:text-2xl lg:text-4xl text-mono tracking-widest">Find The Best Airbnb</h2>
    </div>

    {/* cart */}
        
    <Link to='/' className='bg-black text-white hidden md:flex items-center py-2 rounded-full px-2' >
        <BsFillHouseDoorFill size={30} className='mr-2' />Home
    </Link>

    {/* Mobile menu */}

    {/* overlay */}
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
    </div> : ''}

    {/* side draw */}
    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-700 ease-in-out':'fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-white duration-700 ease-in-out' }>
        <AiOutlineClose size={30} className='absolute right-4 top-3 cursor-pointer' onClick={()=>setNav(!nav)} />
        <h2 className='text-2xl p-2'>Fins <span className='font-bold'>Hotels</span></h2>

    <nav>
        <ul className='mx-4 flex flex-col p-3 text-pink-300'>
        <Link to='/about'>
            <li className='text-xl hover:text-yellow-500 cursor-pointer py-4 flex items-center uppercase'><TbTruckDelivery size={40} className='mr-5' /> About</li>
        </Link>
        <Link to='/'>
            <li className='text-xl hover:text-orange-500 cursor-pointer py-4 flex items-center uppercase'><BsFillHouseDoorFill size={40} className='mr-5' /> Home</li>
            </Link>
            
        </ul>
    </nav>

    </div>
    
    </div>
  )
}

export default Navbar;