import { useEffect, useState } from 'react';
import {
  getUserFromLocalStorage,
  saveCartToLocalStorage,
  getCartFromLocalStorage,
} from '../services/localStorageService';
import { Product } from '../models/Product';
import styled from 'styled-components';

interface Props {
  product: Product;
}

function Button(props: Props) {
  const { product } = props;
  const [buttonText, setButtonText] = useState('');
  const user = getUserFromLocalStorage();

  useEffect(() => {
    if (user?.role === 'admin') {
      setButtonText('Redigera');
    } else if (user?.role === 'customer') {
      setButtonText('Köp');
    }
  }, []);

  const addToCart = () => {
    const cart = getCartFromLocalStorage();

    if (cart && cart?.length > 0) {
      console.log('Hej');
      const newCart = [product, ...cart];
      saveCartToLocalStorage(newCart);
    } else {
      console.log('sparar till localstorage');
      saveCartToLocalStorage([product]);
    }
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (user?.role === 'customer') {
      addToCart();
    } else if (user?.role === 'admin') {
      console.log('you want to edit this product');
      // navigera admin till en sida där man kan uppdatera produkten
    }
  };

  return <StyledBtn onClick={(e) => handleClick(e)}>{buttonText}</StyledBtn>;
}

export default Button;

const StyledBtn = styled.button`
  cursor: pointer;
  background-color: #eeeeeeeb;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #353535;
  font-weight: bold;
  padding: 0.2rem 0.9rem;
  position: absolute;
  top: 20px;
  right: 15px;
  z-index: 40;
  text-transform: uppercase;
  transition: ease all 0.5s;

  &:hover {
    background-color: #476647e4;
    border: 1px solid #476647e4;
    color: #eee;
  }
`;
