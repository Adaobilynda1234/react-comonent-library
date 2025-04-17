// src/components/buttons/auth_button/types.ts
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IAuthButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: "google" | "facebook" | "apple" | "twitter" | "figma" | "dribbble";
  variant?: "filled" | "outline" | "gray-light";
  size?: "default" | "small";
  icon?: ReactNode;
  label?: string;
}
