import DeleteBtn from '../DeleteBtn';
import { render, screen, waitFor } from '@testing-library/react';
import { products, singleProduct } from '../../dummyData/products';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import { amountOfProductsInCartState } from '../../atoms/amountOfProductsInCartState';
import { RecoilObserver } from '../admin/tests/RecoilObserver';

const setCartMock = jest.fn();
const setProductsInCartMock = jest.fn();
const onChange = jest.fn();

describe('Test for DeleteBtn', () => {
  it('render without crashing', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <DeleteBtn
          product={singleProduct}
          cart={products}
          setCart={setCartMock}
          setProductsInCart={setProductsInCartMock}
        />
      </RecoilRoot>
    );
  });

  it('render a button with the text "X"', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <DeleteBtn
          product={singleProduct}
          cart={products}
          setCart={setCartMock}
          setProductsInCart={setProductsInCartMock}
        />
      </RecoilRoot>
    );

    const button = screen.getByRole('button', { name: 'X' });
    expect(button).toBeInTheDocument();
  });

  it('render calls the setCart funtion', async () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <DeleteBtn
          product={singleProduct}
          cart={products}
          setCart={setCartMock}
          setProductsInCart={setProductsInCartMock}
        />
      </RecoilRoot>
    );

    const button = screen.getByRole('button', { name: 'X' });
    userEvent.click(button);
    await waitFor(() => {
      expect(setCartMock).toBeCalledTimes(1);
    });
  });
});
