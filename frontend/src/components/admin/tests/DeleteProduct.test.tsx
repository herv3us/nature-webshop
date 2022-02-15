import DeleteProduct from '../DeleteProduct';
import { render, screen, waitFor } from '@testing-library/react';
import { deleteProduct } from '../../../services/productService';
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from '../../../services/localStorageService';
import userEvent from '@testing-library/user-event';
import { userAdmin } from '../../../dummyData/user';

const mockNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

jest.mock('../../../services/productService', () => {
  return {
    deleteProduct: jest.fn(),
  };
});

jest.mock('../../../services/localStorageService', () => {
  return {
    getTokenFromLocalStorage: jest.fn() as jest.Mock,
    getUserFromLocalStorage: jest.fn() as jest.Mock,
  };
});

let success = {
  success: true,
  message: 'deleted',
};

describe('Tests for Delete Product', () => {
  it('render without crashing', () => {
    render(<DeleteProduct id={'2143872649283'} />);
  });

  it('render a button for the delete-function', () => {
    render(<DeleteProduct id={'2143872649283'} />);
    const button = screen.getByRole('button', { name: 'Radera produkt' });
    expect(button).toBeInTheDocument();
  });

  it('calls deleteProduct when clicking delete-button', () => {
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );
    (getUserFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => userAdmin
    );
    (deleteProduct as jest.Mock<any>).mockImplementation(() => success);
    render(<DeleteProduct id={'dsef4'} />);
    const button = screen.getByRole('button', { name: 'Radera produkt' });
    userEvent.click(button);
    expect(deleteProduct).toHaveBeenCalledTimes(1);
  });

  it('redirect to startpage when clicking delete-button', async () => {
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );
    (deleteProduct as jest.Mock<any>).mockImplementation(() => success);

    (getUserFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => userAdmin
    );
    render(<DeleteProduct id={'dsef4'} />);
    const button = screen.getByRole('button', { name: 'Radera produkt' });
    userEvent.click(button);

    await waitFor(() => {
      expect(mockNavigator).toHaveBeenCalledWith('/');
    });
  });
});
