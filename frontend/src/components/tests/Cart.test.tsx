import Cart from '../Cart';
import { render, screen } from '@testing-library/react';

describe('Tests for Cart-component', () => {
  it('render without crashing', () => {
    render(<Cart />);
  });

  it('render a heading for the cart', () => {
    render(<Cart />);
    const heading = screen.getByText('Din Varukorg');
    expect(heading).toBeInTheDocument();
  });
});
