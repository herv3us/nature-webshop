import CreateProduct from '../CreateProduct';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from '../../../services/localStorageService';
import { userAdmin } from '../../../dummyData/user';

const mockNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

jest.mock('../../../services/localStorageService', () => {
  return {
    getTokenFromLocalStorage: jest.fn() as jest.Mock,
    getUserFromLocalStorage: jest.fn() as jest.Mock,
  };
});

describe('Tests for CreateProduct', () => {
  it('render without crashing', () => {
    render(<CreateProduct />);
  });

  it('render inputfields to fill in for the new product', () => {
    render(<CreateProduct />);
    const inputElems = screen.queryAllByRole('textbox');
    expect(inputElems.length).toBeGreaterThan(0);
  });

  it('shows the value of the typed in text into the inputfield', () => {
    render(<CreateProduct />);
    const productNameInput = screen.getByPlaceholderText('Produktnamn');
    userEvent.type(productNameInput, 'Väska');
    expect(productNameInput).toHaveValue('Väska');
  });

  it('shows an error-text if the inputfiel is left empty', () => {
    render(<CreateProduct />);
    const productNameInput = screen.getByPlaceholderText('Produktnamn');
    const descriptionInput = screen.getByPlaceholderText(
      'Beskrivning av produkten'
    );
    userEvent.type(productNameInput, '{enter}');
    userEvent.type(descriptionInput, 'Hej{enter}');
    const errorText = screen.getByText('Du måste fylla i ett produktnamn');
    expect(errorText).toBeInTheDocument();
  });

  it('renders an sumbit button', () => {
    render(<CreateProduct />);
    const button = screen.getByRole('button', { name: /skapa produkt/i });
    expect(button).toBeInTheDocument();
  });

  it('does not redirect to startpage if you are not admin and have token', () => {
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(() => '');
    render(<CreateProduct />);
    const button = screen.getByRole('button', { name: /skapa produkt/i });
    userEvent.click(button);
    expect(mockNavigator).not.toHaveBeenCalledWith('/');
  });

  it('redirect to startpage if successfully create new product', async () => {
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );
    (getUserFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => userAdmin
    );
    render(<CreateProduct />);
    const button = screen.getByRole('button', { name: /skapa produkt/i });
    userEvent.click(button);

    await waitFor(() => {
      setTimeout(() => {
        expect(mockNavigator).toHaveBeenCalledWith('/');
      }, 3000);
    });
  });
});
