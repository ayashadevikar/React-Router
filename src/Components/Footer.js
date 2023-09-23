import React from "react";

const Footer = () => {
    return (
        <>
         
         {/* mobile view */}
         {/* <div className="fixed top-[93%] bg-slate-700  py-4 text-white">
                     
                     <p className='text-center'>Copyright@2023</p>  
        </div> */}


         {/* laptop view */}
                <div className="fixed top-[37rem]  md:fixed md:top-[40rem] bg-slate-700 w-[100vw] p-8 text-white">
                     
                         <p className='text-center'>Copyright@2023</p>  
                </div>
          

            
            
        </>
    );
};

export default Footer ;