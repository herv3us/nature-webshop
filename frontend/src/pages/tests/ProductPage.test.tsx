import ProductPage from '../ProductPage';
import { render } from '@testing-library/react';

describe('Tests for ProductPage', () => {
  it('render witout crashing', () => {
    render(<ProductPage />);
  });
});
