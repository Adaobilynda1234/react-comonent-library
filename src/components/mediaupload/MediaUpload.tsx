import { useState, useRef } from "react";
import type { MediaUploadProps, FileItem } from "./types";
import {
  DefaultIcon,
  getFileTypeIcon,
  InProgressIcon,
  CompleteIcon,
  ErrorIcon,
  DeleteIcon,
  DownloadIcon,
  RetryIcon,
  ProgressBarIcon,
} from "./icons";

const MediaUpload = ({
  variant = "drag-and-drop",
  multiple = false,
  defaultIcon = DefaultIcon,
  customClass = "",
  customText = "Upload files",
  customErrorMessage = "Error message",
  customDragText,
}: MediaUploadProps) => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles: FileItem[] = Array.from(event.target.files || []).map(
      (file) => ({
        name: file.name,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        size: (file.size / 1024 / 1024).toFixed(2) + "MB",
        status: "in-progress",
        progress: 0,
      })
    );
    if (multiple) {
      setFiles((prev) => [...prev, ...uploadedFiles]);
    } else {
      setFiles((prev) => {
        const newFile = uploadedFiles[0];
        return newFile ? [...prev, newFile].slice(-1) : prev;
      });
    }
    uploadedFiles.forEach((_, i) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFiles((prev) =>
          prev.map((f, idx) =>
            idx === prev.length - uploadedFiles.length + i
              ? { ...f, progress: Math.min(progress, 65) }
              : f
          )
        );
        if (progress >= 65) {
          clearInterval(interval);
          setTimeout(() => {
            setFiles((prev) =>
              prev.map((f, idx) =>
                idx === prev.length - uploadedFiles.length + i
                  ? {
                      ...f,
                      status: Math.random() > 0.2 ? "complete" : "error",
                      progress: undefined,
                    }
                  : f
              )
            );
          }, 1000);
        }
      }, 500);
    });
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    const droppedFiles: FileItem[] = Array.from(event.dataTransfer.files).map(
      (file) => ({
        name: file.name,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        size: (file.size / 1024 / 1024).toFixed(2) + "MB",
        status: "in-progress",
        progress: 0,
      })
    );
    if (multiple) {
      setFiles((prev) => [...prev, ...droppedFiles]);
    } else {
      setFiles((prev) => {
        const newFile = droppedFiles[0];
        return newFile ? [...prev, newFile].slice(-1) : prev;
      });
    }
    droppedFiles.forEach((_, i) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFiles((prev) =>
          prev.map((f, idx) =>
            idx === prev.length - droppedFiles.length + i
              ? { ...f, progress: Math.min(progress, 65) }
              : f
          )
        );
        if (progress >= 65) {
          clearInterval(interval);
          setTimeout(() => {
            setFiles((prev) =>
              prev.map((f, idx) =>
                idx === prev.length - droppedFiles.length + i
                  ? {
                      ...f,
                      status: Math.random() > 0.2 ? "complete" : "error",
                      progress: undefined,
                    }
                  : f
              )
            );
          }, 1000);
        }
      }, 500);
    });
  };

  const handleRemove = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRetry = (index: number) => {
    setFiles((prev) =>
      prev.map((f, i) =>
        i === index ? { ...f, status: "in-progress", progress: 0 } : f
      )
    );
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setFiles((prev) =>
        prev.map((f, i) =>
          i === index ? { ...f, progress: Math.min(progress, 65) } : f
        )
      );
      if (progress >= 65) {
        clearInterval(interval);
        setTimeout(() => {
          setFiles((prev) =>
            prev.map((f, i) =>
              i === index
                ? {
                    ...f,
                    status: Math.random() > 0.2 ? "complete" : "error",
                    progress: undefined,
                  }
                : f
            )
          );
        }, 1000);
      }
    }, 500);
  };

  const renderStatusIcon = (status: string, fileName: string) => {
    if (status === "in-progress") return InProgressIcon;
    if (status === "complete") return CompleteIcon;
    if (status === "error") return ErrorIcon;
    return getFileTypeIcon(fileName) || DefaultIcon;
  };

  return (
    <div
      className={`border-2 border-dashed border-black max-w-md mx-auto ${
        variant === "standard" ? "px-0.5 sm:px-1 py-2 sm:py-3" : "p-2 sm:p-3"
      } rounded-lg ${customClass} ${dragActive ? "bg-gray-100" : ""}`}
      onDragEnter={variant === "drag-and-drop" ? handleDrag : undefined}
      onDragOver={variant === "drag-and-drop" ? handleDrag : undefined}
      onDragLeave={variant === "drag-and-drop" ? handleDrag : undefined}
      onDrop={variant === "drag-and-drop" ? handleDrop : undefined}
    >
      <div
        className={
          variant === "standard"
            ? "flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
            : "flex flex-col items-center gap-2 border-2 border-dashed border-gray-400 p-4 rounded-lg"
        }
      >
        <span
          dangerouslySetInnerHTML={{ __html: defaultIcon }}
          className="w-6 h-6 sm:w-8 sm:h-8 m-4"
        />
        {variant === "standard" ? (
          <>
            <div className="text-center sm:text-left mr-8">
              <p className="text-gray-600 font-bold text-sm sm:text-base">
                {customText}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                PDF format + Max 5MB
              </p>
            </div>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="bg-black text-white px-2 py-1 rounded text-sm sm:text-base hover:bg-gray-800 transition-colors"
            >
              Upload
            </button>
          </>
        ) : (
          <>
            <p className="flex flex-wrap justify-center gap-1 text-sm sm:text-base">
              <span
                className="text-green-600 cursor-pointer hover:text-green-800 transition-colors"
                onClick={() => inputRef.current?.click()}
              >
                {customDragText?.click ?? "Click to upload"}
              </span>
              <span className="text-black">or</span>
              <span
                className="text-black cursor-pointer hover:text-gray-600 transition-colors"
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                {customDragText?.drag ?? "drag & drop"}
              </span>
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              SVG, PNG, JPG or GIF (max 800x400px)
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">OR</p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="bg-black text-white px-3 py-1 rounded text-sm sm:text-base hover:bg-gray-800 transition-colors"
            >
              Browse Files
            </button>
          </>
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={handleUpload}
          multiple={multiple}
          className="hidden"
          aria-label="File upload input"
        />
      </div>
      <div className="mt-2 sm:mt-3 space-y-4">
        {files.map((file, index) => (
          <div
            key={index}
            className={`p-1 sm:p-2 ${
              variant === "standard"
                ? "flex items-center justify-between bg-gray-50"
                : "border border-dashed border-black min-h-34 sm:min-h-38"
            } rounded-lg ${
              variant === "drag-and-drop" && file.status === "in-progress"
                ? "bg-orange-50"
                : ""
            } ${
              variant === "drag-and-drop" && file.status === "complete"
                ? "bg-green-50"
                : ""
            } ${
              variant === "drag-and-drop" && file.status === "error"
                ? "bg-red-50"
                : ""
            }`}
          >
            {variant === "standard" ? (
              <>
                <div className="flex items-center gap-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderStatusIcon(file.status, file.name),
                    }}
                    className="w-6 h-6 sm:w-8 sm:h-8 m-4"
                  />
                  <div>
                    <p className="text-gray-800 text-sm sm:text-base">
                      {file.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {file.date}
                      {file.status === "complete" && ` + ${file.size}`}
                    </p>
                    {file.status === "error" && (
                      <p className="text-xs sm:text-sm text-red-500">
                        {customErrorMessage}
                      </p>
                    )}
                  </div>
                </div>
                {file.status === "in-progress" && file.progress ? (
                  <div className="flex items-center gap-4">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ProgressBarIcon(file.progress),
                        }}
                        className="w-full h-full"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm text-gray-600">
                        {file.progress}%
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(index)}
                      className="text-gray-500"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                ) : file.status === "error" ? (
                  <button
                    type="button"
                    onClick={() => handleRetry(index)}
                    className="flex items-center gap-1 text-orange-500 text-sm sm:text-base"
                  >
                    <span dangerouslySetInnerHTML={{ __html: RetryIcon }} />
                    <span>Try Again</span>
                  </button>
                ) : (
                  file.status === "complete" && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleRemove(index)}
                        className="text-red-500"
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: DeleteIcon }}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </button>
                      <button type="button" className="text-blue-500">
                        <span
                          dangerouslySetInnerHTML={{ __html: DownloadIcon }}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </button>
                    </div>
                  )
                )}
              </>
            ) : (
              <div className="flex flex-col items-center gap-2">
                {file.status === "in-progress" && file.progress ? (
                  <div className="flex flex-col items-center gap-2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: getFileTypeIcon(file.name) || DefaultIcon,
                      }}
                      className="w-4 h-4 sm:w-6 sm:h-6 mb-6"
                    />
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {file.progress}%
                    </p>
                    <p className="text-sm sm:text-base text-gray-800 mt-1">
                      Uploading Document... ({file.name})
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col items-center gap-1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: renderStatusIcon(file.status, file.name),
                        }}
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                      <p className="text-sm sm:text-base font-bold text-gray-800">
                        {file.status === "error"
                          ? "Failed to Upload"
                          : "Uploading Document..."}
                      </p>
                      <p className="text-sm sm:text-base text-gray-800">
                        ({file.name})
                      </p>
                    </div>
                    {file.status === "error" && (
                      <p className="text-xs sm:text-sm text-red-500">
                        {customErrorMessage}
                      </p>
                    )}
                    {file.status === "complete" && (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleRemove(index)}
                          className="text-red-500"
                        >
                          <span
                            dangerouslySetInnerHTML={{ __html: DeleteIcon }}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                          />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemove(index)}
                          className="text-blue-500 text-sm sm:text-base"
                        >
                          Clear Upload
                        </button>
                      </div>
                    )}
                    {file.status === "error" && (
                      <button
                        type="button"
                        onClick={() => handleRetry(index)}
                        className="flex items-center gap-1 text-red-500 text-sm sm:text-base"
                      >
                        <span dangerouslySetInnerHTML={{ __html: RetryIcon }} />
                        <span>Try Again</span>
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaUpload;
