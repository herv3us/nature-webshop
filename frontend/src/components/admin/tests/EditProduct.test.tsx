import EditProduct from '../EditProduct';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockNavigator = jest.fn();
const mockParams = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
  useParams: () => mockParams,
}));

describe('Tests for EditProduct', () => {
  it('render without crashing', () => {
    render(<EditProduct />);
  });

  it('render inputfields to fill in to be able to update the product', () => {
    render(<EditProduct />);
    const inputElems = screen.queryAllByRole('textbox');
    expect(inputElems.length).toBeGreaterThan(0);
  });

  it('shows the value of the typed in text into the inputfield', () => {
    render(<EditProduct />);
    const productNameInput = screen.getByPlaceholderText('Produktnamn');
    userEvent.type(productNameInput, 'Väska');
    expect(productNameInput).toHaveValue('Väska');
  });

  it('shows an error-text if the inputfiel is left empty', () => {
    render(<EditProduct />);
    const productNameInput = screen.getByPlaceholderText('Produktnamn');
    const descriptionInput = screen.getByPlaceholderText(
      'Beskrivning av produkten'
    );
    userEvent.type(productNameInput, '{enter}');
    userEvent.type(descriptionInput, 'Hej{enter}');
    const errorText = screen.getByText('Du måste fylla i ett produktnamn');
    expect(errorText).toBeInTheDocument();
  });
});
