import Navbar from '../Navbar';
import { render, screen } from '@testing-library/react';
import { products } from '../../dummyData/products';

const mockNavigator = jest.fn();
const setProductsMock = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

describe('Tests for Navbar', () => {
  it('render without crashing', () => {
    render(<Navbar products={products} setProducts={setProductsMock} />);
  });

  it('render a logo', () => {
    render(<Navbar products={products} setProducts={setProductsMock} />);
    const logo = screen.getByText('⛺');
    expect(logo).toBeInTheDocument();
  });

  it('render the link for login', () => {
    render(<Navbar products={products} setProducts={setProductsMock} />);
    const login = screen.getByText(/Login/i);
    expect(login).toBeInTheDocument();
  });

  it('render the link for the cart', () => {
    render(<Navbar products={products} setProducts={setProductsMock} />);
    const login = screen.getByText(/🛒/i);
    expect(login).toBeInTheDocument();
  });
});
