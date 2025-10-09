 
import img from "../../assets/4660853_2417235 1.png"
 import { useEffect, useState } from "react";
import useCoustomHook from "../useHook/AppHoouk";
import AppCard from "./AppCard";
import { Link } from "react-router";
 
const Apps = () => {
  const { products } = useCoustomHook();
  const [serch, setSerch] = useState("");
  const [Products, setProducts] = useState(products);
  const[Loading,setLoading]=useState(false)
 
   const term = serch.trim().toLowerCase();
    useEffect(()=>{
       setLoading(true)
       const timer = setTimeout(()=>{
        if(term){
          const data = products.filter((p)=>p.title.toLowerCase().includes(term))
          setProducts(data)
        }
         else{
          setProducts(products)
         }
            setLoading(false);

       },100)    
    return()=>clearTimeout(timer)
    },[term,products])

  return (
    <div>
      <div className="text-center mt-5">
        <h1 className="text-[30px] md:text-[48px] font-bold">
          Our All Applications
        </h1>
        <p className="text-[20px] md:p-0 p-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between mb-4 mt-9 w-10/12 mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold">
          Products Length ({Products.length})
        </h1>
    
          <label className="input">
          <input
            value={serch}
            onChange={(e) => setSerch(e.target.value)}
            type="search"
            placeholder="🔎 Search Products"
            className="border-gray-300 rounded-lg px-3 py-2"
          />
        </label>
      </div>
      {
        Loading ?  (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
        </div>
      )  : Products.length === 0 ? (
        
         <div className="flex flex-col justify-center items-center h-[300px] ">
           <img
             src= {img}
             alt="Not Found"
             className="w-[500px]  opacity-70 animate-pulse"
           />
           <h2 className="text-2xl font-semibold text-gray-600">
             OPPS!! APP NOT FOUND😢
           </h2>
           <p className="text-gray-500  text-center">
            The App you are requesting is not found on our system.  please try another apps
           </p>
           <Link to="/"  className="btn bg-blue-400 text-white">Go Back</Link>
         </div>
       ) :(
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-10/12 mx-auto p-4">
          {Products.map((p) => (
            <AppCard key={p.id} p={p}></AppCard>
          ))}
        </div>)
      }

 
  
      
    </div>
  );
};

export default Apps;


 