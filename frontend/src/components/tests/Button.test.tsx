import Button from '../Button';
import { render, screen } from '@testing-library/react';
import {
  products,
  singleProduct,
  singleProductNoStock,
} from '../../dummyData/products';
import { userAdmin, user } from '../../dummyData/user';
import {
  getUserFromLocalStorage,
  getCartFromLocalStorage,
} from '../../services/localStorageService';
import { User } from '../../models/User';
import { Product } from '../../models/Product';
import { RecoilRoot } from 'recoil';
import { RecoilObserver } from '../admin/tests/RecoilObserver';
import { amountOfProductsInCartState } from '../../atoms/amountOfProductsInCartState';

jest.mock('../../services/localStorageService', () => {
  return {
    getUserFromLocalStorage: jest.fn(),
    getCartFromLocalStorage: jest.fn(),
  };
});

const mockNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

describe('Tests for Button-component', () => {
  const onChange = jest.fn();

  it('render without crashing', () => {
    <RecoilRoot>
      <RecoilObserver node={amountOfProductsInCartState} onChange={onChange} />
      <Button product={singleProduct} className={''} />
    </RecoilRoot>;
  });

  it('show "redigera" on the button if youre an admin', () => {
    (getUserFromLocalStorage as jest.Mock<User | null>).mockImplementation(
      () => userAdmin
    );
    (getCartFromLocalStorage as jest.Mock<Product[] | null>).mockImplementation(
      () => products
    );
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Button product={singleProduct} className={''} />
      </RecoilRoot>
    );

    const button = screen.getByRole('button', { name: /Redigera/i });
    expect(button).toBeInTheDocument();
  });

  it('show "köp" on the button when youre a customer', () => {
    (getUserFromLocalStorage as jest.Mock<User | null>).mockImplementation(
      () => user
    );
    (getCartFromLocalStorage as jest.Mock<Product[] | null>).mockImplementation(
      () => products
    );
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Button product={singleProduct} className={''} />
      </RecoilRoot>
    );

    const button = screen.getByRole('button', { name: /köp/i });
    expect(button).toBeInTheDocument();
  });

  it('show "slut" on the button when stock is as low as 0', () => {
    (getUserFromLocalStorage as jest.Mock<User | null>).mockImplementation(
      () => user
    );
    (getCartFromLocalStorage as jest.Mock<Product[] | null>).mockImplementation(
      () => products
    );
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Button product={singleProductNoStock} className={''} />
      </RecoilRoot>
    );

    const button = screen.getByRole('button', { name: /slut/i });
    expect(button).toBeInTheDocument();
  });
});
