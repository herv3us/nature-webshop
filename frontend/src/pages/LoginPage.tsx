import LoginForm from '../components/LoginForm';
import UserInformation from '../components/UserInformation';
import { getTokenFromLocalStorage } from '../services/localStorageService';

function LoginPage() {
  const token = getTokenFromLocalStorage();
  return (
    <div>
      {!token && <LoginForm />}

      {token && <UserInformation />}
    </div>
  );
}

export default LoginPage;
