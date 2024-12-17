import productImageOne from "../assets/product10.webp";
import productImageTwo from "../assets/product6.webp";
import productImageThree from "../assets/product8.webp";
import productImageFour from "../assets/product13.webp";
import productImageFive from "../assets/product11.webp";
import productImageSix from "../assets/apple.jpg"; 
import productImageSeven from "../assets/product9.webp";
import productImageEight from "../assets/product12.webp";
import salt1 from "../assets/salt1.webp";
import salt2 from "../assets/salt2.webp";
import salt3 from "../assets/salt3.webp";
import salt4 from "../assets/salt4.webp";
import salt5 from "../assets/salt5.webp";
import salt6 from "../assets/salt6.webp";
import salt7 from "../assets/salt7.webp";
import salt8 from "../assets/salt8.webp";
import salt9 from "../assets/salt9.webp";
import salt10 from "../assets/salt10.webp";
import salt11 from "../assets/salt11.webp";

const products = [
  {
    id: "4BJ2CRxN0Vm8",
    image: productImageOne,
    category: 'Candle',
    title: 'Jar candle',
    price: '120.00',
    rating: 4,
    link: '/shop/product',
    description: 'Jar Candle is the perfect blend of ambiance and elegance, designed to elevate any space with its warm, soothing glow. Encased in a stylish, reusable jar, this candle is made from high-quality wax and infused with enchanting fragrances that create a relaxing and inviting atmosphere. Whether you\'re unwinding after a long day, setting the mood for a special evening, or simply enhancing your home decor, the jar candle adds a touch of charm and serenity. With a clean burn and long-lasting aroma, it’s a delightful addition to your space or a thoughtful gift for loved ones.'
  },
  {
    id: "KvS7W8LGFbP3",
    image: productImageTwo,
    category: 'Squash',
    title: 'Malta Squash',
    price: '200.00',
    rating: 5,
    link: '/shop/product',
    description: 'Malta Squash is a refreshing and tangy beverage concentrate made from the rich, citrusy flavors of ripe malta oranges. Known for its vibrant orange color and natural sweetness, this squash is perfect for quenching your thirst on a hot day. Packed with Vitamin C and essential nutrients, it not only revitalizes but also boosts your immune system. Simply mix with water or soda to enjoy a delicious, fruity drink, or use it as a flavorful addition to cocktails, desserts, or marinades. A versatile and delightful treat for all occasions!'
  },
  {
    id: "tWv5X6BRLmK7",
    image: productImageThree,
    category: 'Lip Balm',
    title: 'Lavendra',
    price: '250.00',
    rating: 4,
    link: '/shop/product',
    description: 'Organic Lip Balm is a nourishing blend of natural ingredients designed to keep your lips soft, hydrated, and healthy. Crafted with care, it contains organic butters, oils, and beeswax to lock in moisture and provide lasting protection against dryness and chapping. Free from harmful chemicals and synthetic additives, this gentle formula is suitable for all skin types, including sensitive lips. Available in a variety of subtle, natural flavors, this lip balm is perfect for daily use, leaving your lips feeling smooth, supple, and kissable. Pamper your lips with the pure goodness of nature!'
  },
  {
    id: "8ZNv1XFLvK37",
    image: productImageFour,
    category: 'Honey',
    title: 'Raw Multiflora',
    price: '200.00',
    rating: 4,
    link: '/shop/product',
    description: 'Pure Honey is nature’s golden treasure, harvested from the finest blossoms to bring you a rich, natural sweetness packed with health benefits. Raw and unprocessed, it retains its nutritional value, enzymes, and antioxidants, making it a wholesome addition to your diet. Perfect as a natural sweetener for your tea, desserts, or breakfast, or as a key ingredient in skincare remedies. With its smooth texture and delightful flavor, our honey is a versatile and healthy choice for enhancing your lifestyle. Experience the pure, golden goodness of nature in every drop!'
  },
  {
    id: "PLv8X6BRKmZ2",
    image: productImageFive,
    category: 'Ghee',
    title: 'A2 Cow Ghee (250ml)',
    price: '700.00',
    rating: 2,
    link: '/shop/product',
    description: 'Natural Ghee is a traditional, nutrient-rich superfood made from pure, high-quality milk, crafted to perfection using age-old methods. Known for its rich aroma, golden color, and creamy texture, this wholesome ghee is a powerhouse of energy and essential nutrients. Packed with healthy fats, vitamins A, D, E, and K, it supports digestion, strengthens immunity, and enhances overall well-being. Perfect for cooking, baking, or drizzling over your favorite dishes, it adds a delicious flavor and authentic touch to every meal. Embrace the goodness of tradition with our 100% natural ghee!'
  },
  {
    id: "7NMBX9v4LFK2",
    image: productImageSix,
    category: 'Jam',
    title: 'Apple Jam',
    price: '180.00',
    rating: 5,
    link: '/shop/product',
    description: 'Apple Jam is a delightful spread made from juicy, sun-ripened apples, cooked to perfection to bring out their natural sweetness and rich flavor. With its smooth texture and refreshing taste, this jam is a versatile addition to your breakfast table, perfect for spreading on toast, pancakes, or pairing with baked goods. Free from artificial colors and preservatives, it’s a wholesome treat for the entire family. Packed with the goodness of real fruit, our apple jam is a delicious way to start your day or add a fruity twist to your favorite snacks!'
  },
  {
    id: "tZXB8NPLv7K4",
    image: productImageSeven,
    category: 'Tea',
    title: 'Masala Tea',
    price: '300.00',
    rating: 4,
    link: '/shop/product',
    description: 'Herbal Tea is a soothing blend of carefully selected natural herbs and botanicals, crafted to invigorate your senses and promote overall well-being. Free from caffeine and rich in antioxidants, this tea offers a refreshing and calming experience with every sip. Whether you’re looking to relax, boost your immunity, or support digestion, our herbal tea is the perfect choice for a healthier lifestyle. Enjoy its delightful aroma and flavor, hot or iced, as a comforting ritual any time of the day. Rediscover wellness in every cup with our 100% natural herbal tea!'
  },
  {
    id: "vPLK8X6ZNM37",
    image: productImageEight,
    category: 'Pickle',
    title: 'Green chilli pickle',
    price: '180.00',
    rating: 4,
    link: '/shop/product',
    description: 'Green Chilli Pickle is a fiery and flavorful condiment that brings a burst of spice and tang to every meal. Made from fresh, handpicked green chilies, blended with aromatic spices, and preserved in traditional oils, this pickle offers an authentic taste of homemade goodness. Perfect for adding a zesty kick to your dal, rice, parathas, or snacks, it’s a must-have for spice lovers. Free from artificial preservatives, this pickle is a blend of bold flavors and natural ingredients, crafted to tantalize your taste buds with every bite!'
  
  },
  {
    id: "dfjkkj",
    image: salt1,
    category: 'Salt',
    title: 'celery seeds salt, (100g)',
    price: '120.00',
    rating: 4,
    link: '/shop/product',
    description: 'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "sdnkn4",
    image: salt2,
    category: 'Salt',
    title: 'Heeng jeera salt, (100g)',
    price: '120.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "sdnkn43",
    image: salt3,
    category: 'Salt',
    title: 'Garlic Yellow  chilli salt, (100g)',
    price: '120.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "sdnk343",
    image: salt4,
    category: 'Salt',
    title: 'garlic chipi salt, (100g)',
    price: '150.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "sdn43",
    image: salt5,
    category: 'Salt',
    title: 'Roasted chilli salt, (100g)',
    price: '80.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "Mdnk343",
    image: salt6,
    category: 'Salt',
    title: 'Roasted chilli salt, (100g)',
    price: '80.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "Pdnk343",
    image: salt7,
    category: 'Salt',
    title: 'Garlic Red Chilli Salt, (100g)',
    price: '80.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "Dnk343",
    image: salt8,
    category: 'Salt',
    title: 'Hemp Cumin Salt, (100g)',
    price: '120.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "Wdnk343",
    image: salt9,
    category: 'Salt',
    title: 'Perilla Seeds Salt, (100g)',
    price: '80.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "Ednk343",
    image: salt10,
    category: 'Salt',
    title: 'Garlic Mix Salt, (100g)',
    price: '100.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
  {
    id: "SEnk343",
    image: salt11,
    category: 'Salt',
    title: 'Ginger Salt, (100g)',
    price: '100.00',
    rating: 4,
    link: '/shop/product',
    description:'Purely handmade with traditional Silbatta (Sil & Batta are special quality stones, used for grinding to define the real taste of grinded items). Silbatta, the grinding stone set is a most ancient and conventional kitchen tool/appliance crafted entirely of up stone, which makes it a durable product. The experienced women of HimFla organization make different varieties of flavored salts on Silbatta.'
  },
];

export default products;