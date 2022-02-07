import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #353535;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;

  h2 {
    font-size: 1.8rem;
    margin: 0 0 10px;
  }

  @media (max-width: 1174px) {
    max-width: 450px;
  }

  @media (max-width: 940px) {
    max-width: 400px;

    p {
      width: 97%;
    }
  }
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;

  @media (max-width: 940px) {
    padding: 1.6rem;
  }
`;
