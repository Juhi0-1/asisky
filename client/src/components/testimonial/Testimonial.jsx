import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testimonial.css';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Card from './Card';


const colors = {
  orange : '#FFBA5A',
  grey : '#a9a9a9'
}
const styles = {
  container:{
    display: "flex",
    flexDirection :"column",
    alighItems : "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
}
const Testimonial = () => {


  const details = [
    {
      name:"Joe",
      img : 'https://plus.unsplash.com/premium_photo-1663011672881-31986e430c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },{
      name: "John",
      img : 'https://plus.unsplash.com/premium_photo-1663011723026-4612bdbff698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing'
    },{
      name :"Max",
      img: 'https://plus.unsplash.com/premium_photo-1663012830680-6dd85169a658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      desc :'Lorem ipsum dolor sit amet, consectetur adipisicing iciendis nobis illo cumque'
    },{
      name:"Dustin",
      img:'https://images.unsplash.com/photo-1595252512391-b3d87e332ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      desc:'us obcaecati distinctio, debitis fugiat ipsam optio commodi eius recusandae quibusdam. Repellendus corporis dolore quasi a. Perferendis modi similique enim quae.'
    },{
      name:"Mike",
      img:'https://plus.unsplash.com/premium_photo-1663011672881-31986e430c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      desc:'debitis fugiat ipsam optio commodi eius recusandae quibusdam.'
    },{
      name:"Steve",
      img:'https://images.unsplash.com/photo-1608434536950-d7d084398bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80',
      desc:'recusandae quibusdam. Repellendus corporis dolore quasi a. Perfere'
    },{
      name:"Nancy",
      img:'https://images.unsplash.com/photo-1599951611617-2e4df29385b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      desc:' repudiandae officiis, placeat enim blanditiis aspernatur iste modi aliquid '
    },{
      name:"Barb",
      img:'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc:'psum dolor sit amet consectetur adipisicing elit. Odit nisi repudiandae officiis, placeat enim blanditiis aspernatur iste modi aliquid minus obcaecati'
    },{
      name:"Jonathan",
      img:'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc:'sicing elit. Odit nisi repudiandae officiis, placeat enim blanditiis aspernatur iste modi aliquid minus '
    }
  ]

  const stars = Array(5).fill(2);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div className='mySwiper bg-white relative '>
    <h1 className='font-bold text-4xl relative text-center p-5'>Testimonials</h1>
   
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className=""
    >
     
    {details.map(person=>(
      <SwiperSlide>
   
  

    

   <div className='flex flex-row justify-center items-center h-96'>
    <div className='flex flex-col '>
    <div style={styles.stars} className='mb-5 ml-10'>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              color={colors.orange}
            />
          )
        })}
      </div>
    <img src={person.img} alt='person' height='900px' width='200px' className='rounded-2xl border-2 border-black shadow-2xl pro'/>
    <h1 className='font-bold text-2xl m-4'>{person.name}</h1>
    
    </div>
 
    <p className='w-1/2 text-gray-700 pl-12 text-xl'>{person.desc}</p>
 
  </div>

      </SwiperSlide>
    ))}

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
    </div>
  </>
  )
}

export default Testimonial