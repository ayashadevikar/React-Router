import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';


const Navbar = () =>{

// adding the states 
const [isActive, setIsActive] = useState(false);

// //add the active class
const toggleActiveClass = () => {
  setIsActive(!isActive);
}


        return (

    <>

   {/* mobile view */}
   <div className='md:hidden p-2'>
     <i onClick={toggleActiveClass} className=
     {`fas ${isActive ? "fa-times" : "fa-bars"}`}>
   
   </i>
        
       
  
    <ul className={`block bg-pink-200 w-full p-2 
      ${isActive ?  'block' : 'hidden' }`}>
          
        <Link to="/Home">
            <li className='hover:text-blue-700'>Home</li>
        </Link>

        <Link to="/About">
             <li className='hover:text-blue-700'>About</li>
         </Link>

         <Link to="/Contact">
              <li className='hover:text-blue-700'>Contact</li>
          </Link>
     </ul>

     </div>

  {/* laptop view */}
  <div>
    
        <ul className="hidden md:flex justify-between bg-gray-500 p-10 px-10  -mt-2 text-white">
          
            <Link to="/Home">
                <li className='hover:text-blue-700'>Home</li>
            </Link>

            <Link to="/About">
              <li className='hover:text-blue-700'>About</li>
            </Link>

           <Link to="/Contact">
             <li className='hover:text-blue-700'>Contact</li>
          </Link>
       </ul>
   
   </div>

   </>  
)
}
export default Navbar ;

