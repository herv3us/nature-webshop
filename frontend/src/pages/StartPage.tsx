import { getAllProducts } from './../services/productService';
import { useEffect, useState } from 'react';
import { Product } from './../models/Product';
import Header from './../components/Header';
import ProductCardMini from '../components/ProductCardMini';
import styled from 'styled-components';
import { WrapperUl } from '../styling/WrapperUl.styled';

interface Props {
  src: string;
  products: Product[];
  setProducts: Function;
  search: Function;
  userCart: Product[];
  setUserCart: Function;
}

function StartPage(props: Props) {
  const { src, products, setProducts, search, userCart, setUserCart } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data.products);
    setIsLoaded(true);
  };

  return (
    <Wrapper>
      <Header
        src={src}
        title={'Welcome to Nature ⛺'}
        subtitle={'Your adventure starts here.'}
      />
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <WrapperUl>
          {search(products).map((product: any) => (
            <ProductCardMini
              product={product}
              key={product.id}
              userCart={userCart}
              setUserCart={setUserCart}
            />
          ))}
        </WrapperUl>
      )}
    </Wrapper>
  );
}

export default StartPage;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 5rem;
`;
