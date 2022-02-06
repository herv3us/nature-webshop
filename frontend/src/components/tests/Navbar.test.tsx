import Navbar from '../Navbar';
import { render, screen } from '@testing-library/react';

const mockNavigator = jest.fn();
const setSearchStringMock = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

describe('Tests for Navbar', () => {
  it('render without crashing', () => {
    render(
      <Navbar searchString={'Ryggsäck'} setSearchString={setSearchStringMock} />
    );
  });

  it('render a logo', () => {
    render(
      <Navbar searchString={'Ryggsäck'} setSearchString={setSearchStringMock} />
    );
    const logo = screen.getByText('⛺');
    expect(logo).toBeInTheDocument();
  });

  it('render the link for "My pages"', () => {
    render(
      <Navbar searchString={'Ryggsäck'} setSearchString={setSearchStringMock} />
    );
    const login = screen.getByText(/Mina sidor/i);
    expect(login).toBeInTheDocument();
  });

  it('render the link for the cart', () => {
    render(
      <Navbar searchString={'Ryggsäck'} setSearchString={setSearchStringMock} />
    );
    const cart = screen.getByText(/🛒/i);
    expect(cart).toBeInTheDocument();
  });

  it('render the link for the jacket-page', () => {
    render(
      <Navbar searchString={'Ryggsäck'} setSearchString={setSearchStringMock} />
    );
    const jacketlink = screen.getByText(/jackor/i);
    expect(jacketlink).toBeInTheDocument();
  });

  it('render the link for the backpack-page', () => {
    render(
      <Navbar searchString={'Ryggsäck'} setSearchString={setSearchStringMock} />
    );
    const backpacklink = screen.getByText(/Ryggsäckar/i);
    expect(backpacklink).toBeInTheDocument();
  });

  it('render the link for the shoes-page', () => {
    render(
      <Navbar searchString={'Ryggsäck'} setSearchString={setSearchStringMock} />
    );
    const shoelink = screen.getByText(/skor/i);
    expect(shoelink).toBeInTheDocument();
  });
});
