import Navbar from '../Navbar';
import { render, screen, waitFor } from '@testing-library/react';
import { getTokenFromLocalStorage } from '../../services/localStorageService';
import { amountOfProductsInCartState } from '../../atoms/amountOfProductsInCartState';
import { RecoilObserver } from '../admin/tests/RecoilObserver';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';

const mockNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

jest.mock('../../services/localStorageService', () => {
  return {
    getTokenFromLocalStorage: jest.fn() as jest.Mock,
  };
});

describe('Tests for Navbar', () => {
  const onChange = jest.fn();

  it('render without crashing', () => {
    <RecoilRoot>
      <RecoilObserver node={amountOfProductsInCartState} onChange={onChange} />
      <Navbar />
    </RecoilRoot>;
  });

  it('render the link for the jacket-page', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );

    const jacketlink = screen.getByText(/jackor/i);
    expect(jacketlink).toBeInTheDocument();
  });

  it('render the link for the backpack-page', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );
    const backpacklink = screen.getByText(/Ryggsäckar/i);
    expect(backpacklink).toBeInTheDocument();
  });

  it('render the link for the shoes-page', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );
    const shoelink = screen.getByText(/skor/i);
    expect(shoelink).toBeInTheDocument();
  });

  it('render the link for Login', () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );
    const login = screen.getByText(/Logga in/i);
    expect(login).toBeInTheDocument();
  });

  it('navigate to jacketpage when clicking the link', async () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );
    const jackets = screen.getByText(/Jackor/i);
    userEvent.click(jackets);

    await waitFor(() => {
      expect(mockNavigator).toHaveBeenCalledWith('/jacket');
    });
  });

  it('navigate to backpackPage when clicking the link', async () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );
    const backpack = screen.getByText(/Ryggsäckar/i);
    userEvent.click(backpack);

    await waitFor(() => {
      expect(mockNavigator).toHaveBeenCalledWith('/backpack');
    });
  });

  it('navigate to shoesPage when clicking the link', async () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );
    const shoes = screen.getByText(/Skor/i);
    userEvent.click(shoes);

    await waitFor(() => {
      expect(mockNavigator).toHaveBeenCalledWith('/shoes');
    });
  });

  it('navigate to "LoginPage" when clicking the Login-link', async () => {
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );
    const myPage = screen.getByText(/Logga in/i);
    userEvent.click(myPage);

    await waitFor(() => {
      expect(mockNavigator).toHaveBeenCalledWith('/mypage');
    });
  });

  it('render the link for MyPage if logged in', () => {
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );
    const login = screen.getByText(/Mina sidor/i);
    expect(login).toBeInTheDocument();
  });

  it('navigate to "MyPage" when clicking the MyPage-link', async () => {
    (getTokenFromLocalStorage as jest.Mock<any>).mockImplementation(
      () => 'token'
    );
    render(
      <RecoilRoot>
        <RecoilObserver
          node={amountOfProductsInCartState}
          onChange={onChange}
        />
        <Navbar />
      </RecoilRoot>
    );
    const myPage = screen.getByText(/Mina sidor/i);
    userEvent.click(myPage);

    await waitFor(() => {
      expect(mockNavigator).toHaveBeenCalledWith('/mypage');
    });
  });
});
