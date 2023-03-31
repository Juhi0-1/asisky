import Navbar from "./components/Navbar";
import About from "./components/About";
import Testimonial from "./components/testimonial/Testimonial";
import Services from "./components/services/Services";

import {
  
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Blogs from "./components/blogs/Blogs";
import Showfull from "./components/blogs/Showfull";
import Contact from "./components/Contact";
function App() {
  return (
    <>




<BrowserRouter>
<Routes>
<Route path="/" element={<Navbar/>}/>
<Route path="/about" element={<About/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
      
        <Route path="/services" element={<Services/>}/>
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/showfull/:id" element={<Showfull />}/>
        <Route path="/contact" element={<Contact/>}/>
        
</Routes>
</BrowserRouter>


    
      
    </>
  );
}

export default App;

       
       

       