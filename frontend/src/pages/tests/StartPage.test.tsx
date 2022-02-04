import StartPage from '../StartPage';
import { render } from '@testing-library/react';

describe('Tests for StartPage', () => {
  it('render without crashing', () => {
    render(<StartPage />);
  });
});
