import styled from 'styled-components';

export const Form = styled.form`
  color: #353535;
  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1rem 1rem 4rem;
  width: 500px;
  position: relative;

  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Content = styled.div`
  background-color: #eee;
  border-radius: 0.3rem;
  padding: 1rem;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
  }

  input,
  textarea,
  select {
    margin-right: 15px;
  }

  select {
    color: grey;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  .valid {
    border: #eee solid 1px;
  }

  .invalid {
    border: red solid 1px;
  }

  .error {
    color: red;
  }

  input,
  textarea,
  select {
    width: 100%;
    font-family: inherit;
    resize: none;
    border-radius: 0.3rem;
    outline: none;
    border: none;
    padding: 0.3rem;

    &:focus {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #eee;
  background-color: #476647e4;
  border: 1px solid #476647e4;
  border-radius: 3px;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.2rem 0.9rem;
  width: fit-content;
  text-transform: uppercase;
  transition: ease all 0.3s;
  position: absolute;
  right: 17px;

  &:disabled {
    background-color: grey;
    border: 1px solid grey;
    cursor: default;

    &:hover {
      background-color: grey;
      border: 1px solid grey;
      box-shadow: none;
    }
  }

  &:hover {
    background-color: #5d915de3;
    border: 1px solid #5d8b5de3;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    transform: scale(0.99);
  }
`;
