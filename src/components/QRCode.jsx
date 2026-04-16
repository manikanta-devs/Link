import React, { useEffect, useRef } from 'react';

// QR Code Component
const QRCode = ({ text, size = 200 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && text) {
      // Simple QR-like pattern generator (simplified for demo)
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const modules = 25;
      const moduleSize = size / modules;

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, size, size);

      ctx.fillStyle = '#000000';

      // Create a deterministic pattern based on text
      const hash = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

      for (let row = 0; row < modules; row++) {
        for (let col = 0; col < modules; col++) {
          const seed = (row * modules + col + hash) % 100;
          if (seed > 50 || (row < 7 && col < 7) || (row < 7 && col >= modules - 7) || (row >= modules - 7 && col < 7)) {
            ctx.fillRect(col * moduleSize, row * moduleSize, moduleSize, moduleSize);
          }
        }
      }
    }
  }, [text, size]);

  return <canvas ref={canvasRef} width={size} height={size} />;
};

export default QRCode;
