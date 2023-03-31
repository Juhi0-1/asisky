import React, { useState } from 'react'
import mail from './assets/mail.png';
import './contact.css';

const Contact = () => {
  const [input, setInput] = useState({
    name:'',
    email:'',
   textarea:''
  })

  
  const handleChange = (e)=>{
    const {name , value} = e.target
    setInput({...input,
     [name] : value })
  }
  

  const handleSubmit = ()=>{
    if(input.name && input.email && input.textarea){
      // navigate("/verify");
      alert("Sent Successfully !!")
    }
      else {
        alert("Please Fill correctly!!")
      }
  }
  return (
    <div className='relative px-36 py-10 bg-white'>
        <p className='font-bold text-blue-600 mb-4 '>SEND US A MESSAGE</p>
        <h1 className='text-4xl font-bold'>Connect with us!</h1>
        

          <div className='flex flex-row mt-10 bor border-2 border-black'>
          
          <div className='w-1/2 '>
            <img src={mail} alt='mailimg'/>
          </div>
         
           <div className=' w-1/2'>

            <div className='p-20'>

                
          <h1 className='font-bold text-3xl text-center mb-16'>Contact Us</h1>

          <div className=''>
           <label className='text-xl font-semibold mb-5' for='Full Name'>Full Name</label>
           <br/>
           <input 
              name='name'
              placeholder='Enter Your Name'
              className='p-3 mt-4 w-full bg-gray-50 rounded-2xl'
              type='text'
              value={input.name}
              onChange={handleChange}
           /> </div>
         <br/>
         <div className=''>
         <label className='text-xl font-semibold mb-5'  for='Email'>Email</label>
           <br/>
           <input 
              name='email'
              placeholder='Enter Your Email'
              className='p-3 mt-4 w-full bg-gray-50 rounded-2xl'
              type='email'
              value={input.email}
              onChange={handleChange}

           />
           </div>
<br/>
<div className=''>
<label className='text-xl font-semibold mb-5'  for='help'>How can we help you </label>
           <br/>
           <textarea
           
           name='textarea'
           placeholder='Send us a message'
           className='p-3 mt-4 w-full bg-gray-50 rounded-2xl'
           value={input.textarea}
           onChange={handleChange}
           ></textarea> 
             
             </div>  
             <button className='relative conat mt-2 left-36' onClick={handleSubmit}>Submit</button>     
             </div>
           </div>
        
          </div>
    </div>
  )
}

export default Contact