 

 import { ToastContainer, toast } from 'react-toastify';
     import React, { useEffect, useState } from 'react';
   import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLoaderData } from 'react-router';

 const Installation = () =>{
  const data = useLoaderData()
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("Wishlist"));
    if (existingList) setWishlist(existingList);
  }, []);

   const  handleRemove = id =>{
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
<div className="mt-5 md:p-0 p-2">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">
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

      <div className='p-4'>
        
        {sortedItem().map(p => (
     <div key={p.id} className="card md:card-side bg-base-100 shadow-sm mt-5">
          <figure className='py-5 px-3'>
              <img className='md:w-[100px] w-[50px] rounded-2xl md:p-4 p-2 bg-gray-300' src={p.image} alt={p.name} />
            </figure>
             <div className="card-body">
                <div className='text-center md:text-left'>
                   <h2 className=" text-[10px] md:text-[20px]    ">{p.title}</h2>
                </div>
                <div className='flex  space-x-2  md:space-x-7  md:w-full items-center  md:justify-start  justify-center mx-auto   '>
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
            <div className='md:pr-4 md:flex md:items-center justify-center mx-auto mb-4 md:mb-0 gap-3'>
      
              <button
                onClick={() => handleRemove(p.id)}
                className='btn bg-[#00D390] w-[40px] md:w-[80px] text-white'
              >
           <span className='text-[10px] md:text-[17px]'> Uninstall</span>
              </button>
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