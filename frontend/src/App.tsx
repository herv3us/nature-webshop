import { useEffect, useState } from 'react';
import { getAllProducts } from './services/productService';

import Header from './components/Header';

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getAllProducts();
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Hello World 🐳</h1>
      <Header />
    </div>
  );
}

export default App;
