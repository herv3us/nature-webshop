import CreateProduct from '../CreateProduct';
import { render, screen } from '@testing-library/react';

describe('Tests for CreateProduct', () => {
  it('render without crashing', () => {
    render(<CreateProduct />);
  });

  it('render inputfields to fill in for the new product', () => {
    render(<CreateProduct />);

    const inputElems = screen.queryAllByRole('textbox');
    expect(inputElems.length).toBeGreaterThan(0);
  });
});
