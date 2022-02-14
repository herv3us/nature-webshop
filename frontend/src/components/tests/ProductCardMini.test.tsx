import ProductCardMini from '../ProductCardMini';
import { render, screen } from '@testing-library/react';
import { products, singleProduct } from './../../dummyData/products';
import {
  getUserFromLocalStorage,
  getTokenFromLocalStorage,
  getCartFromLocalStorage,
} from '../../services/localStorageService';
import { user, userAdmin } from '../../dummyData/user';
import { RecoilRoot } from 'recoil';
import { amountOfProductsInCartState } from '../../atoms/amountOfProductsInCartState';
import { RecoilObserver } from '../admin/tests/RecoilObserver';

jest.mock('../../services/localStorageService', () => {
  return {
    getUserFromLocalStorage: jest.fn() as jest.Mock,
    getTokenFromLocalStorage: jest.fn() as jest.Mock,
    getCartFromLocalStorage: jest.fn() as jest.Mock,
  };
});

const mockNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

const onChange = jest.fn();

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

    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <ProductCardMini product={singleProduct} />
      </RecoilRoot>
    );

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

    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <ProductCardMini product={singleProduct} />
      </RecoilRoot>
    );
    const button = screen.getByRole('button', { name: 'Redigera' });
    expect(button).toBeInTheDocument();
  });
});
