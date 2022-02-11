import styled from 'styled-components';
import {
  getTokenFromLocalStorage,
  getCartFromLocalStorage,
} from '../services/localStorageService';
import { Product } from '../models/Product';
import { updateProduct } from '../services/productService';

interface Props {
  setIsOpen: Function;
  setProductsInCart: Function;
}

function PayButton(props: Props) {
  const { setIsOpen, setProductsInCart } = props;
  const cart = getCartFromLocalStorage();
  const token = getTokenFromLocalStorage();

  const handleClick = async (e: any) => {
    e.preventDefault();

    cart?.map((product) => {
      updateThisProduct(product);
    });
  };

  const updateThisProduct = async (product: Product) => {
    const newProduct = {
      title: product.title,
      category: product.category,
      description: product.description,
      stock: product.stock - product.inCart,
      imgUrl: product.imgUrl,
      price: product.price,
      id: product.id,
      inCart: 0,
    };
    const data = await updateProduct(newProduct, product.id, token as string);

    if (data.success) {
      setIsOpen(true);
      localStorage.removeItem('cart');
    }
  };

  return <Button onClick={(e) => handleClick(e)}>Betala</Button>;
}

export default PayButton;

const Button = styled.button`
  cursor: pointer;
  background-color: #476647e4;

  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  padding: 0.2rem 0.9rem;
  letter-spacing: 1.1px;
  z-index: 10;
  transition: ease all 0.5s;
  position: absolute;
  top: 35px;
  right: 0;

  &:hover {
    background-color: grey;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
`;
