'use client';

import { useState, useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { processCommand } from '@/lib/commands';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Shell() {
  const { history, pushToHistory, ...context } = useAppContext();
  const [input, setInput] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight });
    }
  }, [history]);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);


  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (context.isExited) return;

    const result = processCommand(input, { history, pushToHistory, ...context });
    if (result.command || result.output) {
      pushToHistory(result);
    }
    setInput('');
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="relative h-1/3 md:h-1/4 min-h-[150px] border-t-2 border-primary/50 bg-background/80 backdrop-blur-sm font-code text-sm text-foreground"
      onClick={handleContainerClick}
    >
      <div className="absolute left-2 top-2 z-10 flex items-center gap-2 text-xs text-accent">
        <Terminal size={16} />
        <span>APVE SHELL</span>
      </div>
      <ScrollArea className="h-full w-full" ref={scrollAreaRef}>
        <div className="p-4 pt-8">
          {history.map((item) => (
            <div key={item.id}>
              <div className="flex items-center">
                <span className="text-accent">guest@apitre.io:~$</span>
                <span className="ml-2">{item.command}</span>
              </div>
              <div className="leading-snug">{item.output}</div>
            </div>
          ))}
          <form onSubmit={handleCommand} className="flex items-center">
            <label htmlFor="shell-input" className="text-accent">guest@apitre.io:~$</label>
            <input
              id="shell-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="ml-2 w-full flex-1 bg-transparent focus:outline-none"
              autoComplete="off"
              spellCheck="false"
              autoFocus
              disabled={context.isExited}
            />
          </form>
        </div>
      </ScrollArea>
    </div>
  );
}
