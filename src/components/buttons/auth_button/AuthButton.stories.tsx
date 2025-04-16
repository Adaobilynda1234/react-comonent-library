// src/components/buttons/auth_button/AuthButton.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { AuthButton } from "./AuthButton";

const meta = {
  title: "Components/Buttons/AuthButton",
  component: AuthButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    provider: {
      control: "select",
      options: ["google", "facebook", "apple", "twitter", "figma", "dribbble"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline", "gray-light"],
    },
    size: {
      control: "select",
      options: ["default", "small"],
    },
  },
} as Meta<typeof AuthButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic provider stories
export const Google: Story = {
  args: {
    provider: "google",
    variant: "filled",
  },
};

export const Facebook: Story = {
  args: {
    provider: "facebook",
    variant: "filled",
  },
};

export const Apple: Story = {
  args: {
    provider: "apple",
    variant: "filled",
  },
};

export const GoogleSmall: Story = {
  args: {
    provider: "google",
    variant: "filled",
    size: "small",
  },
};

// Variant examples
export const GoogleOutline: Story = {
  args: {
    provider: "google",
    variant: "outline",
  },
};

export const GoogleGrayLight: Story = {
  args: {
    provider: "google",
    variant: "gray-light",
  },
};

// Group displays
export const AuthButtonGroupFilled: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "240px",
      }}
    >
      <AuthButton provider="google" variant="filled" />
      <AuthButton provider="facebook" variant="filled" />
      <AuthButton provider="apple" variant="filled" />
    </div>
  ),
};

export const AuthButtonGroupOutline: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "240px",
      }}
    >
      <AuthButton provider="google" variant="outline" />
      <AuthButton provider="facebook" variant="outline" />
      <AuthButton provider="apple" variant="outline" />
    </div>
  ),
};

export const AuthButtonGroupGrayLight: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "240px",
      }}
    >
      <AuthButton provider="google" variant="gray-light" />
      <AuthButton provider="facebook" variant="gray-light" />
      <AuthButton provider="apple" variant="gray-light" />
    </div>
  ),
};

export const SmallButtonsGroup: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "240px",
      }}
    >
      <AuthButton provider="google" variant="filled" size="small" />
      <AuthButton provider="facebook" variant="filled" size="small" />
      <AuthButton provider="apple" variant="filled" size="small" />
    </div>
  ),
};
