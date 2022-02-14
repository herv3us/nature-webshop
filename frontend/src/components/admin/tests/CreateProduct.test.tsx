import CreateProduct from '../CreateProduct';
import { render, screen } from '@testing-library/react';

describe('Tests for CreateProduct', () => {
  it('render without crashing', () => {
    render(<CreateProduct />);
  });
});
