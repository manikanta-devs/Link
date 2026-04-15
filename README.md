# Link

## Utilities

### `generateId()`
Generates a unique random ID string.

### `formatFileSize(bytes)`
Formats a byte count into a human-readable string (e.g., `1.5 MB`).

### `detectContentType(text, fileName)`
Detects the content type based on the file name extension or text content. Returns one of: `'Image'`, `'PDF'`, `'Code'`, `'File'`, or `'Text'`.

## Components

### `QRCode`
A canvas-based QR-like pattern component.

**Props:**
- `text` (string) — The text to encode into the pattern.
- `size` (number, default: `200`) — The width and height of the canvas in pixels.