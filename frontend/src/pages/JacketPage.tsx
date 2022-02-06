import { Product } from './../models/Product';
import Header from '../components/Header';
import ProductCardMini from '../components/ProductCardMini';
import { WrapperUl } from '../styling/WrapperUl.styled';
import styled from 'styled-components';
interface Props {
  src: string;
  products: Product[];
  search: Function;
}

function JacketPage(props: Props) {
  const { src, products, search } = props;

  return (
    <Wrapper>
      <Header src={src} title={'Keeps you warm'} subtitle={'Every minute.'} />
      <WrapperUl>
        {search(products)?.map((product: Product) => (
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
