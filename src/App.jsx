import './App.css'
import Navbar from './components/common/Navbar';
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Pages/Products';
import Footer from './components/common/Footer';
import ImageUploader from './components/common/ImageUploader';


function App() {

  return (
    <>
      <Router>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />} />
          <Route path="/image-uploader" element={<ImageUploader />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
