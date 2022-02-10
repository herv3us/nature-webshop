import CartProductInfo from './CartProductInfo';
import { getCartFromLocalStorage } from '../services/localStorageService';
import { Wrapper, Content, StyledUl } from '../styling/MyPage.styled';
import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import PayButton from './PayButton';
import styled from 'styled-components';
import CheckoutPopup from './CheckoutPopup';

function Cart() {
  const [cartValue, setCartValue] = useState(0);
  const [cart, setCart] = useState<[] | Product[]>(
    getCartFromLocalStorage() as Product[]
  );
  const [productsInCart, setProductsInCart] = useState<[] | Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
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
    countTotalValue(cart);
  }, [cart, setCart]);

  useEffect(() => {
    if (cart) {
      setProductsInCart(cart);
    }
  }, []);

  return (
    <Wrapper>
      <Content>
        <h2>Din Varukorg</h2>
        {isOpen ? (
          <CheckoutPopup
            setIsOpen={setIsOpen}
            setProductsInCart={setProductsInCart}
          />
        ) : null}
        <StyledUl>
          {productsInCart && productsInCart?.length > 0 ? (
            productsInCart?.map((cartItem) => (
              <CartProductInfo
                key={cartItem.id}
                product={cartItem}
                cart={cart}
                setProductsInCart={setProductsInCart}
                setCart={setCart}
              />
            ))
          ) : (
            <p>Din varukorg är för närvarande tom.</p>
          )}
        </StyledUl>
        {productsInCart && productsInCart?.length > 0 ? (
          <TotalValueWrapper>
            <TotalValue>Totaltbelopp: {cartValue} kr</TotalValue>
            <PayButton
              setIsOpen={setIsOpen}
              setProductsInCart={setProductsInCart}
            />
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
