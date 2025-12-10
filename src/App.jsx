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


function App() {

  return (
    <>
      <Router>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
