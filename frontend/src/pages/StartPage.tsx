import Header from './../components/Header';
import { useEffect, useState } from 'react';
import { getAllProducts } from './../services/productService';
import { Product } from './../models/Product';
import styled from 'styled-components';
import ProductCardMini from '../components/ProductCardMini';

interface Props {
  src: string;
}

function StartPage(props: Props) {
  const { src } = props;

  const [products, setProducts] = useState<[Product] | []>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data.products);
  };
  return (
    <Wrapper>
      <Header
        src={src}
        title={'Welcome to Nature ⛺'}
        subtitle={'Your adventure starts here.'}
      />
      <WrapperUl>
        {products.map((product) => (
          <ProductCardMini product={product} key={product.id} />
        ))}
      </WrapperUl>
    </Wrapper>
  );
}

export default StartPage;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 5rem;
`;

const WrapperUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
