import Cart from '../components/Cart';
import LoginForm from '../components/LoginForm';
import UserInformation from '../components/UserInformation';
import { getTokenFromLocalStorage } from '../services/localStorageService';
import styled from 'styled-components';

function LoginPage() {
  const token = getTokenFromLocalStorage();

  return (
    <div>
      {!token && <LoginForm />}

      {token && (
        <Wrapper>
          <UserInformation />
          <Cart />
        </Wrapper>
      )}
    </div>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
