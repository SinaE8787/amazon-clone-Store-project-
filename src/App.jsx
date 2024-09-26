import { Route, Routes } from "react-router-dom";
import Private from "./Private";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Buy from "./pages/Buy/Buy";
import RegisterLogin from "./pages/RegisterLogin/RegisterLogin";
import Admin from "./pages/Admin/Admin.jsx";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:name" element={<Product />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/RegisterLogin" element={<RegisterLogin />} />
          <Route
            path="/Admin"
            element={
              <Private>
                <Admin />
              </Private>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
