import { useNavigate } from 'react-router-dom';
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from '../../services/localStorageService';
import { deleteProduct } from '../../services/productService';
import styled from 'styled-components';

interface Props {
  id: string;
}

function DeleteProduct({ id }: Props) {
  const token = getTokenFromLocalStorage();
  const user = getUserFromLocalStorage();
  const navigate = useNavigate();

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();

    if (!token && user?.role !== 'admin') {
      navigate('/');
    }

    if (user?.role === 'admin') {
      const res = await deleteProduct(id, token as string);
      if (res.success === true) {
        navigate('/');
      }
    }
  };

  return <Button onClick={(e) => handleDelete(e)}>Radera produkt</Button>;
}

export default DeleteProduct;

const Button = styled.button`
  color: #fff;
  background-color: #c04e4e;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  position: absolute;
  z-index: 1500;
  top: -11px;
  right: 12px;
  transition: all ease 0.3s;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    background-color: #9c3333;
  }

  &:active {
    transform: scale(0.98);
  }
`;
