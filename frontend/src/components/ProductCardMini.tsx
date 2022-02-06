import { useState } from 'react';
import { Product } from './../models/Product';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductPopup from './ProductPopup';

interface Props {
  product: Product;
}

function ProductCardMini(props: Props) {
  const { product } = props;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    // e.stopPropagation();
    // navigate(`/products/${product.id}`);
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <WrapperLi onClick={() => setIsOpen(true)}>
        <Image src={product.imgUrl} alt={product.title} />
        <Wrapper>
          <h2>{product.title}</h2>
          <small>{product.price} kr</small>
        </Wrapper>
      </WrapperLi>
      {isOpen && <ProductPopup product={product} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default ProductCardMini;

const WrapperLi = styled.li`
  cursor: pointer;
  border-radius: 0.3rem;
  box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.7);
  list-style-type: none;
  position: relative;
  overflow: hidden;
  transform: scale(1.01);
  transition: all 0.3s;
  width: fit-content;
  height: 400px;
  width: 260px;

  &:hover {
    transform: scale(1.02);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  z-index: 20;
  background-color: #ffffff9b;
  overflow: hidden;
  width: 100%;
  height: 130px;
  color: #313131;
  h2 {
    width: 90%;
    font-size: 1.3rem;
    margin: 1rem 0 0;
    transform: rotate(5deg);
  }
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;
