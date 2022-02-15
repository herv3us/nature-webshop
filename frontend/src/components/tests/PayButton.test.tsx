import { render, screen } from '@testing-library/react';
import PayButton from '../PayButton';
import { RecoilRoot } from 'recoil';
import { RecoilObserver } from '../admin/tests/RecoilObserver';
import { amountOfProductsInCartState } from '../../atoms/amountOfProductsInCartState';

const setIsOpenMock = jest.fn();
const setProducsInCartMock = jest.fn();

const onChange = jest.fn();

describe('Tests for PayButton', () => {
  it('render without crashing', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <PayButton
          setIsOpen={setIsOpenMock}
          setProductsInCart={setProducsInCartMock}
        />
      </RecoilRoot>
    );
  });

  it('display a button with Betala on it', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <PayButton
          setIsOpen={setIsOpenMock}
          setProductsInCart={setProducsInCartMock}
        />
      </RecoilRoot>
    );

    const button = screen.getByRole('button', { name: 'Betala' });
    expect(button).toBeInTheDocument();
  });
});
