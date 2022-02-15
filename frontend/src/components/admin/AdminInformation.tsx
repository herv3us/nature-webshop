import React from 'react';
import { getUserFromLocalStorage } from '../../services/localStorageService';
import { Wrapper, Content } from '../../styling/MyPage.styled';
import styled from 'styled-components';

function AdminInformation() {
  const admin = getUserFromLocalStorage();

  return (
    <div>
      <InfoWrapper>
        <Content>
          <h2>Du är administratör för Nature, {admin?.firstName}!</h2>
          <p>Denna information har vi sparat om dig som anställd:</p>

          <UserInfo>
            <p>Username: {admin?.username}</p>
            <IconWrapper>
              <span>
                Namn: {admin?.firstName} {admin?.lastName}
              </span>
            </IconWrapper>
            <IconWrapper>
              <span>Adress: {admin?.address}</span>
            </IconWrapper>
            <p>Postnummer: {admin?.zipCode}</p>
            <p>Ort: {admin?.city}</p>
          </UserInfo>
        </Content>
      </InfoWrapper>
    </div>
  );
}

export default AdminInformation;

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
