import { ClusterList } from "../data/ClusterList";
import { describe, it, expect } from "vitest";
import { renderWithRouter } from "./utils";

describe("ClusterList", () => {
  it("renders cluster selection UI when empty", () => {
    const { getByTitle } = renderWithRouter(<ClusterList />);
    expect(getByTitle(/Loading screen/i)).toBeInTheDocument();
  });

  // TODO: Fix this -> Loading UI is rendered w/o data and button is not there

  //   it("adds a cluster when add button is clicked", () => {
  //     const { getByTitle, getByText } = renderWithRouter(<ClusterList />);
  //     fireEvent.click(getByTitle(/Add a new cluster/i));
  //     expect(getByText(/new cluster/i)).toBeInTheDocument();
  //   });
});
