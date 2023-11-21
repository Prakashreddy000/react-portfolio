import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';


const Header = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id:1,
            link:"Home"
        },
        {
            id:2,
            link:"About"
        },
        {
            id:3,
            link:"Experience"
        },
        {
            id:4,
            link:"Contact"
        },
    ]
  return (
    <div name="Header" className='flex  justify-between bg-black text-white fixed w-full h-20 px-4 items-center'>
        <div>
            <h1 className='text-5xl cursor-pointer ml-2 hover:text-gray-500'>Prak<span className='text-gray-500 hover:text-white'>ash.</span></h1>
        </div>
        <ul className=' hidden md:flex'>
                {
                    links.map(({id, link}) => (
                        <li key={id} className='m-2 p-2 text-gray-300 hover:scale-110 duration-75'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))
                } 
        </ul>
        <div onClick={()=>setNav(!nav)} 
        className='pl-5 text-gray-500 z-10 cursor-pointer md:hidden'>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav &&  <ul className='flex flex-col justify-center items-center text-black absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>
        {
                    links.map(({id, link}) => (
                        <li key={id} className='px-4 py-6 cursor-pointer hover:text-white'>
                            <Link onClick={()=>(setNav(!nav))} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))
                } 
            
        </ul>}
       
    </div>
  )
}

export default Header