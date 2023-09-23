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
     
           
           {/* mobile view */}

     
           <div className="md:hidden flex flex-wrap justify-center gap-y-4 mt-4 mb-24">  
            
     
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



           {/* laptop view */}
       <div className="hidden md:flex justify-center items-center gap-10 h-[50vh]">  
            
     
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
