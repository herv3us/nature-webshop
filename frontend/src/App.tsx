import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from './models/Product';
import StartPage from './pages/StartPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import JacketPage from './pages/JacketPage';
import BackpackPage from './pages/BackpackPage';
import ShoesPage from './pages/ShoesPage';
import styled from 'styled-components';

function App() {
  const [products, setProducts] = useState<[] | [Product]>([]);
  const [backpacks, setBackpacks] = useState<[] | Product[]>([]);
  const [jackets, setJackets] = useState<[] | Product[]>([]);
  const [shoes, setShoes] = useState<[] | Product[]>([]);
  const [userCart, setUserCart] = useState<[] | Product[]>([]);
  const [searchString, setSearchString] = useState('');
  const [searchParam] = useState(['title', 'description']);
  const allBackpacks: Product[] = [];
  const allJackets: Product[] = [];
  const allShoes: Product[] = [];
  const srcVideo: [string, string, string, string, string] = [
    '/images/adventure.mp4',
    '/images/backpack.mp4',
    '/images/beenie.mp4',
    '/images/jacket.mp4',
    '/images/shoes.mp4',
  ];

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

  useEffect(() => {
    products?.filter((product) => {
      if (product.category === 'jacket') {
        allJackets.push(product);
      } else if (product.category === 'backpack') {
        allBackpacks.push(product);
      } else if (product.category === 'shoes') {
        allShoes.push(product);
      }
      setJackets(allJackets);
      setBackpacks(allBackpacks);
      setShoes(allShoes);
    });
  }, [products]);

  return (
    <Router>
      <Wrapper>
        <Navbar searchString={searchString} setSearchString={setSearchString} />
        <Routes>
          <Route
            path="/"
            element={
              <StartPage
                src={srcVideo[0]}
                products={products}
                setProducts={setProducts}
                search={search}
                userCart={userCart}
                setUserCart={setUserCart}
              />
            }
          />
          <Route
            path="/backpack"
            element={
              <BackpackPage
                src={srcVideo[1]}
                products={backpacks}
                search={search}
                userCart={userCart}
                setUserCart={setUserCart}
              />
            }
          />
          <Route
            path="/jacket"
            element={
              <JacketPage
                src={srcVideo[3]}
                products={jackets}
                search={search}
                userCart={userCart}
                setUserCart={setUserCart}
              />
            }
          />
          <Route
            path="/shoes"
            element={
              <ShoesPage
                src={srcVideo[4]}
                products={shoes}
                search={search}
                userCart={userCart}
                setUserCart={setUserCart}
              />
            }
          />
          <Route path="/mypage" element={<LoginPage />} />
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
