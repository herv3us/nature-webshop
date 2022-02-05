import { Product } from './../models/Product';
import Header from '../components/Header';
import ProductCardMini from '../components/ProductCardMini';
import { WrapperUl } from '../styling/WrapperUl.styled';
interface Props {
  src: string;
  products: Product[];
  search: Function;
}

function JacketPage(props: Props) {
  const { src, products, search } = props;

  return (
    <div>
      <Header src={src} title={'Keeps you warm'} subtitle={'Every minute.'} />
      <WrapperUl>
        {search(products)?.map((product: Product) => (
          <ProductCardMini product={product} key={product.id} />
        ))}
      </WrapperUl>
    </div>
  );
}

export default JacketPage;
