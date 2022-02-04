import LoginPage from '../LoginPage';
import { render } from '@testing-library/react';

describe('Tests for LoginPage', () => {
  it('render without crashing', () => {
    render(<LoginPage />);
  });
});
