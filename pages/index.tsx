import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import cocktailsAPI from "../api/apiConfig";
import Header from "../components/Header";
import cocktailsOverview from "../types/cocktailOverview";
import DisplayCocktailOverview from "../components/Cocktail";
import Container from "../components/Container";
import Grid from "../components/Grid";

const Loader = styled.h2`
  color: ${(props) => props.theme.palette.accent};
  margin: 4rem;
  text-align: center;
`;

const Main = styled.main`
  padding: 5rem 0;
`;
export async function getServerSideProps() {
  return {
    props: {
      cocktails: await cocktailsAPI.searchCocktails(),
    },
  };
}

export default function Home({
  cocktails,
}: {
  cocktails: cocktailsOverview[];
}) {
  const [cocktailsList, setCocktailsList] = useState(cocktails);

  const renderCocktails = () => {
    const noCocktails = !cocktailsList;
    if (noCocktails) {
      return <Loader className="loading">Loading...</Loader>;
    } else {
      return (
        <Main className="display__cocktails">
          <Container>
            <Grid>
              {cocktails.map((cocktail: cocktailsOverview, index: number) => (
                <DisplayCocktailOverview cocktail={cocktail} key={index} />
              ))}
            </Grid>
          </Container>
        </Main>
      );
    }
  };

  return (
    <>
      <Header />
      {renderCocktails()}
    </>
  );
}
