import React from "react";
import cocktailsOverview from "../types/cocktailOverview";
import styled from "styled-components";
import Link from "next/link";

const CocktailCard = styled.div`
  background-color: ${(props) => props.theme.palette.secondary};
`;
const CocktailImage = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  display: block;
`;

const CocktailBody = styled.div`
  padding: 1rem 2rem;
`;

const CocktailButton = styled(Link)`
  color: ${(props) => props.theme.palette.accent};
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const DisplayCocktailOverview = ({
  cocktail,
}: {
  cocktail: cocktailsOverview;
}) => {
  const { id, glass, drink, image, alcoholic } = cocktail;

  return (
    <CocktailCard>
      <div className="overlay">
        <CocktailImage src={image} />
      </div>
      <CocktailBody>
        <h2>{glass}</h2>
        <h3 className="text--light">
          {drink} ({alcoholic})
        </h3>
        <CocktailButton href={`/cocktail/${id}`}>Read More</CocktailButton>
      </CocktailBody>
    </CocktailCard>
  );
};

export default DisplayCocktailOverview;
