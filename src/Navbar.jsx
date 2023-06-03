import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {HiSearch} from 'react-icons/hi';
import {BsFillPersonFill,BsClock} from "react-icons/bs"
import {BiArchiveIn} from "react-icons/bi"
import { NavLink } from 'react-router-dom';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import {toggleNavbar } from './service/navbarSlice';
const Navbar = () => {
  const isOpen = useSelector(state => console.log(state.navbar));
  const dispatch = useDispatch();

  return (
    <>
    {/* NAVABAR */}
        <nav className='bg-white p-2 flex items-center justify-between space-x-5 cursor-pointer me-5'>
           <div className="flex items-center space-x-3">
            <div onClick={() => dispatch(toggleNavbar())} className="">
              {
                isOpen ? 
              <AiOutlineMenu className={`text-xl hover:bg-[#3c404314] cursor-pointer w-10 h-10 p-3 hover:rounded-full duration-100`}/> 
              :
              <AiOutlineMenu className={`text-xl hover:bg-[#3c404314] cursor-pointer w-10 h-10 p-3 hover:rounded-full duration-100`}/>
              }
            </div>
           <img className='w-[40px]' src="https://www.gstatic.com/images/branding/product/2x/contacts_2022_48dp.png" alt="" />
           <h1 className='text-[#5f6368] text-2xl'>Friends</h1>
           <div className="space-x-24">
           <HiSearch className='absolute top-[13px] ms-[7rem] hover:bg-[#3c404314] cursor-pointer w-10 h-10 p-3 hover:rounded-full duration-100'/><input type="text" placeholder='Search' className='w-[600px] p-3 bg-[#3c404314] outline-none rounded-lg px-16 cursor-pointer'/>
           </div>
           </div>
              <div className='flex items-center space-x-5'>
                    <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" id="toggleB" className="sr-only"/>
                        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                      </div>
                    </label>
                <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" className='w-10 h-10' alt="" />
              </div>
        </nav>
    {/* NAVABAR */}

        {/* SIDEBAR */}
       <div className={`w-[15rem] absolute text-center bg-white cursor-pointer transition-all duration-300 my-5 ${isOpen ? "" : "left-[-400px]"}`}>
      <div className="flex items-center space-x-2 p-4 ms-1 rounded-3xl hover:shadow-custom" style={{boxShadow : "0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>
           <svg className='me-1' width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
           <h1 className='text-xl'>Create Contacts</h1>
      </div>
      <div className="">
           <ul className='space-y-0 mt-6'>
               <NavLink to="/" className='space-x-5 flex items-center p-3 px-5 text-xl'>
               <BsFillPersonFill className=''/>
               <p className=''>
                   Contacts
               </p>
               </NavLink>

               <NavLink to="/frequents" className='space-x-5 flex items-center p-3 px-5 text-xl'>
               <BsClock className=''/>
               <p className=''>
                   Frequent
               </p>
               </NavLink>

               <NavLink to="/other" className='space-x-5 flex items-center p-3 px-5 text-xl'>
               <BiArchiveIn className=''/>
               <p className=''>
                   Other contacts
               </p>
               </NavLink>            
           </ul>
      </div>
   </div>
        {/* SIDEBAR */}
       
    </>
  )
}

export default Navbar