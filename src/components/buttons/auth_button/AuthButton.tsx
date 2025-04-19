import clsx from "clsx";
import { IAuthButton } from "./types";

export const AuthButton = ({
  provider = "google",
  variant = "filled",
  size = "default",
  label,
  className,
  ...props
}: IAuthButton) => {
  const getIcon = () => {
    switch (provider) {
      case "google":
        return (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        );
      case "facebook":
        return (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
              fill="currentColor"
            />
          </svg>
        );
      case "apple":
        return (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.498 0c.05 5.61-4.097 7.973-4.097 7.973s-2.309-2.852-5.706-2.852c-2.942 0-5.846 2.075-5.846 6.554 0 5.194 4.347 12.25 7.618 12.25 1.48 0 2.928-1.293 4.655-1.293 1.728 0 2.721 1.293 4.454 1.293 3.35 0 7.424-7.055 7.424-12.25-.003-3.684-2.547-5.722-5.846-5.722-3.015 0-5.552 2.851-5.552 2.851s-1.104-8.804 2.896-8.804z"
              fill="currentColor"
            />
          </svg>
        );
      case "twitter":
        return (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              fill="currentColor"
            />
          </svg>
        );
      case "figma":
        return (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"
              fill="currentColor"
            />
          </svg>
        );
      case "dribbble":
        return (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"
              fill="currentColor"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getDefaultLabel = () => {
    return `Sign in with ${
      provider.charAt(0).toUpperCase() + provider.slice(1)
    }`;
  };

  // Generate basic class array to avoid duplicates
  const baseClasses = [
    "flex items-center justify-center gap-2 rounded font-medium transition-colors w-full",
  ];

  // Size classes
  if (size === "default") {
    baseClasses.push("py-2 px-4");
  } else if (size === "small") {
    baseClasses.push("py-1 px-3 text-sm");
  }

  // Variant and provider specific classes
  if (variant === "gray-light") {
    baseClasses.push("bg-gray-100 text-gray-800 hover:bg-gray-200");
  } else if (variant === "filled") {
    switch (provider) {
      case "google":
        baseClasses.push(
          "bg-white text-gray-800 border border-gray-400 hover:bg-gray-50"
        );
        break;
      case "facebook":
        baseClasses.push("bg-blue-500 text-white hover:bg-blue-700");
        break;
      case "apple":
        baseClasses.push("bg-black text-white hover:bg-gray-800");
        break;
      case "twitter":
        baseClasses.push("bg-blue-400 text-white hover:bg-blue-500");
        break;
      case "figma":
        baseClasses.push("bg-black text-white hover:bg-gray-800");
        break;
      case "dribbble":
        baseClasses.push("bg-pink-500 text-white hover:bg-pink-600");
        break;
    }
  } else if (variant === "outline") {
    switch (provider) {
      case "google":
        baseClasses.push(
          "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
        );
        break;
      case "facebook":
        baseClasses.push(
          "bg-white text-blue-600 border border-gray-300 hover:bg-gray-50"
        );
        break;
      case "apple":
        baseClasses.push(
          "bg-white text-black border border-gray-300 hover:bg-gray-50"
        );
        break;
      case "twitter":
        baseClasses.push(
          "bg-white text-blue-400 border border-gray-300 hover:bg-gray-50"
        );
        break;
      case "figma":
        baseClasses.push(
          "bg-white text-black border border-gray-300 hover:bg-gray-50"
        );
        break;
      case "dribbble":
        baseClasses.push(
          "bg-white text-pink-500 border border-gray-300 hover:bg-gray-50"
        );
        break;
    }
  }

  const buttonClasses = clsx(baseClasses, className);

  return (
    <button className={buttonClasses} {...props}>
      {getIcon()}
      <span>{label || getDefaultLabel()}</span>
    </button>
  );
};
