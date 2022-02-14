import CreateProduct from '../CreateProduct';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
});
