import { getUserFromLocalStorage } from '../services/localStorageService';
import { useEffect, useState } from 'react';
import { MdLocationOn, MdPersonOutline } from 'react-icons/md';
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
          <IconWrapper>
            <MdPersonOutline />
            <span>
              Namn: {user?.firstName} {user?.lastName}
            </span>
          </IconWrapper>
          <IconWrapper>
            <MdLocationOn /> <span>Adress: {user?.address}</span>
          </IconWrapper>
          <p>Postnummer: {user?.zipCode}</p>
          <p>Ort: {user?.city}</p>
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

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    margin-left: 4px;
  }
`;
