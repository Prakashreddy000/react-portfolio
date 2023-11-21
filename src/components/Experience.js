import React from 'react';
import css from '../assests/css.png';
import github from '../assests/github.png';
import html from '../assests/html.png';
import javascript from '../assests/javascript.png';
import tailwind from '../assests/tailwind.png';
import reactImage from '../assests/react.png';

const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            name:"HTML",
        },
        {
            id:2,
            src:css,
            name:"CSS",
        },
        {
            id:3,
            src:javascript,
            name:"javascript",
        },
        {
            id:4,
            src:tailwind,
            name:"TAILWIND",
        },
        {
            id:5,
            src:reactImage,
            name:"REACT",
        },{
            id:6,
            src:github,
            name:"GITHUB",
        },
    ]



  return (
    <div name="Experience" className='bg-gradient-to-b from-black to-gray-700 w-full h-screen '>
        <div className='max-w-screen-lg flex flex-col w-full h-full mx-auto p-4 text-white justify-center '>
            <div>
                <h2 className='font-bold text-xl inline border-b-4 p-2 border-gray-500'>Experience</h2>
                <p className='py-4 font-semibold text-lg'>These are the Technologies i have worked on.</p>
            </div>
            <div className='grid grid-cols-2 w-full sm:grid-cols-3 gap-8 text-center sm:px-0 py-8 px-12'>
               
                {techs.map(({id,src,name})=>(
                        <div key={id} className='py-2 shadow-md hover:scale-110 duration-500 rounded-xl'>
                        <img 
                        className='w-20 mx-auto'
                        alt="texh"
                        src={src}/>
                        <p className='py-1'>{name}</p>
                    </div>
                ))}
               
               
                
            </div>
        </div>
    </div>
  )
}

export default Experience;