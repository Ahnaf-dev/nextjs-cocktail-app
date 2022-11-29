import React, { useEffect } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Link from "next/link";
import cocktailsAPI from "../../api/apiConfig";
import styled from "styled-components";
import detailedCocktail from "../../types/detailedCocktail";

const CenterLink = styled(Link)`
  text-align: center;
  display: block;
  margin: 3rem 0;
  color: ${(props) => props.theme.palette.accent};
  &:hover {
    text-decoration: underline;
  }
`;

const CocktailCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  gap: 30px;
`;

const CocktailImage = styled.div`
  img {
    width: 100%;
    display: block;
    max-height: 40rem;
  }
`;

const CocktailBody = styled.div``;

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  return {
    props: {
      cocktail: await cocktailsAPI.getCocktailByID(id),
    },
  };
}

const Cocktail = ({ cocktail }: { cocktail: detailedCocktail }) => {
  const { drink, glass, image, info, ingredients, instruction, shot } =
    cocktail;

  return (
    <>
      <Header />
      <Container>
        <CenterLink className="center" href="/">
          Back Home
        </CenterLink>
        <CocktailCard>
          <CocktailImage>
            <img src={image} alt={`picture of ${drink}`} />
          </CocktailImage>
          <CocktailBody>
            <p>
              <span className="text--bd">Drink: </span>
              {drink}
            </p>
            <p>
              <span className="text--bd">Glass: </span>
              {glass}
            </p>
            <p>
              <span className="text--bd">Info: </span>
              {info}
            </p>
            <p>
              <span className="text--bd">Shot: </span>
              {shot}
            </p>
            <p>
              <span className="text--bd">Instructions: </span>
              {instruction}
            </p>
            <p>
              <span className="text--bd">Ingredients: </span>
              {ingredients.map((ingredient: string) => {
                if (ingredient) {
                  return <span className="tag">{ingredient}</span>;
                }
              })}
            </p>
          </CocktailBody>
        </CocktailCard>
      </Container>
    </>
  );
};

export default Cocktail;
