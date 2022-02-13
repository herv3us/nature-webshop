import { Product } from '../models/Product';
import {
  saveBackpacksToLocalStorage,
  saveJacketsToLocalStorage,
  saveShoesToLocalStorage,
} from '../services/localStorageService';

export const filterProducts = (products: Product[]) => {
  const allBackpacks: Product[] = [];
  const allJackets: Product[] = [];
  const allShoes: Product[] = [];

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
};
