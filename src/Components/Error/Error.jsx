 import { useRouteError, Link } from "react-router";
import Img from "../../assets/Frame 1171277698 (1).png";

const Erroes = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <img 
        src={Img} 
        alt="Error illustration" 
        className="w-[900px]    animate-pulse"
      />
       
      <p className="text-gray-600 mb-4">
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>
      <Link 
        to="/" 
        className="btn bg-[#00D390] text-white px-6 py-2 rounded-lg hover:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Erroes;
