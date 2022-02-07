import { getUserFromLocalStorage } from '../services/localStorageService';
import { useEffect, useState } from 'react';
import { Wrapper, Content } from '../styling/MyPage.styled';
import styled from 'styled-components';

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
    <InfoWrapper>
      <Content>
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
    </InfoWrapper>
  );
}

export default UserInformation;

const InfoWrapper = styled(Wrapper)`
  p {
    width: 80%;
  }
`;

const UserInfo = styled.div`
  background-color: #eee !important;
  border-radius: 0.2rem;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
`;
