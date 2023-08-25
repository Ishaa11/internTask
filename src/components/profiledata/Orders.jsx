import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(
          'https://fakerapi.it/api/v1/products?_quantity=3&_taxes=1&_categories_type=uuid'
        );
        if (response.data.data && response.data.data.length > 0) {
          setInfo(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <div className="orders-container">
      <h2>Order Details</h2>
      {info.map(product => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
          <p>Price: {product.price}</p>
          <p>Net Price: {product.net_price}</p>

        </div>
      ))}
    </div>
  );
};

export default Orders;