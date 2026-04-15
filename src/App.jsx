import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { generateId, formatFileSize, detectContentType, QRCode } from './index.js';

export default function App() {
  const [text, setText] = useState('https://github.com/manikanta-devs/Link');
  const [fileName, setFileName] = useState('');
  const [generatedId, setGeneratedId] = useState(() => generateId());

  const contentType = detectContentType(text, fileName || undefined);

  return (
    <div className="app">
      <header className="header">
        <Camera size={28} />
        <h1>Link</h1>
      </header>

      <main className="main">
        {/* QR Code preview */}
        <section className="card">
          <h2>QR Code Preview</h2>
          <div className="qr-wrapper">
            <QRCode text={text || 'link'} size={200} />
          </div>
          <label htmlFor="qr-text">Text / URL</label>
          <input
            id="qr-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL…"
          />
        </section>

        {/* Utility demos */}
        <section className="card">
          <h2>Utilities</h2>

          <div className="util-row">
            <span className="label">generateId()</span>
            <span className="value mono">{generatedId}</span>
            <button onClick={() => setGeneratedId(generateId())}>Regenerate</button>
          </div>

          <div className="util-row">
            <span className="label">formatFileSize()</span>
            <span className="value">{formatFileSize(1572864)}</span>
          </div>

          <div className="util-row">
            <span className="label">detectContentType()</span>
            <div className="detect-inputs">
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="File name (e.g. photo.png)"
              />
              <span className="badge">{contentType}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
