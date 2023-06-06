import React from 'react'
import { useSelector } from 'react-redux';

const Other = () => {
  const isOpen = useSelector(state => state.navbar.isOpen);

  return (
    <div className='flex justify-center md:justify-start'>
    <div className={`absolute ${ isOpen ? "lg:left-[298px]" : "lg:left-0"} ${isOpen ? "lg:px-0" : "lg:px-3"} duration-500 transition-all`}>
      <div className="lg:w-[75vw] w-screen  flex justify-start pt-10 bg-slate-900 text-white h-96">
      <h1 className='mx-5'>Other</h1>
    </div>
    </div>
  </div>
  )
}

export default Other