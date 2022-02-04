import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  const navigate = useNavigate();
  return (
    <StyledNavbar>
      <li onClick={() => navigate('/')} title="Home" className="home">
        ⛺
      </li>
      <StyledUl>
        <li onClick={() => navigate('/login')}>Login</li>
      </StyledUl>
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 4rem;
  background-color: #eeeeee44;
  position: sticky;
  top: 0;
  z-index: 100;
  scroll-behavior: smooth;
  list-style-type: none;

  .home {
    font-size: 3.5rem;
  }

  li {
    padding: 1rem;
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
