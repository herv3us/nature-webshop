import SearchForm from '../SearchForm';
import { render, screen } from '@testing-library/react';

const setSearchStringMock = jest.fn();

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

    const inputElem = screen.getByPlaceholderText(/search product/i);
    expect(inputElem).toBeInTheDocument();
  });
});
