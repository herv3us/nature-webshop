import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Product } from './models/Product';
import StartPage from './pages/StartPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import styled from 'styled-components';

function App() {
  const [products, setProducts] = useState<[] | [Product]>([]);

  const srcVideo: [string, string, string, string, string] = [
    '/images/adventure.mp4',
    '/images/backpack.mp4',
    '/images/beenie.mp4',
    '/images/jacket.mp4',
    '/images/shoes.mp4',
  ];

  const [searchString, setSearchString] = useState('');
  const [searchParam] = useState(['title', 'description']);

  const search = (products: any) => {
    return products.filter((product: any) => {
      return searchParam.some((newProduct) => {
        return (
          product[newProduct]
            .toString()
            .toLowerCase()
            .indexOf(searchString.toLowerCase()) > -1
        );
      });
    });
  };

  return (
    <Router>
      <Wrapper>
        <Navbar products={products} setProducts={setProducts} />
        <Routes>
          <Route
            path="/"
            element={
              <StartPage
                src={srcVideo[0]}
                products={products}
                setProducts={setProducts}
                search={search}
                searchString={searchString}
                setSearchString={setSearchString}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products/:productid" element={<ProductPage />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
