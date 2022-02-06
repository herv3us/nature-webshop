import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PorductCard from '../components/ProductCard';
import { products } from '../dummyData/products';
import { Product } from '../models/Product';
import { getProductById } from '../services/productService';

function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const { productid } = useParams();

  const getProduct = async (id: string) => {
    const productInfo = await getProductById(id);
    setProduct(productInfo.product);
  };

  useEffect(() => {
    getProduct(productid as string);
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <PorductCard product={product as Product} />
        </div>
      ) : null}
    </div>
  );
}

export default ProductPage;
