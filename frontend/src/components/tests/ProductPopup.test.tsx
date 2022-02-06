import ProductPopup from '../ProductPopup';
import { render, screen } from '@testing-library/react';
import {
  singleProduct,
  singleProducthighStock,
} from '../../dummyData/products';

const setIsOpenMock = jest.fn();

describe('Test for ProductPopup', () => {
  it('render without crashing', () => {
    render(<ProductPopup product={singleProduct} setIsOpen={setIsOpenMock} />);
  });

  it('render the image for the product', () => {
    render(<ProductPopup product={singleProduct} setIsOpen={setIsOpenMock} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('render the title for the product', () => {
    render(<ProductPopup product={singleProduct} setIsOpen={setIsOpenMock} />);
    const title = screen.getByText(singleProduct.title);
    expect(title).toBeInTheDocument();
  });

  it('render an close-button', () => {
    render(<ProductPopup product={singleProduct} setIsOpen={setIsOpenMock} />);
    const button = screen.getByRole('button', { name: /x/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the description for the product', () => {
    render(<ProductPopup product={singleProduct} setIsOpen={setIsOpenMock} />);
    const description = screen.getByText(singleProduct.description);
    expect(description).toBeInTheDocument();
  });

  it('render the amount left of the product', () => {
    render(<ProductPopup product={singleProduct} setIsOpen={setIsOpenMock} />);
    const stock = screen.getByText(singleProduct.stock + ' st');
    expect(stock).toBeInTheDocument();
  });

  it('render a low stock-text, if low in stock', () => {
    render(<ProductPopup product={singleProduct} setIsOpen={setIsOpenMock} />);
    const lowStock = screen.getByText(/endast ett fåtal kvar i lager/i);
    expect(lowStock).toBeInTheDocument();
  });

  it('does not render the extra stock-text if stock is high', () => {
    render(
      <ProductPopup
        product={singleProducthighStock}
        setIsOpen={setIsOpenMock}
      />
    );
    const highStock = screen.queryByText(/endast ett fåtal kvar i lager/i);
    expect(highStock).not.toBeInTheDocument();
  });

  it('render the price of the product', () => {
    render(<ProductPopup product={singleProduct} setIsOpen={setIsOpenMock} />);
    const price = screen.getByText(`Pris: ${singleProduct.price}`);
    expect(price).toBeInTheDocument();
  });
});
