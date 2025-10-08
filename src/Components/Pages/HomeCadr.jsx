import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
const HomeCadr = ({p}) => {
          const {image,title,ratingAvg
,downloads}= p
    return (
        <div>
            <div className="card bg-base-100  shadow-sm hover:scale-105 transition">
   <div className=' mt-4 p-4 '>
     <figure className="px-10 pt-10 bg-gray-300 p-4">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl w-[100px] hover:scale-110 transition" />
  </figure>
   </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
  </div>
  <div className='flex justify-between p-4'>
   <div className=' flex items-center text-[#00D390] bg-green-200 p-2 rounded-lg '>
    <MdOutlineFileDownload />
     <h1 className=''>{downloads}</h1>
   </div>
   <div className='flex items-center text-[#FF8811] bg-amber-100 p-2 rounded-lg'>
     <FaStarHalfAlt /> 
    <h1>{ratingAvg}</h1></div>
  </div>
</div>
        </div>
    );
};

export default HomeCadr;