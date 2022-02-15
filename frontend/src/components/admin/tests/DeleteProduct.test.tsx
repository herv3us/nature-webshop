import DeleteProduct from '../DeleteProduct';
import { render, screen } from '@testing-library/react';

const mockNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

describe('Tests for Delete Product', () => {
  it('render without crashing', () => {
    render(<DeleteProduct id={'2143872649283'} />);
  });

  it('render a button for the delete-function', () => {
    render(<DeleteProduct id={'2143872649283'} />);
    const button = screen.getByRole('button', { name: 'Radera produkt' });
    expect(button).toBeInTheDocument();
  });
});
