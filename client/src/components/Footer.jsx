import React from 'react'
import links from './assets/links.png'
const Footer = () => {
  return (
   <>
    <footer className='bg-gray-800 p-5 bottom-0  w-screen text-white text-center'>
      <div className='flex flex-row'>
        <div className='w-1/3'>
        <h1 className='text-3xl font-bold mb-2 '>Skyearth Labs</h1>
        <p className='text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque consequatur nobis labore rerum nulla tenetur aperiam modi aliquam? Harum, quae.</p>
        </div>
        <div className='mx-10 w-1/5' >
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque </p>
        </div>
        <div className='relative right-0'>
          <h1 className='text-xl font-bold mb-2'>Stay Connected</h1>
            <img src={links} alt='hey'/>
        </div>
        
        <div className=' ml-24'>
          <h1 className='font-bold'>Contact Us</h1>
          <p> F-11 Ground Floor, Lorem ipsum dolor sit amet consectetur</p>
          <p>Mob: 123456789</p>
          <p>Email : xyz@gmail.com</p>
        </div>
      </div>

    </footer>
    {/* hover:underline ml-24 text-xl */}
   </>
  )
}

export default Footer