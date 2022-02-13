import { useEffect, useState } from 'react';
import { getAllProducts } from './../services/productService';
import { Product } from './../models/Product';
import { search } from '../utils/search';
import Header from './../components/Header';
import SearchForm from '../components/SearchForm';
import ProductCardMini from '../components/ProductCardMini';
import styled from 'styled-components';
import { WrapperUl } from '../styling/WrapperUl.styled';
import { filterProducts } from '../utils/filterProducts';

interface Props {
  src: string;
}

function StartPage(props: Props) {
  const { src } = props;
  const [products, setProducts] = useState<[] | [Product]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [searchParam] = useState(['title', 'description']);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data.products);
    setIsLoaded(true);
  };

  useEffect(() => {
    filterProducts(products);
  }, [products]);

  return (
    <Wrapper>
      <Header
        src={src}
        title={'Welcome to Nature ⛺'}
        subtitle={'Your adventure starts here.'}
      />
      {!isLoaded ? (
        <Content>⌛ Loading...</Content>
      ) : (
        <Content>
          <SearchForm
            searchString={searchString}
            setSearchString={setSearchString}
          />
          <WrapperUl>
            {search(products, searchParam, searchString).map((product: any) => (
              <ProductCardMini product={product} key={product.id} />
            ))}
          </WrapperUl>
        </Content>
      )}
    </Wrapper>
  );
}

export default StartPage;

const Wrapper = styled.div`
  margin: 0 auto 5rem;
`;

const Content = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
