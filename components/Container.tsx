import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 160rem;
  margin: 0 auto;
  padding: 0 20px;
`;

const Container = ({ children }: { children?: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
