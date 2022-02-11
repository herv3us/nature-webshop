import { Product } from './../models/Product';
import { getBackpacksFromLocalStorage } from '../services/localStorageService';
import ProductCardMini from '../components/ProductCardMini';
import Header from '../components/Header';
import { WrapperUl } from '../styling/WrapperUl.styled';
import styled from 'styled-components';
import { search } from '../utils/search';

interface Props {
  src: string;
  searchString: string;
  searchParam: string[];
}

function BackpackPage(props: Props) {
  const { src, searchString, searchParam } = props;
  const allBackpacks = getBackpacksFromLocalStorage();

  return (
    <Wrapper>
      <Header src={src} title={'Any backpack'} subtitle={'For every moment.'} />
      <WrapperUl>
        {search(allBackpacks as Product[], searchParam, searchString)?.map(
          (product: Product) => (
            <ProductCardMini product={product} key={product.id} />
          )
        )}
      </WrapperUl>
    </Wrapper>
  );
}

export default BackpackPage;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 5rem;
`;
