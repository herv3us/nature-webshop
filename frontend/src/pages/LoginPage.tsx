import Cart from '../components/Cart';
import LoginForm from '../components/LoginForm';
import UserInformation from '../components/UserInformation';
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from '../services/localStorageService';
import styled from 'styled-components';
import LogoutBtn from '../components/LogoutBtn';
import CreateProduct from '../components/admin/CreateProduct';
import AdminInformation from '../components/admin/AdminInformation';
import UserInfo from '../components/admin/UserInfo';

function LoginPage() {
  const token = getTokenFromLocalStorage();
  const user = getUserFromLocalStorage();

  return (
    <div>
      {!token && <LoginForm />}

      {token && user?.role === 'customer' && (
        <Wrapper>
          <LogoutBtn />
          <UserInformation />
          <Cart />
        </Wrapper>
      )}

      {token && user?.role === 'admin' && (
        <Wrapper>
          <LogoutBtn />
          <div>
            <AdminInformation />
            {/* <UserInfo /> */}
          </div>
          <CreateProduct />
        </Wrapper>
      )}
    </div>
  );
}

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
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
