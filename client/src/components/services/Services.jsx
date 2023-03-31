import React, { useState } from 'react'
import './style.css';
import softwareDev from '../assets/softwaredEv.jpg'
import uiux from '../assets/uiux.jpg';
import gamedev from '../assets/gamedev.png';




const Services = () => {

  const [dataser, setDataser] = useState([
    {
    // img : `${softwareDev}`,
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading:'Software Development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, corporis!'
  },
  {
    img : "https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading:'UI/UX',
    description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, corporis!'
  },
  {
    img : "https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading:'Game Devlopment',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, corporis!'
  }
]);


  return (
 

  <div className='mt-36 p-12'>

    <h1 className='text-blue-700 font-semibold '>OUR SERVICES</h1>
    <p className='text-blackk font-bold text-4xl mb-4'>What We Do?</p>

 <div className="relative  po_items_ho grid-container ">
  
    {dataser.map((data, i) => {
      return (
        <div key={i} className="po_item h-96 w-96 border-3 border-red-500">
        <img src={data.img} alt="p" className='object-cover h-96 w-fit opacity-50'/>
        
         
          <div className="content">
          
          <h1 className='font-extrabold '>{data.heading}</h1>
          <p className='font-bold  '>{data.description}</p>
          </div>
        </div>
      );
    })}
   </div>
   </div>

  )
}

export default Services