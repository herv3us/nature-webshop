import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import styled from 'styled-components';
import Navbar from './components/Navbar';

function App() {
  const srcVideo: [string, string, string, string, string] = [
    '/images/adventure.mp4',
    '/images/backpack.mp4',
    '/images/beenie.mp4',
    '/images/jacket.mp4',
    '/images/shoes.mp4',
  ];
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<StartPage src={srcVideo[0]} />} />
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
