import { useEffect, useState } from 'react';
import { getAllProducts } from './../services/productService';
import { Product } from './../models/Product';
import { search } from '../utils/search';
import {
  saveBackpacksToLocalStorage,
  saveJacketsToLocalStorage,
  saveShoesToLocalStorage,
} from '../services/localStorageService';
import Header from './../components/Header';
import ProductCardMini from '../components/ProductCardMini';
import styled from 'styled-components';
import { WrapperUl } from '../styling/WrapperUl.styled';

interface Props {
  src: string;
  products: Product[];
  setProducts: Function;
  searchString: string;
  searchParam: string[];
}

function StartPage(props: Props) {
  const { src, products, setProducts, searchString, searchParam } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const allBackpacks: Product[] = [];
  const allJackets: Product[] = [];
  const allShoes: Product[] = [];

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getAllProducts();
    setProducts(data.products);
    setIsLoaded(true);
  };

  useEffect(() => {
    products?.filter((product) => {
      if (product.category === 'jacket') {
        allJackets.push(product);
      } else if (product.category === 'backpack') {
        allBackpacks.push(product);
      } else if (product.category === 'shoes') {
        allShoes.push(product);
      }
      saveJacketsToLocalStorage(allJackets);
      saveBackpacksToLocalStorage(allBackpacks);
      saveShoesToLocalStorage(allShoes);
    });
  }, [products]);

  return (
    <Wrapper>
      <Header
        src={src}
        title={'Welcome to Nature ⛺'}
        subtitle={'Your adventure starts here.'}
      />
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <WrapperUl>
          {search(products, searchParam, searchString).map((product: any) => (
            <ProductCardMini product={product} key={product.id} />
          ))}
        </WrapperUl>
      )}
    </Wrapper>
  );
}

export default StartPage;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 5rem;
`;
