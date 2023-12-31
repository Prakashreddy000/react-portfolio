import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import imagee from '../assests/mobile img.jpeg';
import {  BiSolidRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-scroll';

const Home = () => {
  const [text] = useTypewriter({
    words: ['PrakashReddy .', 'React Developer .'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  });

  return (
   
      <div 
      name="Home"
      className='h-screen  w-full bg-gradient-to-b from-black to-slate-500'>
        <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col  justify-center h-full'>
          <h2 className='text-5xl sm:text-xl font-bold text-white' >Hi, i'm <span className='text-green-400'>{text}</span></h2>
          <p className='py-3 font-semibold max-w-md text-gray-500'>I have built this portfolio using <span className='text-white'>React js and Tailwind css</span></p>
          <div>
            <Link to='Experience' smooth duration={500} className='group text-black w-fit px-2 py-1 m-2 bg-gradient-to-r from-cyan-300 to-blue-200 flex rounded-lg'>
              Experience
              <span className='group-hover:rotate-90 duration-200 px-1 py-1'><BiSolidRightArrowAlt size={20}/></span>
            </Link>
          </div>
          
        </div>
        <div>
            <img alt='my pic' 
            className='w-2/4 pb-3 mx-auto md:w-2/4 rounded-2xl'
            src={imagee}/>
          </div>
      </div>
    </div>
  )
}

export default Home;