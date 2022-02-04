import Header from './../components/Header';
import { useEffect, useState } from 'react';
import { getAllProducts } from './../services/productService';
import { Product } from './../models/Product';
import styled from 'styled-components';
import ProductCardMini from '../components/ProductCardMini';

function StartPage() {
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
      <Header />
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
  margin: 0 auto;
`;

const WrapperUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0.5rem;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto; */
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
