export const DefaultIcon =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4v4H8v2h4v4h2v-4h4v-2h-4V6h-2z" fill="gray"/></svg>';

export const getFileTypeIcon = (fileName: string): string | undefined => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'pdf':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h6l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#FF4040"/><path d="M12 2v6h6" fill="none" stroke="#FF4040" stroke-width="1"/></svg>';
    case 'png':
    case 'jpg':
    case 'jpeg':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v12h12V4H6zm2 2h8v8h-8V6zm2 2v4h4V8h-4z" fill="#40C4FF"/></svg>';
    case 'svg':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2h20v20H2V2zm2 2v16h16V4H4zm4 4h8v8H8V8zm2 2v4h4v-4h-4z" fill="#A040FF"/></svg>';
    case 'gif':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v12h12V4H6zm2 2h8v8H8V6zm2 2v4h4V8h-4z" fill="#FF40C4"/></svg>';
    default:
      return undefined;
  }
};

export const InProgressIcon =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="orange" stroke-width="2" fill="none"><animate attributeName="stroke-dasharray" from="0 62.831853" to="62.831853 0" dur="2s" repeatCount="indefinite"/></svg>';

export const CompleteIcon =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="green"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white"/></svg>';

export const ErrorIcon =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="red"/><path d="M15 9l-6 6m0-6l6 6" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>';

export const DeleteIcon =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" fill="red"/></svg>';

export const DownloadIcon =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="blue"/></svg>';

export const RetryIcon =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" fill="orange"/></svg>';