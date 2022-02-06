import UserInformation from '../UserInformation';
import { render, screen } from '@testing-library/react';

describe('Tests for UserInfo', () => {
  it('render without crashing', () => {
    render(<UserInformation />);
  });
});
