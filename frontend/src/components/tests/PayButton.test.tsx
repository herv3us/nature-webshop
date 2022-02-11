import { render, screen } from '@testing-library/react';
import PayButton from '../PayButton';

const setIsOpenMock = jest.fn();
const setProducsInCartMock = jest.fn();

describe('Tests for PayButton', () => {
  it('render without crashing', () => {
    render(
      <PayButton
        setIsOpen={setIsOpenMock}
        setProductsInCart={setProducsInCartMock}
      />
    );
  });

  it('display a button with Betala on it', () => {
    render(
      <PayButton
        setIsOpen={setIsOpenMock}
        setProductsInCart={setProducsInCartMock}
      />
    );

    const button = screen.getByRole('button', { name: 'Betala' });
    expect(button).toBeInTheDocument();
  });
});
