 

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

  const sortedItem = () => {
    if (sortOrder === "ratingAvg-acd") {
      return [...wishlist].sort((a, b) => a.ratingAvg - b.ratingAvg);
    } else if (sortOrder === "ratingAvg-dac") {
      return [...wishlist].sort((a, b) => b.ratingAvg - a.ratingAvg);
    } else {
      return wishlist;
    }
  };
  const  handelRemove = id =>{
  const ExistingList = JSON.parse(localStorage.getItem("Wishlist"));
    let updatadList = ExistingList.filter(p=>p.id !==id)
    setWishlist(updatadList)
  localStorage.setItem("Wishlist",JSON.stringify( updatadList))
     toast("Installation started... ");
  }

  return (
    <>
     

      <div className='w-9/12 mx-auto'>  
<div className="mt-5">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">
         ({sortedItem().length}) Products Found 
          </h1>

          <label className='form-control w-full max-w-xs'>
            <select
              className='select select-bordered'
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by ratingAvg</option>
              <option value="ratingAvg-acd">Low → High</option>
              <option value="ratingAvg-dac">High → Low</option>
            </select>
          </label>
        </div>
      </div>

      <div className=''>
        {sortedItem().map(p => (
          <div key={p.id} className="card card-side bg-base-100 shadow-sm mt-9  ">
            <div className='p-5 '>
              <figure className='p-3 bg-gray-300'>
              <img className='w-[80px] ' src={p.image} alt={p.name} />
            </figure>
            </div>
            <div className="card-body">
          <div className='flex justify-between items-center'>
                <div className=''>
                   <div >
                  <h2 className="card-title mb-5">Forest:{p.title}</h2>
                 </div>
                 <div className='flex  space-x-7  w-full items-center'>
                               <div className='flex  items-center text-[#00D390] bg-green-200 p-2 rounded-lg'>
                                 <MdOutlineFileDownload />
                                 <h1 className='ml-2'>{p.downloadsMillion ? `${p.downloadsMillion}M` : p.downloads}</h1>
                               </div>
                               
                               <div className='flex items-center text-[#FF8811] bg-amber-100 p-2 rounded-lg'>
                                 <FaStarHalfAlt />
                     <h1 className='ml-2'>{p.ratingAvg}</h1>
               </div> 
                      <div>
                <p className='text-gray-400'>258 MB</p>
                </div>   
              </div>
              
              </div>
              <div>
                 <div className="card-actions 
              ">
                <button onClick={()=>handelRemove(p.id)} className="btn text-white bg-[#00D390]  ">Uninstall</button>
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