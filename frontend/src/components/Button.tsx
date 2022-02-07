import { useEffect, useState } from 'react';
import {
  getUserFromLocalStorage,
  saveCartToLocalStorage,
} from '../services/localStorageService';
import { Product } from '../models/Product';
import styled from 'styled-components';

interface Props {
  product: Product;
  userCart: Product[];
  setUserCart: Function;
}

function Button(props: Props) {
  const { product, userCart, setUserCart } = props;
  const user = getUserFromLocalStorage();
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    if (user?.role === 'admin') {
      setButtonText('Redigera');
    } else if (user?.role === 'customer') {
      setButtonText('Köp');
    }
  }, []);

  const addToCart = () => {
    if (userCart.length > 0) {
      userCart.map((item) => {
        if (item.id === product.id) {
          const thisItem = { ...item };
          if (item.inCart > 0) {
            item.inCart++;
          } else {
            thisItem.inCart = +1 as number;
          }
          const updatedProduct = { ...thisItem };

          const filterdArray = userCart.filter(
            (item) => item.id !== product.id
          );
          const newCart = [updatedProduct, ...filterdArray];
          //   console.log(newCart);
          setUserCart(newCart);
        } else {
          const updateCart = [product, ...userCart];
          setUserCart(updateCart);
        }
      });
    } else if (userCart.length === 0) {
      setUserCart([product]);
    }
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (user?.role === 'customer') {
      console.log('Im a user');
      addToCart();
    } else if (user?.role === 'admin') {
      console.log('you want to edit this product');
      // navigera admin till en sida där man kan uppdatera produkten
    }
  };

  useEffect(() => {
    saveCartToLocalStorage(userCart as Product[]);
  }, [userCart]);

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
