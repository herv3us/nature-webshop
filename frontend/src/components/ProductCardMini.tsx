import { Product } from './../models/Product';

interface Props {
  product: Product;
}

function ProductCardMini(props: Props) {
  const { product } = props;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.imgUrl} alt={product.title} />
    </div>
  );
}

export default ProductCardMini;
