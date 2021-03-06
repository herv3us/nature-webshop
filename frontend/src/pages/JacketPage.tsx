import { Product } from './../models/Product';
import { getJacketsFromLocalStorage } from '../services/localStorageService';
import Header from '../components/Header';
import ProductCardMini from '../components/ProductCardMini';
import { WrapperUl } from '../styling/WrapperUl.styled';
import styled from 'styled-components';

interface Props {
  src: string;
}

function JacketPage(props: Props) {
  const { src } = props;
  const allJackets = getJacketsFromLocalStorage();

  return (
    <Wrapper>
      <Header src={src} title={'Keeps you warm'} subtitle={'Every minute.'} />
      <WrapperUl>
        {(allJackets as Product[])?.map((product: Product) => (
          <ProductCardMini product={product} key={product.id} />
        ))}
      </WrapperUl>
    </Wrapper>
  );
}

export default JacketPage;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 5rem;
`;
