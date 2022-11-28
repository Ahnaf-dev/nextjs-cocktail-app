import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Link from "next/link";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.palette.secondary};
  padding: 2rem 0;

  div {
    text-align: center;
  }
`;

const Logo = styled(Link)`
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(98deg, #d8ffae, #7ed131);
  color: transparent;
  font-size: 3.7rem;
  &:hover {
    background-image: linear-gradient(98deg, #7ed131, #d8ffae);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo href="/">TheCocktailsDB</Logo>
      </Container>
    </StyledHeader>
  );
};
export default Header;
