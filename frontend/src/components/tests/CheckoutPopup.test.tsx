import CheckoutPopup from '../CheckoutPopup';
import { render, screen } from '@testing-library/react';

const setCartMock = jest.fn();
const setProductsInCartMock = jest.fn();

describe('Tests for CheckoutPopup', () => {
  it('render without crashing', () => {
    render(
      <CheckoutPopup
        setIsOpen={setCartMock}
        setProductsInCart={setProductsInCartMock}
      />
    );
  });

  it('render a thank you-text', () => {
    render(
      <CheckoutPopup
        setIsOpen={setCartMock}
        setProductsInCart={setProductsInCartMock}
      />
    );

    const text = screen.getByText(/tack för ditt köp/i);
    expect(text).toBeInTheDocument();
  });
});
