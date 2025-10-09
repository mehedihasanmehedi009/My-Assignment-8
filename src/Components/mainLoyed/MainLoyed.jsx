import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

const MainLoyed = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navber />

      {isLoading ? (
        <div className="flex justify-center items-center flex-1 bg-gray-50">
          <div className="relative w-16 h-16">
            <div className="absolute w-full h-full border-4 border-blue-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute w-full h-full border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <Outlet />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MainLoyed;
