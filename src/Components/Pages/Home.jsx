import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
 import { FaAppStoreIos } from "react-icons/fa";
const Home = () => {
 
    return (
        <div>
           <div className='text-center mt-15'>
            <h1 className='md:text-8xl text-4xl font-bold'>We Build <br />
<span className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
<p className='mt-4 text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
           </div>
           <div className='text-center'>
            <a className='btn' href="https://chatgpt.com/c/68e530a1-d810-8323-a62e-26c76bf64a37"><FaGooglePlay /> Google Play</a>  
           <a className='btn' href=""> <FaAppStoreIos /> App Store</a>


           </div>
        </div>
    );
};

export default Home; <h1>this is Home</h1>