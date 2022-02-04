import ProductCard from '../ProductCard';
import { render } from '@testing-library/react';

describe('Tests for ProductCard', () => {
  it('render without crashing', () => {
    render(<ProductCard />);
  });
});
