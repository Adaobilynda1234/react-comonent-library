import { useState, useRef } from "react";
import type { MediaUploadProps, FileItem } from "./types";
import {
  DefaultIcon,
  InProgressIcon,
  CompleteIcon,
  ErrorIcon,
  DeleteIcon,
  DownloadIcon,
} from "./icons";

const MediaUpload = ({
  variant = "drag-and-drop",
  multiple = false,
  defaultIcon = DefaultIcon,
  customClass = "",
  customText = "",
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

  const renderStatusIcon = (status: string) => {
    switch (status) {
      case "in-progress":
        return InProgressIcon;
      case "complete":
        return CompleteIcon;
      case "error":
        return ErrorIcon;
      default:
        return defaultIcon;
    }
  };

  return (
    <div
      className={`border-2 border-dashed ${
        variant === "standard" ? "border-purple-500" : "border-gray-300"
      } p-6 rounded-lg ${customClass} ${dragActive ? "bg-gray-100" : ""}`}
      onDragEnter={variant === "drag-and-drop" ? handleDrag : undefined}
      onDragOver={variant === "drag-and-drop" ? handleDrag : undefined}
      onDragLeave={variant === "drag-and-drop" ? handleDrag : undefined}
      onDrop={variant === "drag-and-drop" ? handleDrop : undefined}
    >
      <div
        className={
          variant === "standard"
            ? "flex items-center justify-center gap-2"
            : "flex flex-col items-center gap-4"
        }
      >
        <span dangerouslySetInnerHTML={{ __html: defaultIcon }} />
        {variant === "standard" ? (
          <>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="bg-purple-700 text-white px-4 py-2 rounded"
            >
              {customText || "Upload"}
            </button>
            <span>PDF format + Max 5MB</span>
          </>
        ) : (
          <>
            <p className="text-green-600">
              {customText || "Click to upload or drag & drop"}
            </p>
            <p className="text-sm text-gray-500">
              SVG, PNG, JPG or GIF (max 800x400px)
            </p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="bg-purple-700 text-white px-4 py-2 rounded"
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
        />
      </div>
      <div className="mt-4 space-y-2">
        {files.map((file, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              variant === "standard"
                ? "flex items-center justify-between bg-gray-50"
                : ""
            } ${
              variant === "drag-and-drop" && file.status === "in-progress"
                ? "bg-orange-100"
                : ""
            } ${
              variant === "drag-and-drop" && file.status === "complete"
                ? "bg-green-100"
                : ""
            } ${
              variant === "drag-and-drop" && file.status === "error"
                ? "bg-red-100"
                : ""
            }`}
          >
            {variant === "standard" ? (
              <>
                <div className="flex items-center gap-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderStatusIcon(file.status),
                    }}
                  />
                  <div>
                    <p>{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {file.date} + {file.size}
                    </p>
                  </div>
                </div>
                {file.status === "in-progress" ? (
                  <span className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                ) : file.status === "error" ? (
                  <button
                    type="button"
                    onClick={() => handleRetry(index)}
                    className="text-orange-500"
                  >
                    Try Again
                  </button>
                ) : (
                  <div>
                    <button
                      type="button"
                      onClick={() => handleRemove(index)}
                      className="text-red-500"
                    >
                      <span dangerouslySetInnerHTML={{ __html: DeleteIcon }} />
                    </button>
                    <button type="button" className="text-green-500 ml-2">
                      <span
                        dangerouslySetInnerHTML={{ __html: DownloadIcon }}
                      />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: renderStatusIcon(file.status),
                    }}
                  />
                  <div>
                    <p>
                      {file.status === "in-progress"
                        ? "Uploading..."
                        : file.status === "error"
                        ? "Failed to Upload"
                        : "Upload Complete"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {file.name} ({file.date})
                    </p>
                  </div>
                </div>
                {file.progress && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-orange-500 h-2.5 rounded-full"
                        style={{ width: `${file.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500">{file.progress}%</p>
                  </div>
                )}
                {file.status === "complete" && (
                  <button
                    type="button"
                    onClick={() => handleRemove(index)}
                    className="mt-2 text-blue-500 text-sm"
                  >
                    Clear Upload
                  </button>
                )}
                {file.status === "error" && (
                  <button
                    type="button"
                    onClick={() => handleRetry(index)}
                    className="mt-2 text-orange-500 text-sm"
                  >
                    Try Again
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaUpload;
