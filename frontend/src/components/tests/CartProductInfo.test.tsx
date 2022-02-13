import CartProductInfo from '../CartProductInfo';
import { render, screen } from '@testing-library/react';
import {
  getTokenFromLocalStorage,
  getCartFromLocalStorage,
} from '../../services/localStorageService';
import { products, singleProduct } from '../../dummyData/products';
import userEvent from '@testing-library/user-event';

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
  beforeEach(() => {
    (getCartFromLocalStorage as jest.Mock).mockReturnValue(products);
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );
  });

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
    render(
      <CartProductInfo
        product={singleProduct}
        cart={products}
        setProductsInCart={setProductsInCartMock}
        setCart={setCartMock}
      />
    );

    const price = screen.queryByText(
      `${singleProduct.price * singleProduct.inCart} kr`
    );
    expect(price).toBeInTheDocument();
  });

  it('render the stock of the product', () => {
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

  it('adds more of the product when clicking the +button', () => {
    render(
      <CartProductInfo
        product={singleProduct}
        cart={products}
        setProductsInCart={setProductsInCartMock}
        setCart={setCartMock}
      />
    );

    const button = screen.getByRole('button', { name: '+' });
    userEvent.click(button);
    userEvent.click(button);
    expect(setProductsInCartMock).toHaveBeenCalledTimes(2);
  });

  it('decreases the amount of the product when clicking -button', () => {
    render(
      <CartProductInfo
        product={singleProduct}
        cart={products}
        setProductsInCart={setProductsInCartMock}
        setCart={setCartMock}
      />
    );

    const button = screen.getByRole('button', { name: '-' });
    userEvent.click(button);
    expect(setProductsInCartMock).toHaveBeenCalledTimes(1);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
