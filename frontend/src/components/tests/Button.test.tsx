import Button from '../Button';
import { render, screen } from '@testing-library/react';
import { singleProduct } from '../../dummyData/products';

describe('Tests for Button-component', () => {
  it('render without crashing', () => {
    render(<Button product={singleProduct} />);
  });
});
