 import { useState } from "react";
import useCoustomHook from "../useHook/AppHoouk";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Apps = () => {
  const { products } = useCoustomHook();
  const [serch, setSerch] = useState('');

  const term = serch.trim().toLocaleLowerCase();
  const serchProduct = term
    ? products.filter(product => product.title.toLocaleLowerCase().includes(term))
    : products;

  return (
    <div>
      <div className="flex justify-between mb-4 mt-9 w-10/12 mx-auto">
        <h1 className="text-3xl font-bold">
          Products Length ({serchProduct.length})
        </h1>

        <label className="input">
          <input
            value={serch}
            onChange={(e) => setSerch(e.target.value)}
            type="search"
            placeholder=" 🔎Search Products"
            className=" border-gray-300 rounded-lg  "
          />
        </label>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-10/12 mx-auto p-4'>
        {
          serchProduct.map(p => (
            <div key={p.id} className="card bg-base-100 shadow-sm hover:scale-105 transition">
              <div className='mt-4 p-4'>
                <figure className="px-10 pt-10 bg-gray-300 p-5">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="rounded-xl w-[100px] hover:scale-110 transition"
                  />
                </figure>
              </div>

              <div className="card-body items-center text-center">
                <h2 className="card-title">{p.title}</h2>
              </div>

              <div className='flex justify-between p-4 w-full'>
                <div className='flex items-center text-[#00D390] bg-green-200 p-2 rounded-lg'>
                  <MdOutlineFileDownload />
                  <h1 className='ml-2'>{p.downloadsMillion ? `${p.downloadsMillion}M` : p.downloads}</h1>
                </div>
                <div className='flex items-center text-[#FF8811] bg-amber-100 p-2 rounded-lg'>
                  <FaStarHalfAlt />
                  <h1 className='ml-2'>{p.ratingAvg}</h1>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Apps;
