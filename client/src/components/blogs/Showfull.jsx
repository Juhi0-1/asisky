import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Showfull = () => {
   
 const [values, setValues] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [title, setTitle] =  useState('');
    const [desc, setDesc] = useState('');
   
   
    const blogId = location.pathname.split("/")[2];
   
    console.log(blogId);

    useEffect(()=>{
      //
     
        const fetchData = async ()=>{
            try{
              const res = await axios.get(`http://localhost:8000/blogs/${blogId}`);
  
              setTitle(res.data[0].title);
              setDesc(res.data[0].desc);
              // console.log(values)
            
            }
            catch(err){
             console.log(err);
            }
            
        }
        fetchData();
    },[blogId])
    console.log(title);
    
  return (
    <>
    <div>
      <div className='h-64 bg-blue-300 w-screen text-white ' style={{backgroundImage:`url("https://images.unsplash.com/photo-1620646233562-f2a31ad24425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`}}>
          <h1 className='text-white font-bold relative text-6xl left-64 top-1/2'>{title}</h1>
    </div>

    <div className='px-36 py-10  scroll-my-20'>
    <h1 className='text-2xl text-gray-500 '>{desc}</h1>
     <br/>
     <br/>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laboriosam, reprehenderit error reiciendis porro facilis aliquam dolore explicabo possimus eum, at cumque. In unde, a qui omnis reiciendis, eos delectus dolor, eligendi accusantium officia labore minima neque. Suscipit laboriosam molestiae provident aliquid perferendis harum fuga consequatur quia eligendi. Magni, sed doloribus. Dolore officiis pariatur nisi hic animi repellendus nam neque ab unde numquam esse saepe voluptatem debitis, non quod corporis dolores quidem a laborum suscipit architecto quisquam id fuga blanditiis! Harum saepe expedita reprehenderit voluptatibus quibusdam ad labore, provident quis in culpa modi. Numquam hic possimus consequuntur veritatis qui, harum nobis culpa unde fugit sed omnis delectus cumque aliquid corrupti cum. Doloremque veritatis molestias commodi nisi obcaecati voluptates aut provident placeat unde ad sed, perspiciatis alias neque magni quae vero modi inventore deserunt, iste cum a. Minima accusantium sapiente, velit quis, non officia maiores quia obcaecati culpa excepturi doloremque consectetur ipsa vitae maxime quisquam eveniet corrupti repellendus vero error atque illum libero, modi iusto? Sed velit, fugiat nesciunt eligendi sit maiores nulla tempora fuga ratione adipisci reiciendis, earum voluptatum. Architecto ratione totam libero labore doloremque obcaecati eveniet consequatur ipsum perferendis, fugiat ad. Deleniti, eveniet alias quis in hic officia consequatur neque, accusamus, enim repellat ullam atque. Illo nesciunt voluptatum nobis voluptate quibusdam veritatis, ducimus similique eaque dolores atque blanditiis velit adipisci qui excepturi? Repellendus enim vel molestiae totam, quibusdam quam tempora aperiam tempore explicabo ipsum. Fuga vel quasi iusto, fugiat possimus totam, magnam officiis ut rem cumque dolore sunt, minima veritatis quia reprehenderit? Aliquam saepe repellat doloremque, eius, sit nesciunt voluptatibus provident explicabo harum, minima quibusdam illo? Mollitia optio in excepturi dolorum, qui accusamus quisquam rerum voluptate quod atque laudantium consequuntur? Ex totam numquam minus culpa cupiditate praesentium provident ad obcaecati aliquam quisquam, quibusdam veniam perspiciatis, eaque alias molestias voluptatum!</p>
     <br/>
     <br/>

      <p>
        <ul>
          <li>Lorem</li>
          <li>Ispum</li>
          <li>Dollar</li>
          <p>atque blanditiis velit adipisci qui excepturi? Repellendus enim vel molestiae totam, quibusdam quam tempora aperiam tempore explicabo ipsum. Fuga vel quasi iusto, fugiat possimus totam, magnam officiis ut rem cumque dolore sunt, minima veritatis quia reprehenderit? Aliquam saepe repellat doloremque, eius, sit nesciunt voluptatibus provident explicabo harum, minima quibusdam illo? Mollitia optio in excepturi dolorum, qui accusamus quisquam rerum voluptate quod atque laudantium consequuntur? Ex totam numquam minus culpa cupiditate praesentium provident ad obcaecati aliquam quisquam, quibusdam veniam perspiciatis, eaque alias molestias voluptatum!</p>
        </ul>

      </p>

      <br/>

      <p className='text-xl text-blue-600'>Thanks for reading</p>


    </div>

    </div>

    </div>
    

    <footer className='bg-black  sticky p-5 bottom-0  w-screen text-white text-center'>
      Connect with us at <button className='border-2 border-white p-2'>Contact</button>
    </footer>
    </>
    
  )
}

export default Showfull