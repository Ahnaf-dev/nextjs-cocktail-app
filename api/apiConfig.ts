const apiConfig = {
  baseURL: `https://www.thecocktaildb.com/api/json/v1/1/`,
};

const searchCocktails = async (searchTerm = "a") => {
  try {
    const response = await fetch(
      `${apiConfig.baseURL}/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    let drinks = data.drinks?.map((drink: any) => {
      return {
        id: drink.idDrink,
        glass: drink.strGlass,
        drink: drink.strDrink,
        image: drink.strDrinkThumb,
        alcoholic: drink.strAlcoholic,
      };
    });

    return drinks;
  } catch (err) {
    console.log(err);
  }
};

const getCocktailByID = async (id: string) => {
  try {
    const response = await fetch(`${apiConfig.baseURL}lookup.php?i=${id}`);
    const data = await response.json();
    const drinks = data.drinks[0];
    const {
      strDrink: drink,
      strCategory: shot,
      strGlass: glass,
      strDrinkThumb: image,
      strAlcoholic: info,
      strInstructions: instruction,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = drinks;

    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    ];

    const filteredDrink = {
      drink,
      shot,
      glass,
      image,
      info,
      instruction,
      ingredients,
    };

    return filteredDrink;
  } catch (error) {
    console.log(error);
  }
};

const cocktailsAPI = {
  searchCocktails,
  getCocktailByID,
};

export default cocktailsAPI;
