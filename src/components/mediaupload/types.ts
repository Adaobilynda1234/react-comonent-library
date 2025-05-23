export type FileItem = {
  name: string;
  date: string;
  size: string;
  status: "default" | "in-progress" | "complete" | "error";
  progress?: number;
};

export interface MediaUploadProps {
  variant?: "standard" | "drag-and-drop";
  multiple?: boolean;
  defaultIcon?: string;
  customClass?: string;
  customText?: string;
  customErrorMessage?: string;
  customDragText?: { click?: string; drag?: string };
}
