import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  getUserFromLocalStorage,
  saveCartToLocalStorage,
  getCartFromLocalStorage,
} from '../services/localStorageService';
import { Product } from '../models/Product';
import styled from 'styled-components';
import { amountOfProductsInCartState } from '../atoms/amountOfProductsInCartState';

interface Props {
  product: Product;
  className: string;
}

function Button(props: Props) {
  const { product, className } = props;
  const user = getUserFromLocalStorage();
  const cart = getCartFromLocalStorage();
  const [buttonText, setButtonText] = useState('');
  const [amountOfProducts, setAmountOfProducts] = useRecoilState(
    amountOfProductsInCartState
  );

  useEffect(() => {
    if (user?.role === 'admin') {
      setButtonText('Redigera');
    } else if (user?.role === 'customer' && product.stock > 0) {
      setButtonText('Köp');
    } else {
      setButtonText('Slut');
    }
  }, []);

  // function that adds the product to cart.
  // It also checks if the products is already in the
  // cart, and then updates it's inCart value
  const addToCart = (product: Product) => {
    if (cart && cart?.length > 0) {
      //find out if the product even exist in the cart
      const foundProduct = cart?.find((item) => item.id === product.id);
      if (foundProduct) {
        if (foundProduct.inCart < foundProduct.stock) {
          foundProduct.inCart++;
          // find indexof the product and remove item from localStorage
          const i = cart.findIndex((item) => item.title === product.title);
          if (i !== -1) {
            cart.splice(i, 1);
          }
          //set a new localStorage with the updated pruduct.
          saveCartToLocalStorage([...cart, foundProduct]);
          setAmountOfProducts(amountOfProducts + 1);
        } else if (foundProduct.stock <= 0) {
          return;
        }
      } else if (product.stock <= 0) {
        return;
      } else {
        const newProduct = {
          id: product.id,
          title: product.title,
          category: product.category,
          description: product.description,
          imgUrl: product.imgUrl,
          price: product.price,
          stock: product.stock,
          inCart: 1,
        };
        saveCartToLocalStorage([...cart, newProduct]);
        setAmountOfProducts(amountOfProducts + 1);
      }
    } else if (product.stock === 0) {
      return;
    } else {
      const newProduct = {
        id: product.id,
        title: product.title,
        category: product.category,
        description: product.description,
        imgUrl: product.imgUrl,
        price: product.price,
        stock: product.stock,
        inCart: 1,
      };
      saveCartToLocalStorage([newProduct]);
      setAmountOfProducts(1);
    }
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (user?.role === 'customer') {
      addToCart(product);
    } else if (user?.role === 'admin') {
      console.log('you want to edit this product');
      // navigera admin till en sida där man kan uppdatera produkten
    }
  };

  return (
    <StyledBtn>
      <button onClick={(e) => handleClick(e)} className={className}>
        {buttonText}
      </button>
    </StyledBtn>
  );
}

export default Button;

const StyledBtn = styled.div`
  button {
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

    &:active {
      transform: scale(0.96);
    }
  }

  .outOfStock {
    cursor: default !important;
    /* pointer-events: none; */
    background-color: #eee;
    color: #ddd;

    &:hover {
      border: 1px solid #eee;
      background-color: #eee;
      color: #ddd;
    }

    &:active {
      transform: scale(1);
    }
  }
`;
