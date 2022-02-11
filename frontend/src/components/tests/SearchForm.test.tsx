import SearchForm from '../SearchForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { search } from '../../utils/search';
import { getAllProducts } from '../../services/productService';
import { products } from '../../dummyData/products';

const setSearchStringMock = jest.fn();
const searchStringMock = 'backpack';

jest.mock('../../utils/search', () => {
  return {
    search: jest.fn() as jest.Mock,
  };
});

jest.mock('../../services/productService', () => {
  return {
    getAllProducts: jest.fn() as jest.Mock,
  };
});

describe('Tests for SearchForm', () => {
  it('render without crashing', () => {
    render(
      <SearchForm
        searchString={'väska'}
        setSearchString={setSearchStringMock}
      />
    );
  });

  it('render an inputfield', () => {
    render(
      <SearchForm
        searchString={'väska'}
        setSearchString={setSearchStringMock}
      />
    );

    const inputElem = screen.getByPlaceholderText(/sök/i);
    expect(inputElem).toBeInTheDocument();
  });

  it('search for backpacks when typing backpack in inputfiled', () => {
    (search as jest.Mock<any>).mockImplementation(() => 'backpack');
    (getAllProducts as jest.Mock<any>).mockImplementation(() => products);

    render(
      <SearchForm
        searchString={searchStringMock}
        setSearchString={setSearchStringMock}
      />
    );

    const inputElem = screen.getByPlaceholderText(/sök/i);
    userEvent.type(inputElem, 'backpack');

    expect(setSearchStringMock).toHaveBeenCalledTimes(8);
  });
});
