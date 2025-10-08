 import { useState } from "react";
import useCoustomHook from "../useHook/AppHoouk";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import AppCard from "./AppCard";

const Apps = () => {
  const { products } = useCoustomHook();
  const [serch, setSerch] = useState('');

  const term = serch.trim().toLocaleLowerCase();
  const serchProduct = term
    ? products.filter(product => product.title.toLocaleLowerCase().includes(term))
    : products;

  return (
    <div>
      <div className="text-center mt-5">
        <h1 className=" text-[30px] md:text-[48px] font-bold">Our All Applications</h1>
        <p className=" text-[20px] md:p-0 p-4">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className="flex justify-between mb-4 mt-9 w-10/12 mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold">
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
          serchProduct.map(p=> <AppCard key={p.id} p={p}></AppCard>)
        }
      </div>
    </div>
  );
};

export default Apps;
