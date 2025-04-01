import { TopicalMap } from "../data/TopicalMap";
import { describe, it, expect } from "vitest";
import { renderWithRouter } from "./utils";

describe("TopicalMap", () => {
  it("renders cluster selection UI when empty", () => {
    const { getByTitle } = renderWithRouter(<TopicalMap />);
    expect(getByTitle(/Loading screen/i)).toBeInTheDocument();
  });

  // TODO: Fix this -> Loading UI is rendered w/o data and button is not there

  //   it("adds a topic when add button is clicked", () => {
  //     const { getByTitle, getByText } = renderWithRouter(<TopicalMap />);
  //     fireEvent.click(getByTitle(/add a new topic/i));
  //     expect(getByText(/new topic/i)).toBeInTheDocument();
  //   });
});
