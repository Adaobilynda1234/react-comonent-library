import { StoryObj, Meta } from "@storybook/react";
import MediaUpload from "./MediaUpload";
import type { MediaUploadProps } from "./types";
import { DefaultIcon, InProgressIcon, CompleteIcon, ErrorIcon } from "./icons";

// Define the Storybook metadata with proper typing
const meta: Meta<typeof MediaUpload> = {
  title: "Components/MediaUpload",
  component: MediaUpload,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["standard", "drag-and-drop"],
    },
  },
};

export default meta;

// Define the type for the story template
type Story = StoryObj<typeof MediaUpload>;

// Define the template with explicit typing for args
const Template = (args: MediaUploadProps) => <MediaUpload {...args} />;

// Define stories with proper typing
export const StandardDefaultSingle: Story = {
  render: Template,
  args: {
    variant: "standard",
    multiple: false,
    defaultIcon: DefaultIcon,
  },
};

export const StandardDefaultMultiple: Story = {
  render: Template,
  args: {
    variant: "standard",
    multiple: true,
    defaultIcon: DefaultIcon,
  },
};

export const DragAndDropDefaultSingle: Story = {
  render: Template,
  args: {
    variant: "drag-and-drop",
    multiple: false,
    defaultIcon: DefaultIcon,
  },
};

export const DragAndDropDefaultMultiple: Story = {
  render: Template,
  args: {
    variant: "drag-and-drop",
    multiple: true,
    defaultIcon: DefaultIcon,
  },
};

export const StandardInProgress: Story = {
  render: Template,
  args: {
    variant: "standard",
    multiple: false,
    defaultIcon: InProgressIcon,
  },
};

export const StandardComplete: Story = {
  render: Template,
  args: {
    variant: "standard",
    multiple: false,
    defaultIcon: CompleteIcon,
  },
};

export const StandardError: Story = {
  render: Template,
  args: {
    variant: "standard",
    multiple: false,
    defaultIcon: ErrorIcon,
  },
};

export const DragAndDropInProgress: Story = {
  render: Template,
  args: {
    variant: "drag-and-drop",
    multiple: false,
    defaultIcon: InProgressIcon,
  },
};

export const DragAndDropComplete: Story = {
  render: Template,
  args: {
    variant: "drag-and-drop",
    multiple: false,
    defaultIcon: CompleteIcon,
  },
};

export const DragAndDropError: Story = {
  render: Template,
  args: {
    variant: "drag-and-drop",
    multiple: false,
    defaultIcon: ErrorIcon,
  },
};
