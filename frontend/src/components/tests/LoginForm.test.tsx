import LoginForm from '../LoginForm';
import { render, screen } from '@testing-library/react';
import { toUnicode } from 'punycode';

describe('Tests for LoginForm', () => {
  it('render without crashing', () => {
    render(<LoginForm />);
  });

  it('render the title Login', () => {
    render(<LoginForm />);
    const title = screen.getByText(/login/i);
    expect(title).toBeInTheDocument();
  });

  it('render hte label username', () => {
    render(<LoginForm />);
    const labelUsername = screen.getByText(/username/i);
    expect(labelUsername).toBeInTheDocument();

    const labelPassword = screen.getByText(/password/i);
    expect(labelPassword).toBeInTheDocument();
  });

  //   it('render an inputfield for the username');
});
