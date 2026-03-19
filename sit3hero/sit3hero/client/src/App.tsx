import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import Home from "./pages/Home";
import SizeGuide from "./pages/SizeGuide";
import Shipping from "./pages/Shipping";
import Privacy from "./pages/Privacy";
import Warranty from "./pages/Warranty";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <CartSidebar />
    </div>
  );
}
