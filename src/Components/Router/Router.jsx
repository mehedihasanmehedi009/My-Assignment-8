import { createBrowserRouter } from "react-router";
import MainLoyed from "../mainLoyed/MainLoyed";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Erroes from "../Error/Error";
import CardDiteils from "../Pages/CardDiteils";

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLoyed/>,
    errorElement:<Erroes/>,
   children:[
     { index:true,
    element:<Home/>
  }
  ,{
    path:"/products",
    element:<Apps/>
  },{
    path:"/Installation",
    element:<Installation/>
  }
  ,{
    path:"/product",
    element:<CardDiteils/>
  }
   ]
  }
 
]);