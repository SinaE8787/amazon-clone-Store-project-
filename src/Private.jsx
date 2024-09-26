import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ProductsProvider from "./context/ProductsProvider";
const Private = ({ children }) => {
  const { isAdmin } = useContext(ProductsProvider);
  return <>{isAdmin ? children : <Navigate to="/" />}</>;
};
export default Private;
