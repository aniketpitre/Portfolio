'use client';
import { useState, useEffect } from 'react';

const sequence = [
  { text: 'Connecting to aniketpitre.com...', delay: 1000 },
  { text: 'Connection established.', delay: 1500 },
  { text: 'Loading environment...', delay: 1500 },
  { text: 'Welcome.', delay: 1000, className: 'text-primary' },
];

export default function LoadingSequence({ onFinished }: { onFinished: () => void }) {
  const [lines, setLines] = useState<{ text: string; className?: string }[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentDelay = 500;
    sequence.forEach((item, index) => {
      setTimeout(() => {
        setLines((prev) => [...prev, { text: item.text, className: item.className }]);
        if (index === sequence.length - 1) {
          setShowCursor(false);
          setTimeout(onFinished, 1000);
        }
      }, currentDelay);
      currentDelay += item.delay;
    });
  }, [onFinished]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background font-code text-sm sm:text-base">
      <div className="p-4">
        {lines.map((line, index) => (
          <p key={index} className={line.className}>
            {line.text}
          </p>
        ))}
        {showCursor && (
          <div className="flex items-center">
            <p className="text-primary mr-2">guest@aniketpitre:~$</p>
            <span className="animate-blinking-cursor block h-4 w-2 bg-primary"></span>
          </div>
        )}
      </div>
    </div>
  );
}
