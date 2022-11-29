import Home from "../pages/index";
import Header from "../components/Header";
import { screen, render } from "@testing-library/react";
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
});
