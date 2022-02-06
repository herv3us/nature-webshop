import UserInformation from '../UserInformation';
import { render, screen } from '@testing-library/react';
import { getUserFromLocalStorage } from '../../services/localStorageService';
import { user } from '../../dummyData/user';

jest.mock('../../services/localStorageService', () => {
  return {
    getUserFromLocalStorage: jest.fn(),
  };
});

describe('Tests for UserInfo', () => {
  beforeEach(() => {
    (getUserFromLocalStorage as jest.Mock).mockReturnValue(user);
  });

  it('render without crashing', () => {
    render(<UserInformation />);
  });

  it('render an information text', () => {
    render(<UserInformation />);
    const text = screen.getByText(/Denna information har vi sparat/i);
    expect(text).toBeInTheDocument();
  });

  it('displays the name and surname of the user', () => {
    render(<UserInformation />);
    const text = screen.getByText(`Namn: ${user.firstName} ${user.lastName}`);
    expect(text).toBeInTheDocument();
  });

  it('displays the full address for the user', () => {
    render(<UserInformation />);
    const address = screen.getByText(`Adress: ${user.address}`);
    const zipCode = screen.getByText(`Postkod: ${user.zipCode}`);
    const city = screen.getByText(`Stad: ${user.city}`);

    expect(address).toBeInTheDocument();
    expect(zipCode).toBeInTheDocument();
    expect(city).toBeInTheDocument();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
