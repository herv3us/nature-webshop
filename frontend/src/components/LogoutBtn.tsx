import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LogoutBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('thisUser');
    localStorage.removeItem('cart');
    navigate('/');
  };

  return <Button onClick={() => handleClick()}>Logga ut</Button>;
}

export default LogoutBtn;

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #c04e4e;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  position: absolute;
  top: -15px;
  right: 40px;
  padding: 0.3rem 1rem;
  transition: all ease 0.3s;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    background-color: #9c3333;
  }

  &:active {
    transform: scale(0.98);
  }
`;
