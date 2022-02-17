import { useState } from 'react';
import {
  saveTokenInLocalStorage,
  saveUserInLocalStorage,
} from '../services/localStorageService';
import { createNewUser } from '../services/loginServices';
import {
  Form,
  Content,
  InputWrapper,
  Button,
  IconWrapper,
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

  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [usernameIcon, setUsernameIcon] = useState('');
  const [usernameIsVisited, setUsernameIsVisited] = useState(false);

  const onBlurUsernameHandler = () => {
    const [isValid, icon] = isValidUsername(username);
    setUsernameIsVisited(true);
    setUsernameIsValid(isValid);
    setUsernameIcon(icon);
  };

  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState('');
  const [passwordIsVisited, setPasswordIsVisited] = useState(false);

  const onBlurPasswordHandler = () => {
    const [isValid, icon] = isValidPassword(password);
    setPasswordIsVisited(true);
    setPasswordIsValid(isValid);
    setPasswordIcon(icon);
  };

  const [firstnameIsValid, setfirstnameIsValid] = useState(false);
  const [firstnameIcon, setfirstnameIcon] = useState('');
  const [firstnameIsVisited, setfirstnameIsVisited] = useState(false);

  const onBlurFirstnameHandler = () => {
    const [isValid, icon] = isValidFirstname(firstname);
    setfirstnameIsVisited(true);
    setfirstnameIsValid(isValid);
    setfirstnameIcon(icon);
  };

  const [lastnameIsValid, setLastnameIsValid] = useState(false);
  const [lastnameIcon, setLastnameIcon] = useState('');
  const [lastnameIsVisited, setLastnameIsVisited] = useState(false);

  const onBlurLastnameHandler = () => {
    const [isValid, icon] = isValidLastname(lastname);
    setLastnameIsVisited(true);
    setLastnameIsValid(isValid);
    setLastnameIcon(icon);
  };

  const [addressIsValid, setAddressIsValid] = useState(false);
  const [addressIcon, setAddressIcon] = useState('');
  const [addressIsVisited, setAddressIsVisited] = useState(false);

  const onBlurAddressHandler = () => {
    const [isValid, icon] = isValidAddress(address);
    setAddressIsVisited(true);
    setAddressIsValid(isValid);
    setAddressIcon(icon);
  };

  const [zipcodeIsValid, setZipcodeIsValid] = useState(false);
  const [zipcodeIcon, setZipcodeIcon] = useState('');
  const [zipcodeIsVisited, setZipcodeIsVisited] = useState(false);

  const onBlurZipcodeHandler = () => {
    const [isValid, icon] = isValidZipcode(zipCode);
    setZipcodeIsVisited(true);
    setZipcodeIsValid(isValid);
    setZipcodeIcon(icon);
  };

  const [cityIsValid, setCityIsValid] = useState(false);
  const [cityIcon, setCityIcon] = useState('');
  const [cityIsVisited, setCityIsVisited] = useState(false);

  const onBlurCityHandler = () => {
    const [isValid, icon] = isValidCity(city);
    setCityIsVisited(true);
    setCityIsValid(isValid);
    setCityIcon(icon);
  };

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
      saveUserInLocalStorage(newUser.user);
      saveTokenInLocalStorage(newUser.token);

      setTimeout(() => {
        window.location.reload();
      }, 400);
    }
  };

  const formIsValid =
    usernameIsValid &&
    passwordIsValid &&
    firstnameIsValid &&
    lastnameIsValid &&
    addressIsValid &&
    zipcodeIsValid &&
    cityIsValid;

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Registrering</h2>
        <Content>
          <InputWrapper>
            <label htmlFor="username">Användarnamn</label>
            <IconWrapper>
              <span>{usernameIcon}</span>
              <input
                type="text"
                id="username"
                placeholder="Användarnamn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={onBlurUsernameHandler}
              />
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="password">Lösenord</label>
            <IconWrapper>
              <span>{passwordIcon}</span>
              <input
                type="password"
                id="password"
                placeholder="Lösenord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={onBlurPasswordHandler}
              />
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="firstName">Förnamn</label>
            <IconWrapper>
              <span>{firstnameIcon}</span>
              <input
                type="text"
                id="firstName"
                placeholder="Förnamn"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                onBlur={onBlurFirstnameHandler}
              />
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="lastName">Efternamn</label>
            <IconWrapper>
              <span>{lastnameIcon}</span>
              <input
                type="text"
                id="lastName"
                placeholder="Efternamn"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                onBlur={onBlurLastnameHandler}
              />
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="address">Adress</label>
            <IconWrapper>
              <span>{addressIcon}</span>
              <input
                type="text"
                id="address"
                placeholder="Adress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onBlur={onBlurAddressHandler}
              />
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="zipCode">Postnummer</label>
            <IconWrapper>
              <span>{zipcodeIcon}</span>
              <input
                type="text"
                id="zipCode"
                placeholder="Postnummer"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                onBlur={onBlurZipcodeHandler}
              />
            </IconWrapper>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="city">Ort</label>
            <IconWrapper>
              <span>{cityIcon}</span>
              <input
                type="text"
                id="city"
                placeholder="Ort"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onBlur={onBlurCityHandler}
              />
            </IconWrapper>
          </InputWrapper>
        </Content>
        <Button type="submit" disabled={!formIsValid}>
          Sign up
        </Button>
      </Form>
    </Wrapper>
  );
}

export default SignUpPate;

const isValidUsername = (username: string): [boolean, string] => {
  if (username.length === 0) {
    return [false, '🚩'];
  } else if (username.length >= 3) {
    return [true, '💚'];
  } else {
    return [false, '🚩'];
  }
};

const isValidPassword = (password: string): [boolean, string] => {
  if (password.length === 0) {
    return [false, '🚩'];
  } else if (password.length < 8) {
    return [false, '🚩'];
  } else {
    return [true, '💚'];
  }
};

const isValidFirstname = (firstname: string): [boolean, string] => {
  if (firstname.length <= 1) {
    return [false, '🚩'];
  } else {
    return [true, '💚'];
  }
};

const isValidLastname = (name: string): [boolean, string] => {
  if (name.length <= 3) {
    return [false, '🚩'];
  } else {
    return [true, '💚'];
  }
};

const isValidAddress = (address: string): [boolean, string] => {
  if (address.length <= 3) {
    return [false, '🚩'];
  } else {
    return [true, '💚'];
  }
};

const isValidZipcode = (zip: string): [boolean, string] => {
  if (zip.length <= 2) {
    return [false, '🚩'];
  } else {
    return [true, '💚'];
  }
};

const isValidCity = (city: string): [boolean, string] => {
  if (city.length <= 2) {
    return [false, '🚩'];
  } else {
    return [true, '💚'];
  }
};
