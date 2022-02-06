import React from 'react';
import { Product } from '../models/Product';

interface Props {
  product: Product;
}

function PorductCard(props: Props) {
  const { product } = props;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imgUrl} alt={product.title} />
    </div>
  );
}

export default PorductCard;
