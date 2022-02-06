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
  Input,
  Button,
  Message,
} from '../styling/LoginForm.styled';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage(
        'Vänligen fyll i username och password för att kunna logga in'
      );
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }

    resetForm();
    const data = await login(username, password);

    if (!data) {
      console.log('No data found');
    } else if (data.success) {
      saveTokenInLocalStorage(data.token);
      console.log(data.user);
      saveUserInLocalStorage(data.user);
    }
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <h2>Login</h2>
        <InputWrapper>
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <Input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <Button>Login</Button>
      </Form>
      {message && <Message>{message}</Message>}
    </Wrapper>
  );
}

export default LoginForm;
