import Home from "../pages/index";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import cocktails from "./cocktailsData";
import "@testing-library/jest-dom/extend-expect";

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
