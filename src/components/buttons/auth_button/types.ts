// src/components/buttons/auth_button/types.ts
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IAuthButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: "google" | "facebook" | "apple" | "twitter" | "figma" | "dribbble";
  variant?: "filled" | "outlined" | "light";
  icon?: ReactNode;
  label?: string;
}
