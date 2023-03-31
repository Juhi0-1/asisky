import React from 'react'
import logo from './assets/logo.png';


import newback from './assets/newback.jpg'
import { Link, NavLink } from 'react-router-dom';
import About from './About';
import Testimonial from './testimonial/Testimonial';
import Services from './services/Services';

import {
  
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Blogs from './blogs/Blogs';
import Contact from './Contact';
import Footer from './Footer';



// import './style.css';

const Navbar = () => {
  return (
    <>
    <div className='relative '>
    
<nav class=" px-2 sm:px-4 py-2.5 dark:bg-gray-900  bg-white w-full relative top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src={logo} class="h-12 mr-3 sm:h-9" alt=" Logo"   />
   
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><NavLink to='/contact'>Contact Us</NavLink></button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
      
    </button>
  </div>
  <div class="items-center  justify-between hidden w-full  md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to="/about" class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-black md:p-0 dark:text-white" >About</NavLink>
      </li>
      <li>
        <NavLink to="/services" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</NavLink>
      </li>
      <li>
        <NavLink to="/testimonial" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Clients</NavLink>
      </li>
      <li>
        <a href="/portfolio" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portfolio</a>
      </li>
      <li>
        <a href="/insights" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Insights</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
{/* https://images.pexels.com/photos/747101/pexels-photo-747101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1   ${newback}*/}
<div className=' w-screen h-screen bg-no-repeat bg-cover' style={{backgroundImage:`url("https://images.pexels.com/photos/747101/pexels-photo-747101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ")`}} >
<div className='absolute top-48 left-40  text-gray-300 font-sans'>
  <p  className='mb-7 text-6xl font-bold'>Making Software work.</p>
  <p className='text-6xl font-bold'>Like Magic.</p>
  <button className='rounded border-2 border-gray-300 bg-transparent mt-16 p-3 font-sens font-bold text-xl   hover:text-black hover:bg-gray-300'>Learn More</button>
</div>
</div>


</div>
<About/>
<Testimonial/>
<Services/>
<Blogs/>
<Contact/>
<Footer/>
    </>
  )
}

export default Navbar