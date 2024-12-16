import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import products from '../../Data/products';

export default function Shop() {

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
        
        <div className="container px-5 my-12 mx-auto">
    
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                {/* Using Link for navigation */}
                <Link to={`${product.link}/${product.id}`} className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.title} // Alt text updated to be more descriptive
                    className="object-cover object-center w-full h-full block z-[-100]"
                    src={product.image}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium capitalize">
                    <Link to={`${product.link}/${product.id}`}>{product.title}</Link> {/* Link for the product title */}
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
