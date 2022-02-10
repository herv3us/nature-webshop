import { Product } from '../models/Product';
import styled from 'styled-components';
import { saveCartToLocalStorage } from '../services/localStorageService';
import { useEffect, useState } from 'react';
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

  const deleteProduct = (e: any, product: Product) => {
    e.preventDefault();
    if (cart && cart.length > 1) {
      const i = cart?.findIndex((item) => item.title === product.title);
      if (i !== -1) {
        cart.splice(i, 1);
      }
      setCart([...cart]);
      setProductsInCart([...cart]);
    } else if (cart.length === 1) {
      setCart(null);
      setProductsInCart(null);
      localStorage.removeItem('cart');
    }
  };

  useEffect(() => {
    saveCartToLocalStorage(cart as Product[]);
    setThisProduct(product);
  }, [cart, setProductsInCart]);

  return (
    <StyledLi>
      <DeleteBtn onClick={(e) => deleteProduct(e, product)}>X</DeleteBtn>
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
