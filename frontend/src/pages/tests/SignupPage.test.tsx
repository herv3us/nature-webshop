import SignUpPate from '../SignUpPate';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Test for signupPage', () => {
  it('render without crashing', () => {
    render(<SignUpPate />);
  });

  it('render several input fields to fill in information the store needs', () => {
    render(<SignUpPate />);
    const inputElems = screen.queryAllByRole('textbox');
    expect(inputElems.length).toBeGreaterThanOrEqual(6);
  });

  it('render a heart if you fill in the field for username', () => {
    render(<SignUpPate />);
    const usernameInput = screen.getByPlaceholderText('Användarnamn');
    const passwordInput = screen.getByPlaceholderText('Lösenord');
    userEvent.type(usernameInput, 'Emma{enter}');
    userEvent.click(passwordInput);
    const heart = screen.queryByText('💚');
    expect(heart).toBeInTheDocument();
  });

  it('render a flag if you dont fill in the inputfield for username or have a to short username', () => {
    render(<SignUpPate />);
    const usernameInput = screen.getByPlaceholderText('Användarnamn');
    const passwordInput = screen.getByPlaceholderText('Lösenord');
    userEvent.click(usernameInput);
    userEvent.click(passwordInput);
    const heart = screen.queryByText('🚩');
    expect(heart).toBeInTheDocument();
  });

  it('render a submit button for the signupPage', () => {
    render(<SignUpPate />);
    const button = screen.getByRole('button', { name: 'Sign up' });
    expect(button).toBeInTheDocument();
  });

  it('reload the page if subbmitting', async () => {
    render(<SignUpPate />);
    const button = screen.getByRole('button', { name: 'Sign up' });
    userEvent.click(button);

    await waitFor(() => {
      setTimeout(() => {
        expect(window.location.reload()).toHaveBeenCalled();
      }, 400);
    });
  });
});
