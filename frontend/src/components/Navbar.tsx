import { useNavigate } from 'react-router-dom';
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from '../services/localStorageService';
import { MdPerson, MdSettings } from 'react-icons/md';
import { amountOfProductsInCartState } from '../atoms/amountOfProductsInCartState';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import logo from '../img/nature.png';

function Navbar() {
  const token = getTokenFromLocalStorage();
  const user = getUserFromLocalStorage();
  const navigate = useNavigate();
  const [amountOfProducts] = useRecoilState(amountOfProductsInCartState);

  return (
    <StyledNavbar>
      <div>
        <li onClick={() => navigate('/')} title="Startsida" className="home">
          <StyledLogo src={logo} alt="" />
        </li>
      </div>
      <StyledUl>
        <li onClick={() => navigate('/jacket')}>Jackor</li>
        <li onClick={() => navigate('/shoes')}>Skor</li>
        <li onClick={() => navigate('/backpack')}>Ryggsäckar</li>
        {!token && <li onClick={() => navigate('/mypage')}>Logga in</li>}

        {token && user?.role === 'customer' && (
          <li onClick={() => navigate('/mypage')} className="myPage">
            <MyPages>
              <MdPerson fontSize="1.2rem" />
              <span>Mina sidor</span>
            </MyPages>
          </li>
        )}

        {token && user?.role === 'admin' && (
          <li onClick={() => navigate('/mypage')} className="myPage">
            <MyPages>
              <MdSettings />
              <span>Admin</span>
            </MyPages>
          </li>
        )}
      </StyledUl>
      {amountOfProducts > 0 ? (
        <AmountWrapper>
          <p>🛒</p> <Amount>{amountOfProducts}</Amount>
        </AmountWrapper>
      ) : null}
    </StyledNavbar>
  );
}

export default Navbar;

const StyledLogo = styled.img`
  max-width: 120px;
`;

const Amount = styled.small`
  color: #353535;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  left: 7px;
  opacity: 80%;
  font-weight: bold;
`;

const AmountWrapper = styled.div`
  font-size: 1.2rem;
  position: absolute;
  top: 15px;
  right: 60px;
  width: 30px;
  height: 30px;
  text-align: center;
  z-index: 100;

  p {
    opacity: 50%;
  }
`;

const MyPages = styled.div`
  border-bottom: 1px solid transparent !important;
  span {
    margin-left: 4px;

    &:hover {
      border-bottom: 1px solid #476647b7;
    }
  }
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.05rem 4rem;
  background-color: #eee;
  position: sticky;
  top: 0;
  z-index: 10;
  list-style-type: none;
  color: #353535;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  height: 75px;

  .home {
    font-size: 3.5rem;
    padding: 0;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    margin-left: 2rem;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 45%;
  align-items: center;
  padding: 0;
  list-style-type: none;

  li {
    margin-left: 2rem;
    cursor: pointer;
    border-bottom: 1px solid #eee;

    &:hover {
      border-bottom: 1px solid #353535c1;
    }
  }

  .myPage {
    color: #476647f4;

    &:hover {
      border: none;
    }
  }
  .cart:hover {
    border-bottom: 1px solid transparent;
    transform: scale(1.07);
  }
`;
