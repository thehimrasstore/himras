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
          element={<Product image="../product10.jpg" title="Jar candle" price="120.00" description="Jar Candle is the perfect blend of ambiance and elegance, designed to elevate any space with its warm, soothing glow. Encased in a stylish, reusable jar, this candle is made from high-quality wax and infused with enchanting fragrances that create a relaxing and inviting atmosphere. Whether you're unwinding after a long day, setting the mood for a special evening, or simply enhancing your home decor, the jar candle adds a touch of charm and serenity. With a clean burn and long-lasting aroma, it’s a delightful addition to your space or a thoughtful gift for loved ones." />}
        />
        <Route
          path="/shop/product2"
          element={<Product image="../product6.jpg" title="Malta squash" price="200.00" description="Malta Squash is a refreshing and tangy beverage concentrate made from the rich, citrusy flavors of ripe malta oranges. Known for its vibrant orange color and natural sweetness, this squash is perfect for quenching your thirst on a hot day. Packed with Vitamin C and essential nutrients, it not only revitalizes but also boosts your immune system. Simply mix with water or soda to enjoy a delicious, fruity drink, or use it as a flavorful addition to cocktails, desserts, or marinades. A versatile and delightful treat for all occasions!" />}
        />
        <Route
          path="/shop/product3"
          element={<Product image="../product8.jpg" title="Lavendra" price="250.00" description="Organic Lip Balm is a nourishing blend of natural ingredients designed to keep your lips soft, hydrated, and healthy. Crafted with care, it contains organic butters, oils, and beeswax to lock in moisture and provide lasting protection against dryness and chapping. Free from harmful chemicals and synthetic additives, this gentle formula is suitable for all skin types, including sensitive lips. Available in a variety of subtle, natural flavors, this lip balm is perfect for daily use, leaving your lips feeling smooth, supple, and kissable. Pamper your lips with the pure goodness of nature!." />}
        />
        <Route
          path="/shop/product4"
          element={<Product image="../product13.jpg" title="Raw Multidlora" price="200.00" description="Pure Honey is nature’s golden treasure, harvested from the finest blossoms to bring you a rich, natural sweetness packed with health benefits. Raw and unprocessed, it retains its nutritional value, enzymes, and antioxidants, making it a wholesome addition to your diet. Perfect as a natural sweetener for your tea, desserts, or breakfast, or as a key ingredient in skincare remedies. With its smooth texture and delightful flavor, our honey is a versatile and healthy choice for enhancing your lifestyle. Experience the pure, golden goodness of nature in every drop!" />}
        />
        <Route
          path="/shop/product5"
          element={<Product image="../product11.jpg" title="A2 Cow Ghee (250 ml)" price="700.00" description="Natural Ghee is a traditional, nutrient-rich superfood made from pure, high-quality milk, crafted to perfection using age-old methods. Known for its rich aroma, golden color, and creamy texture, this wholesome ghee is a powerhouse of energy and essential nutrients. Packed with healthy fats, vitamins A, D, E, and K, it supports digestion, strengthens immunity, and enhances overall well-being. Perfect for cooking, baking, or drizzling over your favorite dishes, it adds a delicious flavor and authentic touch to every meal. Embrace the goodness of tradition with our 100% natural ghee!" />}
        />
        <Route
          path="/shop/product6"
          element={<Product image="../product1.jpg" title="Apple jam" price="180.00" description="Apple Jam is a delightful spread made from juicy, sun-ripened apples, cooked to perfection to bring out their natural sweetness and rich flavor. With its smooth texture and refreshing taste, this jam is a versatile addition to your breakfast table, perfect for spreading on toast, pancakes, or pairing with baked goods. Free from artificial colors and preservatives, it’s a wholesome treat for the entire family. Packed with the goodness of real fruit, our apple jam is a delicious way to start your day or add a fruity twist to your favorite snacks!" />}
        />
        <Route
          path="/shop/product7"
          element={<Product image="../product9.png" title="Masala Tea" price="300.00" description="Herbal Tea is a soothing blend of carefully selected natural herbs and botanicals, crafted to invigorate your senses and promote overall well-being. Free from caffeine and rich in antioxidants, this tea offers a refreshing and calming experience with every sip. Whether you’re looking to relax, boost your immunity, or support digestion, our herbal tea is the perfect choice for a healthier lifestyle. Enjoy its delightful aroma and flavor, hot or iced, as a comforting ritual any time of the day. Rediscover wellness in every cup with our 100% natural herbal tea!" />}
        />
        <Route
          path="/shop/product8"
          element={<Product image="../product12.jpg" title="Green chilli pickle" price="180.00" description="Green Chilli Pickle is a fiery and flavorful condiment that brings a burst of spice and tang to every meal. Made from fresh, handpicked green chilies, blended with aromatic spices, and preserved in traditional oils, this pickle offers an authentic taste of homemade goodness. Perfect for adding a zesty kick to your dal, rice, parathas, or snacks, it’s a must-have for spice lovers. Free from artificial preservatives, this pickle is a blend of bold flavors and natural ingredients, crafted to tantalize your taste buds with every bite!" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
