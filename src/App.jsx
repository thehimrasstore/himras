import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Footer from './components/footer/Footer';
import Product from './components/products/Product1';
import './App.css';
// import Signup from './components/register/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* Add products with different props */}
        <Route
          path="/shop/product1"
          element={<Product image="../product1.jpg" title="Juice" price="16.00" description="This is a refreshing juice made from fresh fruits." />}
        />
        <Route
          path="/shop/product2"
          element={<Product image="../product1.jpg" title="Smoothie" price="18.00" description="A creamy smoothie made with organic ingredients." />}
        />
        <Route
          path="/shop/product3"
          element={<Product image="../product1.jpg" title="Herbal Tea" price="12.00" description="Relax with our specially brewed herbal tea." />}
        />
        <Route
          path="/shop/product4"
          element={<Product image="../product1.jpg" title="Herbal Tea" price="12.00" description="Relax with our specially brewed herbal tea." />}
        />
        <Route
          path="/shop/product5"
          element={<Product image="../product1.jpg" title="Herbal Tea" price="12.00" description="Relax with our specially brewed herbal tea." />}
        />
        <Route
          path="/shop/product6"
          element={<Product image="../product1.jpg" title="Herbal Tea" price="12.00" description="Relax with our specially brewed herbal tea." />}
        />
        <Route
          path="/shop/product7"
          element={<Product image="../product1.jpg" title="Herbal Tea" price="12.00" description="Relax with our specially brewed herbal tea." />}
        />
        <Route
          path="/shop/product8"
          element={<Product image="../product1.jpg" title="Herbal Tea" price="12.00" description="Relax with our specially brewed herbal tea." />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
