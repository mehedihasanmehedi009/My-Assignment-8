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
    hydrateFallbackElement: <span className="loading loading-spinner text-error"></span>,
   children:[
     { index:true,
    element:<Home/>,
     loader:()=>fetch("/App.json")
  }
  ,{
    path:"/products",
    element:<Apps/>,
     loader:()=>fetch("/App.json")
 
  },{
    path:"/Installation",
    element:<Installation/>,
    loader:()=>fetch("/App.json")
  }
  ,{
    path:"/product/:id",
    element:<CardDiteils/>,
     loader:()=>fetch("/App.json")
  }
   ]
  }
 
]);