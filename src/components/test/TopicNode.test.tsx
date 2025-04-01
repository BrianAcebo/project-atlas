// src/components/TopicNode.test.tsx
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TopicNode } from "./TopicNode";

describe("TopicNode", () => {
  it("renders the topic title", () => {
    const { getByTestId } = render(<TopicNode title="My Topic" status="draft" />);
    expect(getByTestId("topic-node")).toHaveTextContent("My Topic");
  });

  it("applies the correct color for draft status", () => {
    const { getByTestId } = render(<TopicNode title="Draft" status="draft" />);
    expect(getByTestId("topic-node").className).toContain("bg-purple-500");
  });
});
