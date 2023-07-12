import { Link } from 'react-router-dom';

import { FaPhone } from "react-icons/fa";
import {  TbMessageDots} from "react-icons/tb";


const Contact = () => {

  return (
    <div className="grid grid-cols-1  xl:grid-cols-2 py-20 md:py-40  justify-center items-center mt-10 w-full px-4  md:px-40 ">
     
      <div className=" items-center justify-center w-full grid">
        <h2 className="  flex font-titleFont text-3xl md:text-3xl lg:text-3xl lgl:text-6xl font-semibold md:font-bold  justify-center items-center  text-center pt-20 pb-10 w-full  bg-gradient-to-r from-sky-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Shop Online for Stylish Clothing. We Deliver to Your Doorstep! 
       
        </h2>
        

      </div>
      {/*division*/}
      <div className=" w-full  gap-4  rounded-lg items-center justify-center px-5  py-4 grid ">
          <h3 className=" text-3xl pb-4 text-center font-titleFont font-semibold dark:text-yellow-400 text-blue-400 justify-center items-center">
            Get it Touch!
          </h3>
           
          <div className="md:pt-4 flex justify-center items-center px-3">
             <Link
               to="mailto:tu-correo@hotmail.com"
               className="flex flex-row border-[1px] border-purple-400 hover:text-white hover:bg-gradient-to-br from-blue-600 via-blue-400 to-blue-300  fond-light md:font-bold text-sm md:text-base py-2 px-6 md:px-10 gap-1 rounded-md justify-center items-center "
             >
               Contact me
               <TbMessageDots
                 size={30}
                 className="border-[1px] border-white rounded-full px-1 items-center justify-center dark:text-white"
             />
            </Link>
          </div>
     </div>
    
   </div>
  );
};

export default Contact;