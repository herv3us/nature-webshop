import Header from '../Header';
import { render, screen } from '@testing-library/react';
import StartPage from '../../pages/StartPage';

describe('Tests for Header', () => {
  it('render without crashing', () => {
    render(<Header />);
  });

  it('render a video in the background', () => {
    render(<StartPage />);
    const video = screen.getByRole('video');
    expect(video).toBeInTheDocument();
  });

  it('render a welcome-heading', () => {
    render(<Header />);
    const heading = screen.getByText(/Welcome to Nature/i);
    expect(heading).toBeInTheDocument();
  });

  it('render second heading', () => {
    render(<StartPage />);
    const heading = screen.getByText(/your adventure starts here/i);
    expect(heading).toBeInTheDocument();
  });
});
