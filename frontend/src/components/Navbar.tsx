import { useNavigate } from 'react-router-dom';
import { Product } from './../models/Product';
import styled from 'styled-components';
import SearchForm from './SearchForm';
interface Props {
  products: Product[];
  setProducts: Function;
  searchString: string;
  setSearchString: Function;
}

function Navbar(props: Props) {
  const { products, setProducts, searchString, setSearchString } = props;
  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <li onClick={() => navigate('/')} title="Startsida" className="home">
        ⛺
      </li>
      <StyledUl>
        <li onClick={() => navigate('/jacket')}>Jackor</li>
        <li onClick={() => navigate('/shoes')}>Skor</li>
        <li onClick={() => navigate('/backpack')}>Ryggsäckar</li>
        <li>
          <SearchForm
            searchString={searchString}
            setSearchString={setSearchString}
          />
        </li>
        <li onClick={() => navigate('/login')}>Mina sidor</li>
        <li onClick={() => navigate('/cart')} title="Kundkorg">
          🛒
        </li>
      </StyledUl>
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.05rem 4rem;
  background-color: #55555563;
  position: sticky;
  top: 0;
  z-index: 100;
  scroll-behavior: smooth;
  list-style-type: none;
  color: #eee;

  .home {
    font-size: 3.5rem;
    padding: 0;
  }

  li {
    padding: 1rem 2rem;
    margin-left: 2rem;
    cursor: pointer;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  list-style-type: none;
`;
