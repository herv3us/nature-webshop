import React, { useState } from 'react';
import { login } from '../services/loginServices';
import {
  saveTokenInLocalStorage,
  saveUserInLocalStorage,
} from '../services/localStorageService';
import {
  Wrapper,
  Form,
  InputWrapper,
  Button,
  Message,
} from '../styling/LoginForm.styled';
import { useNavigate } from 'react-router-dom';
import SignUpPate from '../pages/SignUpPate';

function LoginForm() {
  const [isActive, setIsActive] = useState(true);

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState('');
  const [usernameIsVisited, setUsernameIsVisited] = useState<boolean>(false);

  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwrodMessage, setPasswordMessage] = useState('');
  const [passwordIsVisited, setPasswordIsVisited] = useState<boolean>(false);

  const onBlurUsernameHandler = () => {
    const [isValid, message] = isValidUsername(username);
    setUsernameIsVisited(true);
    setUsernameIsValid(isValid);
    setUsernameMessage(message);
  };

  const onBlurPasswordHandler = () => {
    const [isValid, message] = isValidPassword(password);
    setPasswordIsVisited(true);
    setPasswordIsValid(isValid);
    setPasswordMessage(message);
  };

  const usernameInputStyling = !usernameIsVisited
    ? ''
    : usernameIsValid
    ? 'valid'
    : 'invalid';

  const passwordInputStyling = !passwordIsVisited
    ? ''
    : passwordIsValid
    ? 'valid'
    : 'invalid';

  const usernameMessageStyling =
    (usernameIsVisited ? '' : 'invisible') + (usernameIsValid ? '' : 'error');

  const passwordMessageStyling =
    (passwordIsVisited ? '' : 'invisible') + (passwordIsValid ? '' : 'error');

  const resetForm = () => {
    setUsername('');
    setPassword('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage(
        'Vänligen fyll i användarnamn och lösenord för att kunna logga in'
      );
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }

    resetForm();
    const data = await login(username, password);

    if (!data) {
      return;
    } else if (data.success) {
      saveTokenInLocalStorage(data.token);
      saveUserInLocalStorage(data.user);
      navigate('/');
    }
  };

  return (
    <>
      {isActive ? (
        <Wrapper>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <h2>Logga in</h2>
            <InputWrapper>
              <label>Användarnamn</label>
              <input
                type="text"
                placeholder="Användarnamn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={onBlurUsernameHandler}
                className={usernameInputStyling}
              />
              <small className={usernameMessageStyling}>
                {usernameMessage}
              </small>
            </InputWrapper>
            <InputWrapper>
              <label>Lösenord</label>
              <input
                type="password"
                placeholder="Lösenord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={onBlurPasswordHandler}
                className={passwordInputStyling}
              />
              <small className={passwordMessageStyling}>
                {passwrodMessage}
              </small>
            </InputWrapper>
            <Button>Login</Button>
          </Form>
          {message && <Message>{message}</Message>}
          <Wrapper>
            <small>
              Inte kund ännu? Bli kund
              <Button onClick={() => setIsActive(false)}>här</Button>
            </small>
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <SignUpPate />
          <small>
            Redan kund? Logga in
            <Button onClick={() => setIsActive(true)}>här</Button>
          </small>
        </Wrapper>
      )}
    </>
  );
}

export default LoginForm;

const isValidUsername = (username: string): [boolean, string] => {
  if (username.length === 0) {
    return [false, '🚩 Vänligen fyll i ditt användarnamn'];
  } else if (username.length >= 3) {
    return [true, '💚'];
  } else {
    return [false, '🚩 Användarnamnet är för kort'];
  }
};

const isValidPassword = (password: string): [boolean, string] => {
  if (password.length === 0) {
    return [false, '🚩 Vänligen fyll i ditt lösenord'];
  } else if (password.length < 8) {
    return [false, '🚩 Lösenordet ska vara på minst 8 tecken'];
  } else {
    return [true, '💚'];
  }
};
