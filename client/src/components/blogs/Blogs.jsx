import React, { useState ,useEffect} from 'react'
import './Blog.css';
import axios from 'axios';
import Showfull from './Showfull';
import { Link } from 'react-router-dom';


const Blogs = () => {
const [blogs, setBlogs] = useState([]);
const [ date, setDate] = useState(new Date());



useEffect(()=>{
     
    const fetchData = async ()=>{
        try{
          const res = await axios.get("http://localhost:8000/blogs")
          // console.log(res.data)
         setBlogs(res.data)
        }
        catch(err){
         console.log(err);
        }
    }
    fetchData();
},[])

  return (
    <>
    
    <div className='p-24'>
        <h1 className='text-blue-600 font-bold py-3'>CASE STUDIES</h1>
        <p className='font-bold text-4xl py-2 '>Success Stories</p>
        <p className='text-2xl text-gray-600 py-2'>100+ Million people use products we have built for our global customers. </p>

        <div className='grid px-10 grid-cols-1 md:grid-cols-3 gap-12  my-10'>

         {blogs.map(blog=>(
            <div className='bg-blue-200 h-56 btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-gray-700 ease-out hover:translate-y-1 transition-all rounded' style={{backgroundImage : `url("https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
             
             <div className='flex flex-col pt-20 text-center '> 
             <h1 className='font-bold text-3xl'>{blog.title}</h1>
             <p>"author {blog.id}"</p>
             {/* <p>{blog.desc}</p> */}
             <button className='showfull p-3 w-24 relative left-36 mt-3 rounded-xl hover:bg-red-900 hover:text-white border-2 border-gray-800' key={blog.id}><Link to={`/showfull/${blog.id}`}>View More</Link></button>
             </div>
            
            </div>
         ))}

            

        </div>
    </div>

    </>
  )
}

export default Blogs