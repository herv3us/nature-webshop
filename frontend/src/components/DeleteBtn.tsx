import { useRecoilState } from 'recoil';
import { amountOfProductsInCartState } from '../atoms/amountOfProductsInCartState';
import { Product } from '../models/Product';
import styled from 'styled-components';
import { isTemplateExpression } from 'typescript';

interface Props {
  product: Product;
  cart: Product[];
  setCart: Function;
  setProductsInCart: Function;
}

function DeleteBtn(props: Props) {
  const { product, cart, setCart, setProductsInCart } = props;
  const [amountOfProducts, setAmountOfProducts] = useRecoilState(
    amountOfProductsInCartState
  );

  const deleteProduct = (e: any, product: Product) => {
    e.preventDefault();
    if (cart && cart.length > 1) {
      const foundProduct = cart.find((item) => item.id === product.id);
      if (foundProduct) {
        setAmountOfProducts(amountOfProducts - foundProduct.inCart);
      }

      const i = cart?.findIndex((item) => item.id === product.id);
      if (i !== -1) {
        cart.splice(i, 1);
      }

      setCart([...cart]);
      setProductsInCart([...cart]);
    } else if (cart.length === 1) {
      setCart(null);
      setProductsInCart(null);
      localStorage.removeItem('cart');
      setAmountOfProducts(0);
    }
  };

  return (
    <StyledDeleteBtn onClick={(e) => deleteProduct(e, product)}>
      X
    </StyledDeleteBtn>
  );
}

export default DeleteBtn;

const StyledDeleteBtn = styled.button`
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
