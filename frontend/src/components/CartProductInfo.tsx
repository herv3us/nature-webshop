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
      const updateProduct = {
        ...foundProduct,
        inCart: (foundProduct.inCart - 1) as number,
      };

      if (cart && cart?.length > 1) {
        const i = cart?.findIndex((item) => item.title === product.title);
        if (i !== -1) {
          cart.splice(i, 1);
        }
        setUpdateCart([...cart, updateProduct]);
        setProductsInCart([...cart, updateProduct]);
      } else {
        setUpdateCart(null);
      }
    }
  };

  useEffect(() => {
    saveCartToLocalStorage(updateCart as Product[]);
    setThisProduct(product);
  }, [updateCart, setProductsInCart]);

  return (
    <StyledLi>
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
          <button>+</button>
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
  border-radius: 0.4rem;
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
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 30%;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 0.6rem;
  margin: 0.4rem;
`;
