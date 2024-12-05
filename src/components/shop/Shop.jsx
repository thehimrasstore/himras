import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Shop() {
  const products = [
    {
      id: 1,
      image: './product1.jpg',
      category: 'CATEGORY',
      title: 'Juice',
      price: '$16.00',
      rating: 4, // Rating out of 5
      link: '/shop/product1', // Add a link for each product
    },
    {
      id: 2,
      image: './product2.jpg',
      category: 'CATEGORY',
      title: 'Handmade Soap',
      price: '$21.15',
      rating: 5,
      link: '/shop/product2',
    },
    {
      id: 3,
      image: './product3.jpg',
      category: 'CATEGORY',
      title: 'Fragrance Candles',
      price: '$12.00',
      rating: 3,
      link: '/shop/product3',
    },
    {
      id: 4,
      image: './product4.jpg',
      category: 'CATEGORY',
      title: 'Pure Honey',
      price: '$18.40',
      rating: 4,
      link: '/shop/product4',
    },
    {
      id: 5,
      image: './product4.jpg',
      category: 'CATEGORY',
      title: 'Organic Lip Balm',
      price: '$16.00',
      rating: 2,
      link: '/shop/product5',
    },
    {
      id: 6,
      image: './product4.jpg',
      category: 'CATEGORY',
      title: 'Burash Face Pack',
      price: '$21.15',
      rating: 5,
      link: '/shop/product6',
    },
    {
      id: 7,
      image: './product4.jpg',
      category: 'CATEGORY',
      title: 'Bee Pollen',
      price: '$12.00',
      rating: 3,
      link: '/shop/product7',
    },
    {
      id: 8,
      image: './product4.jpg',
      category: 'CATEGORY',
      title: 'Pure Shilajit',
      price: '$18.40',
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
        
        <div className="container px-5 py-24 mx-auto">
        <div className=' bg-secondary mx-12 my-8'>
       <button>soap</button>
       <button>squash</button>
      </div>
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
                  <p className="mt-1">{product.price}</p>
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
