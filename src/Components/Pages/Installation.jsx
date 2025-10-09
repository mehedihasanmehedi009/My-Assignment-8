 

 import { ToastContainer, toast } from 'react-toastify';
     import React, { useEffect, useState } from 'react';
   import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

 const Installation = () =>{
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("Wishlist"));
    if (existingList) setWishlist(existingList);
  }, []);

   const  handelRemove = id =>{
  const ExistingList = JSON.parse(localStorage.getItem("Wishlist"));
    let updatadList = ExistingList.filter(p=>p.id !==id)
    setWishlist(updatadList)
  localStorage.setItem("Wishlist",JSON.stringify( updatadList))
     toast("Uninstall complyt-... ");
  }
  
  const sortedItem = () => {
    if (sortOrder === "ratingAvg-acd") {
      return [...wishlist].sort((a, b) => a.ratingAvg - b.ratingAvg);
    } else if (sortOrder === "ratingAvg-dac") {
      return [...wishlist].sort((a, b) => b.ratingAvg - a.ratingAvg);
    } else {
      return wishlist;
    }
  };
 
  return (
    <>
     <div className='text-center mt-8 mb-6'>

      <h1 className=' text-2xl md:text-4xl font-bold'>
        Your Installed Apps
      </h1>
      <p className='text-gray-500 mt-2 p-2'>Explore All Trending Apps on the Market developed by us</p>
     </div>

      <div className='p-2 md:w-9/12 mx-auto'>  
<div className="mt-5">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">
         {sortedItem().length} Apps Found 
          </h1>

          <label className='form-control w-full max-w-xs'>
            <select
              className='select select-bordered'
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}>
              <option value="none">Sort by RatingAvg</option>
              <option value="ratingAvg-acd">Low → High</option>
              <option value="ratingAvg-dac">High → Low</option>
            </select>
          </label>
        </div>
      </div>

      <div className=''>
        {sortedItem().map(p => (
          <div key={p.id} className="card card-side bg-base-100 shadow-sm mt-9   ">
            <div className='md:p-5 '>
              <figure className=' md:p-3 bg-gray-300'>
              <img className=' w-[90px] mt-4    p-2' src={p.image} alt={p.name} />
            </figure>
            </div>
            <div className="card-body">
          <div className='flex justify-between items-center'>
                <div className=''>
                   <div >
                  <h2 className="card-title md:mb-5 md:text-2xl text-[12px]">Forest:{p.title}</h2>
                 </div>
                 <div className='flex  space-x-2  md:space-x-7  md:w-full items-center'>
                               <div className='flex  items-center   text-[#00D390] bg-green-200 md:p-2 rounded-lg'>
                                 <MdOutlineFileDownload />
                                 <h1 className='md:ml-2'>{p.downloadsMillion ? `${p.downloadsMillion}M` : p.downloads}</h1>
                               </div>
                               
                               <div className='flex items-center text-[#FF8811] bg-amber-100 md:p-2 rounded-lg'>
                                 <FaStarHalfAlt />
                     <h1 className='md:ml-2'>{p.ratingAvg}</h1>
               </div> 
                      <div>
                <p className='text-gray-400'>258 MB</p>
                </div>   
              </div>
              
              </div>
              <div>
                 <div className="card-actions 
              ">
                <button onClick={()=>handelRemove(p.id)} className="btn w-[50px] md:w-full md:h-[60px] text-[10px] md:text-[20px]  font-bold  text-white bg-[#00D390]  "> <span className='py-4'> Uninstall</span></button>
              </div>
              </div>
          </div>
            </div>
            
          </div>
        ))}
      </div>
      </div>
        <ToastContainer />
    </>
  );
};

 

      
export default Installation 