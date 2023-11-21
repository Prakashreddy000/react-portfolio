import React from 'react';
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

const SideLinks = () => {
    const links=[
        {
                id:1,
                child: (
                    <>
                    Github<FaGithub size={30}/>
                    </>
                ),
                href:"https://github.com/",
           
        },
        {
            id:1,
            child: (
                <>
                Linkedin<FaLinkedin size={30}/>
                </>
            ),
            href:"www.linkedin.com",
           
    },
    {
        id:1,
        child: (
            <>
            Mail<HiOutlineMail size={30}/>
            </>
        ),
        href:'mailto:saiprakashmmunigala@gmail.com'
        
},
{
    id:1,
    child: (
        <>
       Resume<BsFillPersonFill size={30}/>
        </>
    ),
    href:"www.github.com",
    download:true,
    
},
    ]




  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>

            {links.map(({id,child,href,style,download})=>(
                     <li key={id} className='flex justify-between items-center  bg-slate-400 px-4 w-36 h-14 ml-[-100px] hover:ml-[-10px] duration-500'>
                     <a href={href}

                     download={download}
                     target='_blank'
                     rel='noreferrer'
                      className='flex items-center justify-between w-full'>
                       {child}
                     </a>
                        
                 </li>
            ))};

           
        </ul>
    </div>
  )
}

export default SideLinks;