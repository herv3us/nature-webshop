import Navbar from '../Navbar';
import { render, screen } from '@testing-library/react';

const mockNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

describe('Tests for Navbar', () => {
  it('render without crashing', () => {
    render(<Navbar />);
  });

  it('render a logo', () => {
    render(<Navbar />);
    const logo = screen.getByText('⛺');
    expect(logo).toBeInTheDocument();
  });

  it('render the link for login', () => {
    render(<Navbar />);
    const login = screen.getByText(/Login/i);
    expect(login).toBeInTheDocument();
  });

  it('render the link for the cart', () => {
    render(<Navbar />);
    const login = screen.getByText(/🛒/i);
    expect(login).toBeInTheDocument();
  });
});
