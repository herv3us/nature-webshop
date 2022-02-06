import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import {
  Overlay,
  PopupWindow,
  Image,
  Content,
  Button,
} from '../styling/StyledPopup.styled';

interface Props {
  product: Product;
  setIsOpen: Function;
}

function ProductPopup(props: Props) {
  const { product, setIsOpen } = props;
  const [lowStockMessage, setLowStockMessage] = useState('');

  useEffect(() => {
    if (product.stock <= 5) {
      setLowStockMessage('Passa på att handla, endast ett fåtal kvar i lager');
    } else {
      setLowStockMessage('');
    }
  }, []);

  return (
    <Overlay>
      <PopupWindow>
        <Image src={product.imgUrl} alt={product.title} />
        <Content>
          <Button onClick={() => setIsOpen(false)}>X</Button>
          <h1>{product.title}</h1>
          <div>
            <p>{product.description}</p>
            <div>
              <small>
                Kvar i lager: <br /> <span>{product.stock}</span>
              </small>
              <p>{product.stock <= 5 ? lowStockMessage : null}</p>
            </div>
          </div>
        </Content>
      </PopupWindow>
    </Overlay>
  );
}

export default ProductPopup;
