import ProductCardMini from '../ProductCardMini';
import { render, screen } from '@testing-library/react';
import { singleProduct } from './../../dummyData/products';

describe('Tests for ProductCardMini', () => {
  it('it render without crashing', () => {
    render(<ProductCardMini product={singleProduct} />);
  });

  it('it render the title of the product', () => {
    render(<ProductCardMini product={singleProduct} />);
    const title = screen.getByText(singleProduct.title);
    expect(title).toBeInTheDocument();
  });

  it('render the image for the product', () => {
    render(<ProductCardMini product={singleProduct} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
