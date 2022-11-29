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
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const Center = styled.h2`
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
  // pagination logic
  const [page, setPage] = useState(1);
  const postsPerPage = 8;
  const lastIndexOfPage = postsPerPage * page;
  const firstIndexOfPage = lastIndexOfPage - postsPerPage;
  const totalPages = cocktailsList?.length
    ? Math.ceil(cocktailsList.length / postsPerPage)
    : 0;

  const fetchFromSearch = async (searchTerm: string) => {
    const searchedCocktails: cocktailsOverview[] =
      await cocktailsAPI.searchCocktails(searchTerm);
    setCocktailsList(searchedCocktails);
  };

  const renderCocktails = () => {
    const noCocktails = !cocktailsList;

    return (
      <Main className="display__cocktails">
        <Container>
          <SearchBar fetchFromSearch={fetchFromSearch} />
          {noCocktails ? (
            <Center>Sorry, No Cocktails Match Your Search Criteria</Center>
          ) : (
            <>
              <Grid>
                {cocktailsList
                  .slice(firstIndexOfPage, lastIndexOfPage)
                  .map((cocktail: cocktailsOverview, index: number) => (
                    <DisplayCocktailOverview cocktail={cocktail} key={index} />
                  ))}
              </Grid>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                setPageNum={setPage}
              />
            </>
          )}
        </Container>
      </Main>
    );
  };

  return (
    <>
      <Header />
      {renderCocktails()}
      <Footer />
    </>
  );
}
