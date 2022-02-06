import { getUserFromLocalStorage } from '../services/localStorageService';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import LogoutBtn from './LogoutBtn';

function UserInformation() {
  const user = getUserFromLocalStorage();
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const welcome = [
    'Välkommen ',
    'Vad roligt att se dig ',
    'Hej ',
    'Dags för en tur i naturen, ',
  ];

  useEffect(() => {
    const random = welcome[Math.floor(Math.random() * welcome.length)];
    setWelcomeMessage(random);
  }, []);

  return (
    <Wrapper>
      <Content>
        <LogoutBtn />
        <h2>
          {welcomeMessage} {user?.firstName}!
        </h2>
        <p>
          Denna information har vi sparat om dig, för att du ska kunna handla
          och få hem dina varor ifrån oss:
        </p>

        <UserInfo>
          <p>Username: {user?.username}</p>
          <p>
            Namn: {user?.firstName} {user?.lastName}
          </p>
          <p>Adress: {user?.address}</p>
          <p>Postkod: {user?.zipCode}</p>
          <p>Stad: {user?.city}</p>
        </UserInfo>
      </Content>
    </Wrapper>
  );
}

export default UserInformation;

const Wrapper = styled.div`
  color: #353535;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 3rem auto; */
  max-width: 550px;

  h2 {
    font-size: 1.8rem;
    margin: 10px 0 5px;
  }

  p {
    width: 80%;
  }
`;

const Content = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 3rem;
`;

const UserInfo = styled.div`
  background-color: #eee !important;
  border-radius: 0.2rem;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
`;
