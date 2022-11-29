import Home from "../pages/index";
import Header from "../components/Header";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";

import "@testing-library/jest-dom/extend-expect";

describe("Home Component", () => {
  describe("When home component is initially rendered", () => {
    const cocktails = [
      {
        id: 1,
        glass: "Rendered Glass",
        drink: "Hydrated",
        image: "",
        alcoholic: "alcoholic",
      },
    ];

    beforeEach(() => {
      render(
        <ThemeProvider theme={theme}>
          <Home cocktails={cocktails} />
        </ThemeProvider>
      );
    });

    it("should display cocktail cards", () => {
      expect(screen.queryByText("Rendered Glass")).toBeVisible();
    });
  });

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
});
