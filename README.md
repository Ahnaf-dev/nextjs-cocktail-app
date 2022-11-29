# NextJS Cocktail App
A modern responsive app that interacts with a cocktail API.

[Live Link](https://cocktail-nextjs-app.netlify.app/)

## Technologies

### Frontend
* [Cocktail API](https://www.thecocktaildb.com/api.php)
* **Languages**: HTML5, CSS3, ES6 JavaScript
* **Frameworks**: React, NextJS, Styled Components
* **Testing**: React Testing Library, Jest DOM
* **Version Control**: Git, Github
* **CI/CD**: GitHub Actions

## Features

### Technical Features

* Tested user interactions such as search and pagination with React Testing Library and Jest DOM.
* Used Jest mock functions to mock API calls.
* Server Side Rendering with NextJS on a page by page basis to boost SEO.
* UI styled with React Styled Components.
* ES6 JavaScript methods and React Hooks to create search and pagination functionality.
* Used Fetch API to call Cocktails API, destructure relevant data and create high quality components from the returned JSON data.
* Utilized modern CSS3 features such as Grid, Flexbox and Media Queries to create a modern responsive layout.
* Used Github Actions to run tests anytime there is a push or a pull request.
* Usage of Git actions such as add, commit, branching and merging.

### User Features

* Upon visiting the website, users will see a list of cocktails in which they can search for cocktails and click on pagination to see more cocktails.
* User can click a cocktail and see them in detail.

## Code Snippets

### Pagination Testing

```javascript
describe("Pagination", () => {
  describe("when paginate to 2nd page is clicked", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <Home cocktails={cocktails} />
        </ThemeProvider>
      );
    });

    it("should update the current page to 2", () => {
      const page2Pagination = screen.queryByText("2");
      fireEvent.click(page2Pagination);
      expect(screen.queryByText("Paginated Glass")).toBeVisible();
    });
  });
});


```

### Search Testing

```javascript
 describe("When user searches on searchbar", () => {
    const cocktails = [
      {
        id: 1,
        glass: "FilterA Glass",
        drink: "Hydrated",
        image: "",
        alcoholic: "alcoholic",
      },
      {
        id: 1,
        glass: "FilterB Glass",
        drink: "Hydrated",
        image: "",
        alcoholic: "alcoholic",
      },
    ];
    // mock fetch api
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            drinks: [
              {
                idDrink: "one",
                strGlass: "FilterA",
                strDrink: "drink1",
                strDrinkThumb: "",
                strAlcoholic: "true",
              },
            ],
          }),
      })
    );

    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <Home cocktails={cocktails} />
        </ThemeProvider>
      );
    });

    it("should display cocktail cards that matches the search term", async () => {
      const input = screen.queryByPlaceholderText("Search For Cocktail");

      await act(async () => {
        fireEvent.change(input, { target: { value: "FilterA" } });
      });

      await waitFor(
        () => {
          expect(screen.queryByText("FilterA")).toBeVisible();
        },
        { interval: 1000 }
      );
    });
  });

```

### Server Side Rendering

```javascript
export async function getServerSideProps() {
  return {
    props: {
      cocktails: await cocktailsAPI.searchCocktails(),
    },
  };
}

```
