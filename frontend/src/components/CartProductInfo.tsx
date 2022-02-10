import { Product } from '../models/Product';
import styled from 'styled-components';
import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
} from '../services/localStorageService';
import { useEffect, useState } from 'react';
interface Props {
  product: Product;
  updateCart: Product[];
  setProductsInCart: Function;
  setUpdateCart: Function;
}

function CartProductInfo(props: Props) {
  const { product, updateCart, setProductsInCart, setUpdateCart } = props;
  const [thisProduct, setThisProduct] = useState(product);
  const cart = getCartFromLocalStorage();

  const decrease = (e: any, product: Product) => {
    e.preventDefault();
    const foundProduct = cart?.find(
      (inCartItem) => inCartItem.id === product.id
    );
    if (foundProduct) {
      const updateCart = cart?.map((a) => {
        const item = { ...a };
        if (a.id === foundProduct.id) {
          item.inCart--;
        }
        return item;
      });
      setUpdateCart(updateCart);
      setProductsInCart(updateCart);
    }
  };

  const increase = (e: any, product: Product) => {
    e.preventDefault();
    const foundProduct = cart?.find(
      (inCartItem) => inCartItem.id === product.id
    );
    if (foundProduct) {
      const updateCart = cart?.map((a) => {
        const item = { ...a };
        if (a.id === foundProduct.id) {
          item.inCart++;
        }
        return item;
      });
      setUpdateCart(updateCart);
      setProductsInCart(updateCart);
    }
  };

  const deleteProduct = (e: any, product: Product) => {
    e.preventDefault();
    const foundProduct = cart?.find(
      (inCartItem) => inCartItem.id === product.id
    );

    if (cart && cart.length >= 1) {
      const i = cart?.findIndex((item) => item.title === product.title);
      if (i !== -1) {
        cart.splice(i, 1);
      }
      setUpdateCart([...cart]);
      setProductsInCart([...cart]);
    }
  };

  useEffect(() => {
    saveCartToLocalStorage(updateCart as Product[]);
    setThisProduct(product);
  }, [updateCart, setProductsInCart]);

  return (
    <StyledLi>
      <DeleteBtn onClick={(e) => deleteProduct(e, product)}>X</DeleteBtn>
      <Wrapper>
        <Image src={thisProduct.imgUrl} alt={thisProduct.title} />
        <h4>{thisProduct.title}</h4>
      </Wrapper>
      <Wrapper>
        <p>{thisProduct.price * thisProduct.inCart} kr</p>
        <AddMoreInCart>
          <button
            onClick={(e) => decrease(e, product)}
            disabled={thisProduct.inCart <= 1}
          >
            -
          </button>
          <p>{thisProduct.inCart}</p>
          <button
            onClick={(e) => increase(e, product)}
            disabled={thisProduct.inCart >= product.stock}
          >
            +
          </button>
        </AddMoreInCart>
      </Wrapper>
    </StyledLi>
  );
}

export default CartProductInfo;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 2rem;
  border-radius: 0.2rem;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddMoreInCart = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 10px;
  }

  button {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 30%;
    border: none;
    text-align: center;

    &:disabled {
      cursor: auto;
    }
  }
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 0.4rem;
  margin: 0.4rem;
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  font-weight: bold;
  color: #c04e4e;
  border: none;
  background-color: #ddd;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;

  @media (max-width: 655px) {
    top: -17.5rem;
  }

  &:hover {
    color: #eee;
    background-color: #c04e4e;
  }
`;
