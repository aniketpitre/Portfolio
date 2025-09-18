'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const sequence = [
  { text: 'Connecting to aniketpitre.com (192.168.1.1)...', delay: 500 },
  { text: 'Connection established.', delay: 750 },
  { text: 'Requesting guest-level access...', delay: 600 },
  { text: 'Authenticating...', delay: 800 },
  { text: 'ACCESS GRANTED.', delay: 250, className: 'text-green-500 flex items-center justify-center gap-2' },
  { text: 'Loading virtual environment...', delay: 750 },
  { text: 'Welcome.', delay: 500, className: 'text-primary' },
];

export default function LoadingSequence({ booting, onFinished, onEnter }: { booting: boolean; onFinished: () => void; onEnter: () => void; }) {
  const [lines, setLines] = useState<{ text: string; className?: string }[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const sequenceStarted = useRef(false);

  useEffect(() => {
    if (sequenceStarted.current) return;
    sequenceStarted.current = true;

    const timeouts: NodeJS.Timeout[] = [];
    let currentDelay = 500;

    sequence.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, { text: item.text, className: item.className }]);
        if (index === sequence.length - 1) {
          setShowCursor(false);
          const finishTimeout = setTimeout(onFinished, 1000);
          timeouts.push(finishTimeout);
        }
      }, currentDelay);
      timeouts.push(timeout);
      currentDelay += item.delay;
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [onFinished]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background font-code text-sm sm:text-base">
      <div className="p-4 text-center space-y-2">
        {lines.map((line, index) => (
          <p key={index} className={line.className}>
            {line.text.includes('ACCESS GRANTED') ? <><CheckCircle size={16} />{line.text}</> : line.text}
          </p>
        ))}
        {showCursor && (
          <div className="flex items-center justify-center">
            <p className="text-primary mr-2">guest@aniketpitre:~$</p>
            <span className="animate-blinking-cursor block h-4 w-2 bg-primary"></span>
          </div>
        )}
        {!booting && (
          <div className="mt-8 animate-in fade-in">
              <Button onClick={onEnter} variant="outline" size="lg">
                  View Portfolio
                  <ArrowRight className="ml-2" />
              </Button>
          </div>
        )}
      </div>
    </div>
  );
}
