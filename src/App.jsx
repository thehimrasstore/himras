import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';
import ProductDetails from './components/productsDetails/ProductDetails.jsx';
import './App.css';
import Cart from './pages/Cart/Cart.jsx';
import ComingSoon from './pages/CommingSoon/CommingSoon.jsx';
// import Signup from './components/register/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* Added Dynamic Routes */}
        <Route path="/shop/product/:productId" element={<ProductDetails />} />
        <Route path="/mycart" element={<Cart />} />
        <Route path="/aboutus" element={<ComingSoon />} />
        <Route path="/blogs" element={<ComingSoon />} />
        <Route path="/contactus" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
