import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import { Outlet } from "react-router-dom";
import './App.css';
import './index.css';


function App() {
  return (
    <>
       <Navbar />
       <Outlet />
     
           
       <div className="flex flex-wrap  mt-4 md:flex justify-center items-center gap-10 h-[50vh]">  
            
     
              <Cards  
              
               imgSrc="./images/nature1.jpg" 
               alt="nature"
            
              />  

          <Cards 
                    imgSrc="./images/nature2.jpg" 
                    alt="nature"
              
            />

           <Cards 
                    imgSrc="./images/nature3.jpg" 
                    alt="nature"
              
            />
         
          </div>
       <Footer />
     </>
  );
}

export default App;
