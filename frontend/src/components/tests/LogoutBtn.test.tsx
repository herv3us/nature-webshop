import LogoutBtn from '../LogoutBtn';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigator,
}));

describe('Tests for LogutBtn', () => {
  it('render without crashing', () => {
    render(<LogoutBtn />);
  });

  it('navigates you to the startpage when clicking logout-btn', async () => {
    render(<LogoutBtn />);
    const btn = screen.getByRole('button', { name: /logga ut/i });
    userEvent.click(btn);

    await waitFor(() => {
      expect(mockNavigator).toHaveBeenCalledWith('/');
    });
  });
});
