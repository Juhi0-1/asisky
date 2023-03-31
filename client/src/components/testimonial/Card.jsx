import React from 'react'
import profile from '../assets/profile1.jpg'
import './Testimonial.css';
const Card = ({img, desc}) => {
  return (
    <>
  
    <div className='flex flex-row justify-center items-center h-96'>
    <div className='flex flex-col '>
    <img src={img} alt='person' height='900px' width='200px' className='rounded-2xl border-2 border-black shadow-2xl pro'/>
    <h1 className='font-bold text-2xl m-4'>Lorem ipsum dolor</h1>
    
    </div>
    <p className='w-1/2 text-gray-700 pl-12 text-xl'>{desc}</p>
  </div>
  </>
  )
}

export default Card