import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Shop() {
  const products = [
    {
      id: 1,
      image: './product10.jpg',
      category: 'Candle',
      title: 'Jar candle',
      price: '120.00',
      rating: 4, // Rating out of 5
      link: '/shop/product1', // Add a link for each product
    },
    {
      id: 2,
      image: './product6.jpg',
      category: 'Squash',
      title: 'Malta Squash',
      price: '200.00',
      rating: 5,
      link: '/shop/product2',
    },
    {
      id: 3,
      image: './product8.jpg',
      category: 'Lip Balm',
      title: 'Lavendra',
      price: '250.00',
      rating: 4,
      link: '/shop/product3',
    },
    {
      id: 4,
      image: './product13.jpg',
      category: 'Honey',
      title: 'Raw Multidlora',
      price: '200.00',
      rating: 4,
      link: '/shop/product4',
    },
    {
      id: 5,
      image: './product11.jpg',
      category: 'Ghee',
      title: 'A2 Cow Ghee (250ml)',
      price: '700.00',
      rating: 2,
      link: '/shop/product5',
    },
    {
      id: 6,
      image: './product1.jpg',
      category: 'Jam',
      title: 'Apple Jam',
      price: '180.00',
      rating: 5,
      link: '/shop/product6',
    },
    {
      id: 7,
      image: './product9.png',
      category: 'Tea',
      title: 'Masala Tea',
      price: '300.00',
      rating: 4,
      link: '/shop/product7',
    },
    {
      id: 8,
      image: './product12.jpg',
      category: 'Pickle',
      title: 'Green chilli pickle',
      price: '$180.00',
      rating: 4,
      link: '/shop/product8',
    },
  ];

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? '★' : '☆'; // Add filled star (★) or empty star (☆)
    }
    return stars;
  };

  return (
    <div>
      
      <section className="text-gray-600 body-font">
        
        <div className="container px-5 py-32 my-12 mx-auto">
    
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                {/* Using Link for navigation */}
                <Link to={product.link} className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.title} // Alt text updated to be more descriptive
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    <Link to={product.link}>{product.title}</Link> {/* Link for the product title */}
                  </h2>
                  <p className="mt-1"><span>&#8377;</span>{product.price}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-lg">
                      {renderStars(product.rating)} {/* Render the stars here */}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
