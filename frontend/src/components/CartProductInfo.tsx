import { Product } from '../models/Product';

interface Props {
  product: Product;
}

function CartProductInfo(props: Props) {
  const { product } = props;

  return (
    <li>
      <h4>{product.title}</h4>
      <p>{product.price} kr</p>
    </li>
  );
}

export default CartProductInfo;