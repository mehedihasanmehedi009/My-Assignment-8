import { useRouteError } from "react-router";

 const  Erroes = () => {
  const error = useRouteError();
  return <div>{error.message}   404</div>;
}

export default Erroes