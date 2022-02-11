import DeleteBtn from '../DeleteBtn';
import { render, screen } from '@testing-library/react';
import { products, singleProduct } from '../../dummyData/products';

const setCartMock = jest.fn();
const setProductsInCartMock = jest.fn();

describe('Test for DeleteBtn', () => {
  it('render without crashing', () => {
    render(
      <DeleteBtn
        product={singleProduct}
        cart={products}
        setCart={setCartMock}
        setProductsInCart={setProductsInCartMock}
      />
    );
  });

  it('render a button with the text "X"', () => {
    render(
      <DeleteBtn
        product={singleProduct}
        cart={products}
        setCart={setCartMock}
        setProductsInCart={setProductsInCartMock}
      />
    );

    const button = screen.getByRole('button', { name: 'X' });
    expect(button).toBeInTheDocument();
  });
});
