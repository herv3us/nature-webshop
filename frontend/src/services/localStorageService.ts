import { User } from '../models/User'
import { Product } from '../models/Product';

export const saveTokenInLocalStorage = (token: string): void => {
  localStorage.setItem('token', token);
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  return token ? token : null;
};

export const saveUserInLocalStorage = (user: User): void => {
    localStorage.setItem('thisUser', JSON.stringify(user))
}

export const getUserFromLocalStorage = (): User | null=> {
    const user = localStorage.getItem('thisUser')
    return user ? JSON.parse(user) : null
}

export const saveCartToLocalStorage = (products: Product[]): void => {
  localStorage.setItem('cart', JSON.stringify(products))
}

export const getCartFromLocalStorage = (): Product[] | null => {
  const productsInCart = localStorage.getItem('cart')
  return productsInCart ? JSON.parse(productsInCart) : null
}

export const saveBackpacksToLocalStorage = (backpacks: Product[]): void=> {
  localStorage.setItem('backpacks', JSON.stringify(backpacks))
}

export const saveJacketsToLocalStorage = (jackets: Product[]): void=> {
 localStorage.setItem('jackets', JSON.stringify(jackets))
}

export const saveShoesToLocalStorage = (shoes: Product[]): void=> {
  localStorage.setItem('shoes', JSON.stringify(shoes))
}

export const getBackpacksFromLocalStorage = (): Product[] |null => {
  const backpacks = localStorage.getItem('backpacks')
  return backpacks ? JSON.parse(backpacks) : null
}

export const getJacketsFromLocalStorage = (): Product[] |null => {
  const jackets = localStorage.getItem('jackets')
  return jackets ? JSON.parse(jackets) : null
}

export const getShoesFromLocalStorage = (): Product[] |null => {
  const shoes = localStorage.getItem('shoes')
  return shoes ? JSON.parse(shoes) : null
}