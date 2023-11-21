import React from 'react'

const About = () => {
  return (
    <div
    name="About"
    className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>
            <p className='text-lg font-semibold '>Passionate wordsmith dedicated to crafting compelling narratives and fostering meaningful connections through the art of language. With a background in (mention relevant fields), I bring a unique blend of expertise to my writing. Whether delving into the intricacies of (specific topics) or creating engaging content for diverse audiences, I thrive on the challenge of translating ideas into words that resonate. My journey in the world of words extends beyond mere communication—it's about creating an immersive experience for readers. Join me on this literary adventure where every sentence is a brushstroke, painting a vivid picture of stories waiting to be told.


            </p>
        </div>
    </div>
  )
}

export default About;