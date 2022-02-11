import Button from '../Button';
import { render, screen } from '@testing-library/react';
import { singleProduct, singleProductNoStock } from '../../dummyData/products';
import { userAdmin, user } from '../../dummyData/user';
import { getUserFromLocalStorage } from '../../services/localStorageService';
import { User } from '../../models/User';

jest.mock('../../services/localStorageService', () => {
  return {
    getUserFromLocalStorage: jest.fn(),
  };
});

describe('Tests for Button-component', () => {
  it('render without crashing', () => {
    render(<Button product={singleProduct} className={''} />);
  });

  it('show "redigera" on the button if youre an admin', () => {
    (getUserFromLocalStorage as jest.Mock<User | null>).mockImplementation(
      () => userAdmin
    );
    render(<Button product={singleProduct} className={''} />);

    const button = screen.getByRole('button', { name: /Redigera/i });
    expect(button).toBeInTheDocument();
  });

  it('show "köp" on the button when youre a customer', () => {
    (getUserFromLocalStorage as jest.Mock<User | null>).mockImplementation(
      () => user
    );
    render(<Button product={singleProduct} className={''} />);

    const button = screen.getByRole('button', { name: /köp/i });
    expect(button).toBeInTheDocument();
  });

  it('show "slut" on the button when stock is as low as 0', () => {
    (getUserFromLocalStorage as jest.Mock<User | null>).mockImplementation(
      () => user
    );
    render(<Button product={singleProductNoStock} className={''} />);

    const button = screen.getByRole('button', { name: /slut/i });
    expect(button).toBeInTheDocument();
  });
});
