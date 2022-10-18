import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Quote from "./pages/quote";
import Calculator from "./pages/calculator";


const RouteSwitch = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;