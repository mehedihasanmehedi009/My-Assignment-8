import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
           <div className='bg-[#001931]'>
          <div className='p-8'>
             <div className=' flex justify-between  items-center'>
            <div>
             <h1 className='text-white'>HERO.IO</h1>
           </div>
           
           <div>
            <h1 className='text-white'>Social Links</h1>
           <div className='flex'>
           <div className=' p-1 '><h1  className='text-white ml-2'><FaXTwitter /></h1></div>
           <div className=' p-1 '>        <h1  className='text-white'><FaLinkedin /></h1></div>
        <div className=' p-1 '><h1 className='text-white'><FaFacebook /></h1> </div>
           </div>
           </div>
             
           </div>
             <div className='text-white border-1 border-b-gray-300'></div>
             <h1 className='text-white text-center mt-4'>Copyright © 2025 - All right reserved</h1>
          </div>
          
           </div>
        </div>
    );
};

export default Footer;