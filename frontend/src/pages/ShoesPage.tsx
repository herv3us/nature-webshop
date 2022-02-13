import { Product } from './../models/Product';
import { getShoesFromLocalStorage } from '../services/localStorageService';
import Header from '../components/Header';
import ProductCardMini from '../components/ProductCardMini';
import { WrapperUl } from '../styling/WrapperUl.styled';
import styled from 'styled-components';

interface Props {
  src: string;
}

function ShoesPage(props: Props) {
  const { src } = props;
  const allShoes = getShoesFromLocalStorage();

  return (
    <Wrapper>
      <Header src={src} title={'Cold and wet feet'} subtitle={'Never again.'} />
      <WrapperUl>
        {(allShoes as Product[])?.map((product: any) => (
          <ProductCardMini product={product} key={product.id} />
        ))}
      </WrapperUl>
    </Wrapper>
  );
}

export default ShoesPage;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 5rem;
`;
