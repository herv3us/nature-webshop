import Header from '../Header';
import { render, screen } from '@testing-library/react';

describe('Tests for Header', () => {
  it('render without crashing', () => {
    render(
      <Header
        src={'/images/someVideo.mp4'}
        title={'string'}
        subtitle={'subtitle'}
      />
    );
  });

  it('render a video in the background', () => {
    render(
      <Header
        src={'/images/someVideo.mp4'}
        title={'string'}
        subtitle={'subtitle'}
      />
    );
    const video = screen.getByRole('video');
    expect(video).toBeInTheDocument();
  });

  it('render a heading', () => {
    render(
      <Header
        src={'/images/someVideo.mp4'}
        title={'WelcomeString'}
        subtitle={'subtitle'}
      />
    );
    const heading = screen.getByText(/WelcomeString/i);
    expect(heading).toBeInTheDocument();
  });

  it('render second heading', () => {
    render(
      <Header
        src={'/images/someVideo.mp4'}
        title={'string'}
        subtitle={'This is the subtitle'}
      />
    );
    const heading = screen.getByText(/this is the subtitle/i);
    expect(heading).toBeInTheDocument();
  });
});
