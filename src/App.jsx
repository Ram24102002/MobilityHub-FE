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
import RentBuy from "./Pages/RentBuy";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import AdminPanel from "./Pages/AdminPanel";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/product/:id" element={<ProductViewPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/SupportContact" element={<SupportContact />} />
          <Route path="/ListItemForm" element={<ListItemForm />} />
          <Route path="/rent-buy" element={<RentBuy />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
