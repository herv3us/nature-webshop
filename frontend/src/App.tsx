import { useEffect, useState } from 'react';
import { getAllProducts } from './services/productService';
import { Product } from './models/Product';

import Header from './components/Header';

function App() {
  const [products, setProducts] = useState<[Product] | []>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getAllProducts();
    console.log(data.products);
    setProducts(data.products);
  };

  return (
    <div className="App">
      <h1>Hello World 🐳</h1>
      <Header />
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  );
}

export default App;
