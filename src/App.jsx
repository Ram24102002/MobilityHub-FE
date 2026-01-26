import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Footer from "./components/common/Footer";
import Marketplace from "./Pages/Marketplace";
import ProductViewPage from "./Pages/ProductViewPage";
import AboutUs from "./Pages/AboutUs";
import SupportContact from "./Pages/SupportContact";
import ListItemForm from "./Pages/ListItemForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/ProductViewPage" element={<ProductViewPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/SupportContact" element={<SupportContact />} />
          <Route path="/ListItemForm" element={<ListItemForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
