import StartPage from '../StartPage';
import { render } from '@testing-library/react';
import { products } from '../../dummyData/products';

const setProductsMock = jest.fn();

describe('Tests for StartPage', () => {
  it('render without crashing', () => {
    render(<StartPage src={'/someVideo.mp4'} />);
  });
});
