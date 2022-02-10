import CartProductInfo from './CartProductInfo';
import { getCartFromLocalStorage } from '../services/localStorageService';
import {
  Wrapper,
  Content,
  StyledUl,
  PayButton,
} from '../styling/MyPage.styled';
import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import styled from 'styled-components';

function Cart() {
  const cart = getCartFromLocalStorage();
  const [cartValue, setCartValue] = useState(0);
  const [updateCart, setUpdateCart] = useState<[] | Product[]>(
    cart as Product[]
  );
  const [productsInCart, setProductsInCart] = useState<[] | Product[]>([]);
  const count: [number] = [0];

  const sum = () => {
    const sum = count.reduce(function (a, b) {
      return a + b;
    }, 0);
    setCartValue(sum);
  };

  const countTotalValue = (cart: Product[]) => {
    if (cart?.length > 0) {
      cart?.map((item) => {
        count.push(item.price * item.inCart);
      });
      sum();
    }
  };

  useEffect(() => {
    countTotalValue(updateCart);
  }, [updateCart, setUpdateCart]);

  useEffect(() => {
    if (cart) {
      setProductsInCart(cart);
    }
  }, []);

  return (
    <Wrapper>
      <Content>
        <h2>Din Varukorg</h2>
        <StyledUl>
          {productsInCart && productsInCart?.length > 0 ? (
            productsInCart?.map((cartItem) => (
              <CartProductInfo
                key={cartItem.id}
                product={cartItem}
                updateCart={updateCart}
                setProductsInCart={setProductsInCart}
                setUpdateCart={setUpdateCart}
              />
            ))
          ) : (
            <p>Din varukorg är för närvarande tom.</p>
          )}
        </StyledUl>
        {productsInCart && productsInCart?.length > 0 ? (
          <TotalValueWrapper>
            <TotalValue>Totaltbelopp: {cartValue} kr</TotalValue>
            <PayButton>Betala</PayButton>
          </TotalValueWrapper>
        ) : null}
      </Content>
    </Wrapper>
  );
}

export default Cart;

const TotalValueWrapper = styled.div`
  position: relative;
`;

const TotalValue = styled.p`
  margin: 15px 0 2rem;
`;
