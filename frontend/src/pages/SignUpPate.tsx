import { useState } from 'react';
import { createNewUser } from '../services/loginServices';
import {
  Form,
  Content,
  InputWrapper,
  Button,
} from '../styling/CreateProduct.styled';
import { Wrapper } from '../styling/MyPage.styled';

function SignUpPate() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e: any) => {
    console.log('in submit');
    e.preventDefault();
    const userObj = {
      username,
      firstName: firstname,
      lastName: lastname,
      address,
      zipCode,
      password,
      city,
    };

    const newUser = await createNewUser(userObj);

    if (newUser.success === true) {
      console.log(newUser);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Registrering</h2>
        <Content>
          <InputWrapper>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Lösenord</label>
            <input
              type="password"
              id="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="firstName">Förnamn</label>
            <input
              type="text"
              id="firstName"
              placeholder="Förnamn"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="lastName">Efternamn</label>
            <input
              type="text"
              id="lastName"
              placeholder="Efternamn"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="address">Adress</label>
            <input
              type="text"
              id="address"
              placeholder="Adress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="zipCode">Postnummer</label>
            <input
              type="text"
              id="zipCode"
              placeholder="Postnummer"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="city">Ort</label>
            <input
              type="text"
              id="city"
              placeholder="Ort"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputWrapper>
        </Content>
        <Button type="submit">Sign up</Button>
      </Form>
    </Wrapper>
  );
}

export default SignUpPate;
