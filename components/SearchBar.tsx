import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const SearchInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Search For Cocktail",
}))`
  width: 100%;
  height: 100%;
  border: none;
  padding: 2rem 0rem 2rem;
  background: transparent;
  color: white;
  &:focus {
    outline: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 30rem;
  outline: 1px solid ${(props) => props.theme.palette.accent};
  gap: 2rem;
  margin-bottom: 2rem;
  border-radius: 2rem;
  overflow: hidden;
  padding-left: 1rem;
`;

const SearchBar = ({
  fetchFromSearch,
}: {
  fetchFromSearch: (searchTerm: string) => void;
}) => {
  return (
    <SearchContainer>
      <FaSearch />
      <SearchInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          fetchFromSearch(e.target.value)
        }
      />
    </SearchContainer>
  );
};

export default SearchBar;
