import { Product } from './../models/Product';
import { getJacketsFromLocalStorage } from '../services/localStorageService';
import Header from '../components/Header';
import ProductCardMini from '../components/ProductCardMini';
import { WrapperUl } from '../styling/WrapperUl.styled';
import styled from 'styled-components';
import { search } from '../utils/search';

interface Props {
  src: string;
  searchString: string;
  searchParam: string[];
}

function JacketPage(props: Props) {
  const { src, searchString, searchParam } = props;
  const allJackets = getJacketsFromLocalStorage();

  return (
    <Wrapper>
      <Header src={src} title={'Keeps you warm'} subtitle={'Every minute.'} />
      <WrapperUl>
        {search(allJackets as Product[], searchParam, searchString)?.map(
          (product: Product) => (
            <ProductCardMini product={product} key={product.id} />
          )
        )}
      </WrapperUl>
    </Wrapper>
  );
}

export default JacketPage;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 5rem;
`;
