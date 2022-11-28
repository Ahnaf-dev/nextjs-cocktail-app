const apiConfig = {
  baseURL: `https://www.thecocktaildb.com/api/json/v1/1/`,
};

const searchCocktails = async (searchTerm = "a") => {
  const response = await fetch(
    `${apiConfig.baseURL}/search.php?s=${searchTerm}`
  );
  const data = await response.json();
  let drinks = data.drinks.map((drink: any) => {
    return {
      id: drink.idDrink,
      glass: drink.strGlass,
      drink: drink.strDrink,
      image: drink.strDrinkThumb,
      alcoholic: drink.strAlcoholic,
    };
  });

  return drinks;
};

const cocktailsAPI = {
  searchCocktails,
};

export default cocktailsAPI;
