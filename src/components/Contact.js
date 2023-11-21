import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='flex  flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-6'>
                <p className='text-2xl border-b-2 inline border-gray-500 font-bold'>Contact</p>
                <p className='text-md py-4'>Let's get connect.</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/95071583-0af0-4527-8a37-b19140887eab' method='POST' className='flex flex-col w-full md:w-1/2 sm:w-1/2 text-white'>
                    <input  type='text' placeholder='enter your name' className='p-2 bg-transparent border-2 rounded-md  focus:outline-none' name='name'/>
                    <input  type='text' placeholder='enter your email'
                     className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none' name='email'/>
                    <textarea name='message' rows="10" 
                    placeholder='enter your message'
                    className=' p-2 bg-transparent border-2 rounded-md focus:outline-none'></textarea>
               <button 
            type='submit'
            className='flex items-center px-6 py-2 my-8 mx-auto hover:scale-110 duration-500  text-white bg-cyan-300 p-3 rounded-lg'>Click Me</button>

               
               </form>
            </div>
            
        </div>
    </div>
  )
}

export default Contact;