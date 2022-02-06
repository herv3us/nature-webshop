import ProductCard from '../ProductCard';
import { render, screen } from '@testing-library/react';
import { singleProduct } from '../../dummyData/products';

describe('Tests for ProductCard', () => {
  it('render without crashing', () => {
    render(<ProductCard product={singleProduct} />);
  });

  it('render the title for the product', () => {
    render(<ProductCard product={singleProduct} />);
    const title = screen.getByText(singleProduct.title);
    expect(title).toBeInTheDocument();
  });

  it('render the image for the product', () => {
    render(<ProductCard product={singleProduct} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
