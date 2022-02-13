import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import { saveCartToLocalStorage } from '../services/localStorageService';
import DeleteBtn from './DeleteBtn';
import styled from 'styled-components';
interface Props {
  product: Product;
  cart: Product[];
  setProductsInCart: Function;
  setCart: Function;
}

function CartProductInfo(props: Props) {
  const { product, cart, setProductsInCart, setCart } = props;
  const [thisProduct, setThisProduct] = useState(product);

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
      setCart(updateCart);
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
      setCart(updateCart);
      setProductsInCart(updateCart);
    }
  };

  useEffect(() => {
    saveCartToLocalStorage(cart as Product[]);
    setThisProduct(product);
  }, [cart, setProductsInCart]);

  return (
    <StyledLi>
      <DeleteBtn
        product={product}
        cart={cart}
        setCart={setCart}
        setProductsInCart={setProductsInCart}
      />
      <Wrapper>
        <Image src={thisProduct.imgUrl} alt={thisProduct.title} />
        <TitleWrapper>
          <h4>{thisProduct.title}</h4>
          <p>{thisProduct.price * thisProduct.inCart} kr</p>
        </TitleWrapper>
      </Wrapper>
      <Wrapper>
        <p>Kvar i lager: {thisProduct.stock}</p>
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
  gap: 1rem;

  p {
    margin: 3px 0 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
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
