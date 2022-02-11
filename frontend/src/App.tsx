import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
  const [searchString, setSearchString] = useState('');
  const [searchParam] = useState(['title', 'description']);

  const srcVideo: string[] = [
    '/images/adventure.mp4',
    '/images/backpack.mp4',
    '/images/jacket.mp4',
    '/images/shoes.mp4',
  ];

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
                searchString={searchString}
                searchParam={searchParam}
              />
            }
          />
          <Route
            path="/backpack"
            element={
              <BackpackPage
                src={srcVideo[1]}
                searchString={searchString}
                searchParam={searchParam}
              />
            }
          />
          <Route
            path="/jacket"
            element={
              <JacketPage
                src={srcVideo[2]}
                searchString={searchString}
                searchParam={searchParam}
              />
            }
          />
          <Route
            path="/shoes"
            element={
              <ShoesPage
                src={srcVideo[3]}
                searchString={searchString}
                searchParam={searchParam}
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
