import React from 'react';
import image from '../assests/image.png';
import {  BiSolidRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-scroll';

const Home = () => {
  return (
   
      <div 
      name="Home"
      className='h-screen w-full bg-gradient-to-b from-black to-slate-500'>
        <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col  justify-center h-full'>
          <h2 className='text-3xl sm:text-xl font-bold text-white' >I'm a Frontend Developer</h2>
          <p className='py-3 font-semibold max-w-md'>I have built this portfolio using React.js Lehjsfgsihgfisuargiuelhg4 o4rfgiuegfiu4egafiuiueaf 9a uyfecuygbv</p>
          <div>
            <Link to='Experience' smooth duration={500} className='group text-black w-fit px-2 py-1 m-2 bg-gradient-to-r from-cyan-300 to-blue-200 flex rounded-lg'>
              Experience
              <span className='group-hover:rotate-90 duration-200 px-1 py-1'><BiSolidRightArrowAlt size={20}/></span>
            </Link>
          </div>
          
        </div>
        <div>
            <img alt='my pic' 
            className='w-2/3 mx-auto md:w-full'
            src={image}/>
          </div>
      </div>
    </div>
  )
}

export default Home;