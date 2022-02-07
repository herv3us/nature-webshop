import Cart from '../components/Cart';
import LoginForm from '../components/LoginForm';
import UserInformation from '../components/UserInformation';
import { getTokenFromLocalStorage } from '../services/localStorageService';
import styled from 'styled-components';
import LogoutBtn from '../components/LogoutBtn';

function LoginPage() {
  const token = getTokenFromLocalStorage();

  return (
    <div>
      {!token && <LoginForm />}

      {token && (
        <Wrapper>
          <LogoutBtn />
          <UserInformation />
          <Cart />
        </Wrapper>
      )}
    </div>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1400px;
  margin: 2.5rem auto;
  padding: 2rem;
  position: relative;

  @media (max-width: 1000px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 847px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
