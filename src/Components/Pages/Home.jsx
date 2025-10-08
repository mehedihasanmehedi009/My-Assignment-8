import React from 'react';
 import Fi from"../../assets/fi_5977575 (1).png"
 import Grp from"../../assets/Group.png"
 import Ip from  "../../assets/Iphone.png"
 import El24 from  "../../assets/Ellipse 24.png"
  import El25 from  "../../assets/Ellipse 25.png"
  import El26 from  "../../assets/Ellipse 26.png"
  import El27 from  "../../assets/Ellipse 27.png"
  import El28 from  "../../assets/Ellipse 28.png"
  import El29 from  "../../assets/Ellipse 29.png"
import useCoustomHook from '../useHook/AppHoouk';
import HomeCadr from './HomeCadr';
import { Link } from 'react-router';



 const Home = () => {
    const { products} = useCoustomHook()
    console.log(products)
    return (
        <div>
           <div className='text-center mt-15'>
            <h1 className='md:text-8xl text-4xl font-bold'>We Build <br />
<span className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
<p className='mt-4 text-gray-500 p-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
           </div>
           <div className='text-center  mt-3 mb-5 '>
            <a className='btn text-[19px] p-5 ' href="https://play.google.com/?authuser=0"><img src={Grp} alt="" />Google Play</a>   
           <a className='btn text-[19px] p-5' href="https://appstoreconnect.apple.com/"><img src={Fi} alt="" />App Store</a>
           </div>
           <div className=' flex justify-around'>
              <div className=' md:block hidden lg:ml-[500px]  mt-[100px]'>
                <div  className='ml-12 '><img src={El24} alt="" /></div>
                <div><img className='m-5' src={El26} alt="" /></div>
                <div><img className='' src={El28} alt="" /></div>
              </div>
              <div className='px-4 md:px-0'>
            <img src={Ip} alt="" />
              </div>
              <div className=' md:block hidden lg:mr-[500px] mt-[100px]' >
                  <div className='mr-12 '><img src={El25} alt="" /></div>
                <div className='m-5'><img src={El27} alt="" /></div>
                <div className='ml-12'> <img src={El29} alt="" /></div>
              </div>
           </div>
           <div className=' bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]'>
           <div className='p-9'>
              <h1 className='text-2xl text-white md:text-6xl font-bold text-center'>Trusted by Millions, Built for You</h1>
             <div className=' flex justify-around mt-5'>
              <div>
              <p className='text-white '>Total Downloads</p>
              <h1 className='md:text-6xl font-bold text-white mt-2'>29.6M</h1>
              <p className='text-white mt-2'>21% more than last month</p>
             </div>
            <div>
              <p className='text-white'>Total Reviews</p>
              <h1 className='md:text-6xl font-bold text-white mt-2'>906K</h1>
              <p className='text-white mt-2'>46% more than last month </p>
             </div>
             <div>
              <p className='text-white'>Active Apps</p>
              <h1 className='md:text-6xl font-bold text-white mt-2'>132+</h1>
              <p className='text-white mt-2'>31 more will Launch</p>
             </div>
             </div>
           </div>
           </div>
           <div className='text-center mt-7 mb-4'>
             <h1 className='text-5xl font-bold'>Trending Apps</h1>
             <p className='text-gray-400 mt-2 '>Explore All Trending Apps on the Market developed by us</p>
           </div>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-10/12 mx-auto'> 
             {
            products.map((p=> <HomeCadr key={p.id} p={p}></HomeCadr>))
           }
          </div>
          
           <div className='text-center p-5'>
             <Link className='btn text-2xl hover:bg-indigo-500 hover:text-white ' to="/products">All Apps</Link>
           </div>
           
        </div>
    );
};

export default Home; <h1>this is Home</h1>