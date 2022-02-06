import styled from 'styled-components';

interface Props {
  searchString: string;
  setSearchString: Function;
}
function SearchForm(props: Props) {
  const { searchString, setSearchString } = props;

  return (
    <StyledSearch
      type="search"
      placeholder="Sök"
      value={searchString}
      onChange={(e) => setSearchString(e.target.value)}
    />
  );
}

export default SearchForm;

const StyledSearch = styled.input`
  padding: 0.5rem 2rem;
  border-radius: 0.3rem;
  border: none;

  &:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;
