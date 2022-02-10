import React from 'react';
import { getCartFromLocalStorage } from '../services/localStorageService';
import {
  Overlay,
  PopupWindow,
  Content,
  Button,
} from '../styling/StyledPopup.styled';

interface Props {
  setIsOpen: Function;
  setProductsInCart: Function;
}

function CheckoutPopup(props: Props) {
  const { setIsOpen, setProductsInCart } = props;
  const cart = getCartFromLocalStorage();
  return (
    <Overlay>
      <PopupWindow>
        <Content>
          <h1>Tack för ditt köp!</h1>
          <Button
            onClick={() => {
              setIsOpen(false);
              setProductsInCart([]);
            }}
          >
            X
          </Button>
          {cart && cart?.length > 1 ? (
            <div>
              Varorna:
              <ol>
                {cart?.map((product) => (
                  <li key={product.id}>{product.title}</li>
                ))}
              </ol>
              <p>kommer levereras till dig inom kort.</p>
            </div>
          ) : (
            <div>
              <p>
                Ditt köp kommer snart att levereras rakt hem till din brevlåda.
              </p>
              <h3>Välkommen åter!</h3>
            </div>
          )}
        </Content>
      </PopupWindow>
    </Overlay>
  );
}

export default CheckoutPopup;
