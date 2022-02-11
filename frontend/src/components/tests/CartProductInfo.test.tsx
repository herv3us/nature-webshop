import CartProductInfo from '../CartProductInfo';
import { render, screen } from '@testing-library/react';
import { getTokenFromLocalStorage } from '../../services/localStorageService';
import { products, singleProduct } from '../../dummyData/products';

const setProductsInCartMock = jest.fn();
const setCartMock = jest.fn();

jest.mock('../../services/localStorageService', () => {
  return {
    getCartFromLocalStorage: jest.fn(),
    saveCartToLocalStorage: jest.fn(),
    getTokenFromLocalStorage: jest.fn(),
  };
});

describe('Tests for CartProductInfo', () => {
  it('render without crashing', () => {
    render(
      <CartProductInfo
        product={singleProduct}
        cart={products}
        setProductsInCart={setProductsInCartMock}
        setCart={setCartMock}
      />
    );
  });

  it('render product-title', () => {
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );
    render(
      <CartProductInfo
        product={singleProduct}
        cart={products}
        setProductsInCart={setProductsInCartMock}
        setCart={setCartMock}
      />
    );

    const title = screen.getByText(singleProduct.title);
    expect(title).toBeInTheDocument();
  });

  it('render the price of the product', () => {
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );

    render(
      <CartProductInfo
        product={singleProduct}
        cart={products}
        setProductsInCart={setProductsInCartMock}
        setCart={setCartMock}
      />
    );

    const price = screen.queryByText(`${singleProduct.price} kr`);
    expect(price).toBeInTheDocument();
  });

  it('render the stock of the product', () => {
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );

    render(
      <CartProductInfo
        product={singleProduct}
        cart={products}
        setProductsInCart={setProductsInCartMock}
        setCart={setCartMock}
      />
    );

    const stock = screen.queryByText(`Kvar i lager: ${singleProduct.stock}`);
    expect(stock).toBeInTheDocument();
  });
});
