import SearchForm from '../SearchForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const setSearchStringMock = jest.fn();
const searchStringMock = 'backpack';

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

  it('start searching for backpacks when typing back in inputfiled..', () => {
    render(
      <SearchForm
        searchString={searchStringMock}
        setSearchString={setSearchStringMock}
      />
    );

    const inputElem = screen.getByPlaceholderText(/sök/i);
    userEvent.type(inputElem, 'back');

    expect(setSearchStringMock).toHaveBeenCalledTimes(4);
  });
});
