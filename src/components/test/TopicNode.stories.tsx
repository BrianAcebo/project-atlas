// src/components/TopicNode.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { TopicNode } from "./TopicNode";

const meta: Meta<typeof TopicNode> = {
  component: TopicNode,
  title: "Components/TopicNode",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TopicNode>;

export const Draft: Story = {
  args: {
    title: "Draft Topic",
    status: "draft",
  },
};

export const InProgress: Story = {
  args: {
    title: "Work in Progress",
    status: "in-progress",
  },
};

export const Published: Story = {
  args: {
    title: "Published SEO Guide",
    status: "published",
  },
};
