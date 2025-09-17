'use client';
import { useState, useEffect } from 'react';

const sequence = [
  { text: 'Requesting connection to apitre.io...', delay: 1000 },
  { text: 'Remote host found. Exchanging SSH keys...', delay: 1500 },
  { text: '[ AUTH_KEY_ACCEPTED ]', delay: 500, className: 'text-green-400' },
  { text: 'Establishing secure tunnel... Encrypting session with AES-256.', delay: 1500 },
  { text: 'Success. Spawning guest shell... Welcome to APVE.', delay: 1000, className: 'text-accent' },
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
          setTimeout(onFinished, 1000); // Wait a bit before finishing
        }
      }, currentDelay);
      currentDelay += item.delay;
    });
  }, [onFinished]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black font-code text-sm sm:text-base">
      <div className="p-4">
        {lines.map((line, index) => (
          <p key={index} className={line.className}>
            {line.text}
          </p>
        ))}
        {showCursor && (
          <div className="flex items-center">
            <span className="animate-blinking-cursor block h-4 w-2 bg-green-400"></span>
          </div>
        )}
      </div>
    </div>
  );
}
