import StartPage from '../StartPage';
import { render } from '@testing-library/react';
import { products } from '../../dummyData/products';

const setProductsMock = jest.fn();
const searchMock = jest.fn();

describe('Tests for StartPage', () => {
  it('render without crashing', () => {
    render(
      <StartPage
        src={'/someVideo.mp4'}
        products={products}
        setProducts={setProductsMock}
        search={searchMock}
      />
    );
  });
});
