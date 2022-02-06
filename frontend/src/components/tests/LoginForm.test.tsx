import LoginForm from '../LoginForm';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  saveUserInLocalStorage,
  saveTokenInLocalStorage,
} from '../../services/localStorageService';
import { wait } from '@testing-library/user-event/dist/utils';

let successfulFetchResponse = {
  success: true,
  token: 'token',
  user: {
    id: 1,
    username: 'username',
    firstName: 'First Name',
    lastName: 'Last name',
    address: 'Some address',
    zipCode: 232,
    city: 'Somewhere',
  },
};

let unsuccessfulFetchResponse = {
  success: false,
  error: 'Error message',
};

jest.mock('../../services/localStorageService', () => {
  return {
    saveUserInLocalStorage: jest.fn(),
    saveTokenInLocalStorage: jest.fn(),
  };
});

describe('Tests for LoginForm component', () => {
  it('render without crashing', () => {
    render(<LoginForm />);
  });

  it('render the title Login', () => {
    render(<LoginForm />);
    const title = screen.getByRole('heading', { name: 'Login' });
    expect(title).toBeInTheDocument();
  });

  it('render labels for inputfields', () => {
    render(<LoginForm />);
    const labelUsername = screen.getByText(/username/i);
    expect(labelUsername).toBeInTheDocument();

    const labelPassword = screen.getByText(/password/i);
    expect(labelPassword).toBeInTheDocument();
  });

  it('render an inputfiels', () => {
    render(<LoginForm />);
    const inputUsername = screen.getByPlaceholderText('Username');
    expect(inputUsername).toBeInTheDocument();
    const inputPass = screen.getByPlaceholderText('Password');
    expect(inputPass).toBeInTheDocument();
  });

  it('render a submit-button for the form', () => {
    render(<LoginForm />);
    const submit = screen.getByRole('button', { name: 'Login' });
    expect(submit).toBeInTheDocument();
  });

  it('render the value your typed into the inputfield in the input', () => {
    render(<LoginForm />);
    const input = screen.getByPlaceholderText('Username');
    userEvent.type(input, 'KlaraBella');
    expect(input).toHaveValue('KlaraBella');
  });

  it('empties the inputfields when submitting the form', () => {
    render(<LoginForm />);
    const input = screen.getByPlaceholderText('Username');
    const inputpass = screen.getByPlaceholderText('Password');
    userEvent.type(input, 'KlaraBella');
    userEvent.type(inputpass, 'password');
    const button = screen.getByRole('button', { name: /Login/i });
    userEvent.click(button);
    expect(input).toHaveValue('');
  });

  describe('if login is successful', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(successfulFetchResponse),
        })
      ) as jest.Mock<any>;
    });

    it('saves the user in localstorage', async () => {
      render(<LoginForm />);
      const usernameInput = screen.getByPlaceholderText(/username/i);
      const passwordInput = screen.getByPlaceholderText(/password/i);
      const submitBtn = screen.getByRole('button', { name: 'Login' });

      userEvent.type(usernameInput, 'Klasse');
      userEvent.type(passwordInput, 'password');
      userEvent.click(submitBtn);

      await waitFor(() => {
        expect(saveTokenInLocalStorage).toHaveBeenCalledWith(
          successfulFetchResponse.token
        );
      });

      await waitFor(() => {
        expect(saveUserInLocalStorage).toHaveBeenCalledWith(
          successfulFetchResponse.user
        );
      });
    });

    afterAll(() => {
      jest.clearAllMocks();
    });
  });

  describe('if login is not sccuessful', () => {
    it('does not save token and user to localstorage', async () => {
      render(<LoginForm />);

      const usernameInput = screen.getByPlaceholderText(/username/i);
      const passwordInput = screen.getByPlaceholderText(/password/i);
      const submitBtn = screen.getByRole('button', { name: 'Login' });

      userEvent.type(usernameInput, 'Klasse');
      userEvent.type(passwordInput, 'password');
      userEvent.click(submitBtn);

      await waitFor(() => {
        expect(saveTokenInLocalStorage).not.toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(saveUserInLocalStorage).not.toHaveBeenCalled();
      });
    });
  });
});
