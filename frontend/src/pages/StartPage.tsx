import { getAllProducts } from './../services/productService';
import { useEffect, useState } from 'react';
import { Product } from './../models/Product';
import Header from './../components/Header';
import ProductCardMini from '../components/ProductCardMini';
import styled from 'styled-components';
import SearchForm from '../components/SearchForm';

interface Props {
  src: string;
  products: Product[];
  setProducts: Function;
  search: Function;
  searchString: string;
  setSearchString: Function;
}

function StartPage(props: Props) {
  const { src, products, setProducts, search, searchString, setSearchString } =
    props;
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
      <SearchForm
        searchString={searchString}
        setSearchString={setSearchString}
      />
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <WrapperUl>
          {search(products).map((product: any) => (
            <ProductCardMini product={product} key={product.id} />
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
