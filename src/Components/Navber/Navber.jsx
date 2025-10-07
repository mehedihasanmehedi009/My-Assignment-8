 import "./Navber.css"
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
const Navber = () => {
  
    return (
        <>
        
 
 

  <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <nav>
          <li ><NavLink to="/" >Home</NavLink></li>
      <li>
         <NavLink to="/products">Apps</NavLink>  
      </li>
      <li><NavLink to="/Installation" >Installation</NavLink></li>
       </nav>
      </ul>
    </div>
    <a className="  text-3xl  font-bold   bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent md:ml-12 ">  HERO.IO</a>
  </div>
  <div className="navbar-center md:block  hidden ">
    <ul className="menu menu-horizontal px-1">
<nav>
        <NavLink to="/" >Home</NavLink>

         <NavLink to="/products">Apps</NavLink>  

      <NavLink to="/Installation" >Installation</NavLink>
</nav>
    </ul>
  </div>
  <div className="navbar-end">
   <a className="btn text-[18px] text-white bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]  md:mr-12"><FaGithub /> Contribute</a>
  </div>
</div>
        </>
    );
};

export default Navber;