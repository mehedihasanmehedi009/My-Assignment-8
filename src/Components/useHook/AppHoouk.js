import { useEffect, useState } from "react";
import axios from 'axios';
const useCoustomHook = () => {
 const [products,setProducts]= useState([])
 const [loading,setLoading]= useState(true)
 const [error,setError]= useState(null)

 useEffect(() => {
    setLoading(true)
    axios("/App.json")
    .then((data)=>  setProducts(data.data))
    .catch(err=>setError(err)
    .finally(()=>setLoading())
)
 },[])
 return{products,loading,error}
};

export default useCoustomHook;