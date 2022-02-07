import Button from '../Button';
import { render, screen } from '@testing-library/react';
import { singleProduct, cartProduct } from '../../dummyData/products';

const setUserCartMock = jest.fn();

describe('Tests for Button-component', () => {
  it('render without crashing', () => {
    render(
      <Button
        product={singleProduct}
        userCart={cartProduct}
        setUserCart={setUserCartMock}
      />
    );
  });
});
