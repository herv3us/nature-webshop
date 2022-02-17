import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import StartPage from './pages/StartPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import JacketPage from './pages/JacketPage';
import BackpackPage from './pages/BackpackPage';
import ShoesPage from './pages/ShoesPage';
import styled from 'styled-components';
import EditProduct from './components/admin/EditProduct';
import Footer from './components/Footer';

function App() {
  const srcVideo: string[] = [
    '/images/adventure.mp4',
    '/images/backpack.mp4',
    '/images/jacket.mp4',
    '/images/shoes.mp4',
  ];

  return (
    <RecoilRoot>
      <Router>
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<StartPage src={srcVideo[0]} />} />
            <Route
              path="/backpack"
              element={<BackpackPage src={srcVideo[1]} />}
            />
            <Route path="/jacket" element={<JacketPage src={srcVideo[2]} />} />
            <Route path="/shoes" element={<ShoesPage src={srcVideo[3]} />} />
            <Route path="/mypage" element={<LoginPage />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
    </RecoilRoot>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
