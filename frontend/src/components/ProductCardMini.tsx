import { Product } from './../models/Product';
import styled from 'styled-components';

interface Props {
  product: Product;
}

function ProductCardMini(props: Props) {
  const { product } = props;

  return (
    <WrapperLi>
      <Image src={product.imgUrl} alt={product.title} />
      <Wrapper>
        <h2>{product.title}</h2>
        <small>{product.price} kr</small>
      </Wrapper>
    </WrapperLi>
  );
}

export default ProductCardMini;

const WrapperLi = styled.li`
  cursor: pointer;
  border-radius: 0.3rem;
  box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
  list-style-type: none;
  position: relative;
  overflow: hidden;
  transform: scale(1.01);
  transition: all 0.3s;
  width: fit-content;

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

  h2 {
    width: 90%;
    font-size: 1.3rem;
    margin: 1rem 0 0;
    transform: rotate(5deg);
  }
`;

const Image = styled.img`
  max-height: 400px;
  width: auto;
`;