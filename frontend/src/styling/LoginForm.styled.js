import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #353535;
  font-weight: bold;
`;

export const Form = styled.form`
  background-color: #fff;
  margin-top: 3.5rem;
  padding: 2rem 2.2rem 4rem;
  text-align: center;
  border-radius: 0.4rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.8rem;

  input {
    margin-top: 0.3rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: #eeeeeec5;
    margin-bottom: 0.3rem;

    &:active,
    &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
  }

  .valid {
    border: 2px solid lightgreen;
  }

  .invalid {
    border: 2px solid red;
  }

  .error {
    color: #c04e4e;
  }
`;

// export const Input = styled.input``;

export const Button = styled.button`
  padding: 0.3rem 1rem;
  color: #353535;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 3px;
  border: none;
  margin-top: 0.6rem;
  transition: all ease 0.3s;

  &:hover {
    background-color: #476647e4;
    color: #eee;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.98);
    outline: none;
  }

  &:focus {
    outline: none;
    border: 1px solid lightgreen;
  }
`;

export const Message = styled.p`
  color: red;
  margin: 0.5rem 0 0;
  max-width: 240px;
  font-size: 0.8rem;
`;
