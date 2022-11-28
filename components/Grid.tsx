import React from "react";
import styled from "styled-components";

const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3rem;
`;

const Grid = ({ children }: { children: React.ReactNode }) => {
  return <ResponsiveGrid>{children}</ResponsiveGrid>;
};

export default Grid;
