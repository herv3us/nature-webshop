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

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  background-color: #eee;
  padding: 2rem;
  border-radius: 0.3rem;
`;

export const PayButton = styled.button`
  cursor: pointer;
  background-color: #c04e4e;
  border: none;
  border-radius: 3px;
  color: #eee;
  font-weight: bold;
  padding: 0.2rem 0.9rem;
  letter-spacing: 1.1px;
  z-index: 10;
  transition: ease all 0.5s;
  position: absolute;
  top: 35px;
  right: 0;

  &:hover {
    background-color: #9c3333;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;
