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
        'V??nligen fyll i anv??ndarnamn och l??senord f??r att kunna logga in'
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
              <label>Anv??ndarnamn</label>
              <input
                type="text"
                placeholder="Anv??ndarnamn"
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
              <label>L??senord</label>
              <input
                type="password"
                placeholder="L??senord"
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
              Inte kund ??nnu? Bli kund
              <Button onClick={() => setIsActive(false)}>h??r</Button>
            </small>
          </Wrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <SignUpPate />
          <small>
            Redan kund? Logga in
            <Button onClick={() => setIsActive(true)}>h??r</Button>
          </small>
        </Wrapper>
      )}
    </>
  );
}

export default LoginForm;

const isValidUsername = (username: string): [boolean, string] => {
  if (username.length === 0) {
    return [false, '???? V??nligen fyll i ditt anv??ndarnamn'];
  } else if (username.length >= 3) {
    return [true, '????'];
  } else {
    return [false, '???? Anv??ndarnamnet ??r f??r kort'];
  }
};

const isValidPassword = (password: string): [boolean, string] => {
  if (password.length === 0) {
    return [false, '???? V??nligen fyll i ditt l??senord'];
  } else if (password.length < 8) {
    return [false, '???? L??senordet ska vara p?? minst 8 tecken'];
  } else {
    return [true, '????'];
  }
};
