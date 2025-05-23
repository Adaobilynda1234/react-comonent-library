import { StoryObj, Meta } from "@storybook/react";
import MediaUpload from "./MediaUpload";
import type { MediaUploadProps } from "./types";
import { DefaultIcon } from "./icons";

// Define the Storybook metadata with proper typing
const meta: Meta<typeof MediaUpload> = {
  title: "Components/MediaUpload",
  component: MediaUpload,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["standard", "drag-and-drop"],
    },
    multiple: {
      control: { type: "boolean" },
    },
    defaultIcon: {
      control: { type: "select" },
      options: [DefaultIcon],
      description: "Default icon for the upload prompt",
    },
    customClass: {
      control: { type: "text" },
    },
    customText: {
      control: { type: "text" },
      description: "Custom text for the standard variant",
    },
    customErrorMessage: {
      control: { type: "text" },
    },
    customDragText: {
      control: { type: "object" },
      description:
        "Custom text for click and drag actions in drag-and-drop variant",
    },
  },
};

export default meta;

// Define the type for the story template
type Story = StoryObj<typeof MediaUpload>;

// Define the template with explicit typing for args
const Template = (args: MediaUploadProps) => <MediaUpload {...args} />;

// Standard Variant Stories
export const StandardDefaultSingle: Story = {
  render: Template,
  args: {
    variant: "standard",
    multiple: false,
    defaultIcon: DefaultIcon,
    customText: "Upload files",
    customErrorMessage: "Error message",
  },
  name: "Standard - Single File",
};

export const StandardDefaultMultiple: Story = {
  render: Template,
  args: {
    variant: "standard",
    multiple: true,
    defaultIcon: DefaultIcon,
    customText: "Upload files",
    customErrorMessage: "Error message",
  },
  name: "Standard - Multiple Files",
};

export const StandardCustomText: Story = {
  render: Template,
  args: {
    variant: "standard",
    multiple: true,
    defaultIcon: DefaultIcon,
    customText: "Select a file",
    customErrorMessage: "Failed to upload",
  },
  name: "Standard - Custom Text",
};

// Drag-and-Drop Variant Stories
export const DragAndDropDefaultSingle: Story = {
  render: Template,
  args: {
    variant: "drag-and-drop",
    multiple: false,
    defaultIcon: DefaultIcon,
    customErrorMessage: "Error message",
  },
  name: "Drag and Drop - Single File",
};

export const DragAndDropDefaultMultiple: Story = {
  render: Template,
  args: {
    variant: "drag-and-drop",
    multiple: true,
    defaultIcon: DefaultIcon,
    customErrorMessage: "Error message",
  },
  name: "Drag and Drop - Multiple Files",
};

export const DragAndDropCustomText: Story = {
  render: Template,
  args: {
    variant: "drag-and-drop",
    multiple: true,
    defaultIcon: DefaultIcon,
    customDragText: {
      click: "Select files",
      drag: "drop here",
    },
    customErrorMessage: "Failed to upload",
  },
  name: "Drag and Drop - Custom Text",
};

export const DragAndDropPartialCustomText: Story = {
  render: Template,
  args: {
    variant: "drag-and-drop",
    multiple: true,
    defaultIcon: DefaultIcon,
    customDragText: {
      click: "Choose files",
    },
    customErrorMessage: "Failed to upload",
  },
  name: "Drag and Drop - Partial Custom Text",
};
