import ProductCardMini from '../ProductCardMini';
import { render, screen } from '@testing-library/react';
import { singleProduct } from './../../dummyData/products';
import {
  getUserFromLocalStorage,
  getTokenFromLocalStorage,
} from '../../services/localStorageService';
import { user, userAdmin } from '../../dummyData/user';

jest.mock('../../services/localStorageService', () => {
  return {
    getUserFromLocalStorage: jest.fn() as jest.Mock,
    getTokenFromLocalStorage: jest.fn() as jest.Mock,
  };
});

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

  it('render the price of the product', () => {
    render(<ProductCardMini product={singleProduct} />);
    const price = screen.getByText(`${singleProduct.price} kr`);
    expect(price).toBeInTheDocument();
  });

  it('does not render a button if not logged in', () => {
    render(<ProductCardMini product={singleProduct} />);
    const button = screen.queryByRole('button', { name: 'Köp' });
    expect(button).not.toBeInTheDocument();
  });

  it('render a buy-button if logged in', () => {
    (getUserFromLocalStorage as jest.Mock<any>).mockImplementation(() => user);
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );

    render(<ProductCardMini product={singleProduct} />);
    const button = screen.getByRole('button', { name: 'Köp' });
    expect(button).toBeInTheDocument();
  });

  it('render a edit-button if logged in as admin', () => {
    (getUserFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => userAdmin
    );
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );

    render(<ProductCardMini product={singleProduct} />);
    const button = screen.getByRole('button', { name: 'Redigera' });
    expect(button).toBeInTheDocument();
  });
});
