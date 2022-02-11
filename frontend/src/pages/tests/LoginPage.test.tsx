import LoginPage from '../LoginPage';
import { render } from '@testing-library/react';

const mockNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

describe('Tests for LoginPage', () => {
  it('render without crashing', () => {
    render(<LoginPage />);
  });
});
