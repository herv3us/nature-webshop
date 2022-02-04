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
      {products.map((product) => (
        <ProductCardMini product={product} key={product.id} />
      ))}
    </Wrapper>
  );
}

export default StartPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 0.5rem;
`;
