import React, { useEffect, useState } from 'react';

import './App.css';
import { Products } from './Components/Products';


function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(
      'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
    )
      .then(res => res.json())
      .catch(() => fetch('api/products').then(products => products.json()))
      .then(productsList => {
        console.log(productsList);
        setProducts(productsList);
      });
  }, []);


  return (
    <div className="App">
      {
        products && products.groups.length > 0 && <Products products={products.groups} />
      }
      
    </div>
  );
}

export default App;
