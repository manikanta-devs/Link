// Utility: Generate unique ID
export const generateId = () => {
  return Math.random().toString(36).substring(2, 15) +
         Math.random().toString(36).substring(2, 15);
};

// Utility: Format file size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

// Utility: Detect content type
export const detectContentType = (text, fileName) => {
  if (fileName) {
    if (/\.(jpg|jpeg|png|gif|webp)$/i.test(fileName)) return 'Image';
    if (/\.(pdf)$/i.test(fileName)) return 'PDF';
    if (/\.(js|jsx|ts|tsx|py|java|cpp|c|html|css)$/i.test(fileName)) return 'Code';
    return 'File';
  }
  if (text && (text.includes('function') || text.includes('{') || text.includes('const '))) {
    return 'Code';
  }
  return 'Text';
};
