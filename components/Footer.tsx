import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.palette.secondary};
  height: 10rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <a
        target="_blank"
        href="https://github.com/Ahnaf-dev/nextjs-cocktail-app"
      >
        <FaGithub />
        View Code
      </a>
    </StyledFooter>
  );
};

export default Footer;
