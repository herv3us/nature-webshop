import CartProductInfo from './CartProductInfo';
import { getCartFromLocalStorage } from '../services/localStorageService';
import { Wrapper, Content } from '../styling/MyPage.styled';
import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import styled from 'styled-components';

function Cart() {
  const cart = getCartFromLocalStorage();
  const [cartValue, setCartValue] = useState(0);
  const count: [number] = [0];

  console.log(cart);

  const add = () => {
    const sum = count.reduce(function (a, b) {
      return a + b;
    }, 0);
    setCartValue(sum);
  };

  const countValue = (cart: Product[]) => {
    console.log(cart);
    if (cart.length > 0) {
      cart?.map((item) => {
        count.push(item.price);
      });
      add();
    }
  };

  useEffect(() => {
    countValue(cart as Product[]);
  }, []);

  return (
    <Wrapper>
      <Content>
        <h2>Din Varukorg</h2>
        <ul>
          {cart && cart?.length > 0 ? (
            cart?.map((cartItem) => (
              <div>
                <CartProductInfo key={cartItem.id} product={cartItem} />
              </div>
            ))
          ) : (
            <p>Din varukorg är för närvarande tom.</p>
          )}
        </ul>
        {cart && cart?.length > 0 ? (
          <p>Totalt att betala: {cartValue}</p>
        ) : null}
      </Content>
    </Wrapper>
  );
}

export default Cart;
