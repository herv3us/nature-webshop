import CartProductInfo from '../CartProductInfo';
import { render, screen } from '@testing-library/react';
import {
  getTokenFromLocalStorage,
  getCartFromLocalStorage,
} from '../../services/localStorageService';
import { products, singleProduct } from '../../dummyData/products';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import { RecoilObserver } from '../admin/tests/RecoilObserver';
import { amountOfProductsInCartState } from '../../atoms/amountOfProductsInCartState';

const setProductsInCartMock = jest.fn();
const setCartMock = jest.fn();
const onChange = jest.fn();

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
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <CartProductInfo
          product={singleProduct}
          cart={products}
          setProductsInCart={setProductsInCartMock}
          setCart={setCartMock}
        />
      </RecoilRoot>
    );
  });

  it('render product-title', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <CartProductInfo
          product={singleProduct}
          cart={products}
          setProductsInCart={setProductsInCartMock}
          setCart={setCartMock}
        />
      </RecoilRoot>
    );

    const title = screen.getByText(singleProduct.title);
    expect(title).toBeInTheDocument();
  });

  it('render the price of the product', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <CartProductInfo
          product={singleProduct}
          cart={products}
          setProductsInCart={setProductsInCartMock}
          setCart={setCartMock}
        />
      </RecoilRoot>
    );

    const price = screen.queryByText(
      `${singleProduct.price * singleProduct.inCart} kr`
    );
    expect(price).toBeInTheDocument();
  });

  it('render the stock of the product', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <CartProductInfo
          product={singleProduct}
          cart={products}
          setProductsInCart={setProductsInCartMock}
          setCart={setCartMock}
        />
      </RecoilRoot>
    );

    const stock = screen.queryByText(`Kvar i lager: ${singleProduct.stock}`);
    expect(stock).toBeInTheDocument();
  });

  it('adds more of the product when clicking the +button', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <CartProductInfo
          product={singleProduct}
          cart={products}
          setProductsInCart={setProductsInCartMock}
          setCart={setCartMock}
        />
      </RecoilRoot>
    );

    const button = screen.getByRole('button', { name: '+' });
    userEvent.click(button);
    userEvent.click(button);
    expect(setProductsInCartMock).toHaveBeenCalledTimes(2);
  });

  it('decreases the amount of the product when clicking -button', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <CartProductInfo
          product={singleProduct}
          cart={products}
          setProductsInCart={setProductsInCartMock}
          setCart={setCartMock}
        />
      </RecoilRoot>
    );

    const button = screen.getByRole('button', { name: '-' });
    userEvent.click(button);
    expect(setProductsInCartMock).toHaveBeenCalledTimes(1);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
