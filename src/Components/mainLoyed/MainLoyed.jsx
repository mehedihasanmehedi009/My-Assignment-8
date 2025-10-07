import React from 'react';
import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const MainLoyed = () => {
    return (
        <div>
            <div className=' flex flex-col min-h-screen'>
            <Navber></Navber>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLoyed;