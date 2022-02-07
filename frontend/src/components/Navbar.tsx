import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import { getTokenFromLocalStorage } from '../services/localStorageService';
interface Props {
  searchString: string;
  setSearchString: Function;
}

function Navbar(props: Props) {
  const { searchString, setSearchString } = props;
  const token = getTokenFromLocalStorage();
  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <div>
        <li onClick={() => navigate('/')} title="Startsida" className="home">
          ⛺
        </li>
        <SearchForm
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </div>
      <StyledUl>
        <li onClick={() => navigate('/jacket')}>Jackor</li>
        <li onClick={() => navigate('/shoes')}>Skor</li>
        <li onClick={() => navigate('/backpack')}>Ryggsäckar</li>
        {token ? (
          <li onClick={() => navigate('/mypage')} className="myPage">
            Mina sidor
          </li>
        ) : (
          <li onClick={() => navigate('/mypage')}>Logga in</li>
        )}
      </StyledUl>
    </StyledNavbar>
  );
}

export default Navbar;

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

  .home {
    font-size: 3.5rem;
    padding: 0;
    cursor: pointer;
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
      border-bottom: 1px solid #476647b7;
    }
  }
  .cart:hover {
    border-bottom: 1px solid transparent;
    transform: scale(1.07);
  }
`;
