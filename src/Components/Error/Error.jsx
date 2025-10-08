 import { useRouteError } from "react-router";
import Img from "../../assets/Frame 1171277698 (1).png";

const Erroes = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <p className="mb-4 text-red-500 text-lg">{error.message}</p>
      <img src={Img} alt="Error" className="max-w-full h-auto" />
    </div>
  );
}

export default Erroes;
