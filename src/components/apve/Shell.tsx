'use client';

import { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Terminal, X, GripHorizontal } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { processCommand } from '@/lib/commands';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export default function Shell() {
  const { history, pushToHistory, toggleShell, ...context } = useAppContext();
  const [input, setInput] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [height, setHeight] = useState(200); // Default height
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTo({ top: viewport.scrollHeight });
      }
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (context.isExited) return;

    const result = processCommand(input, { history, pushToHistory, toggleShell, ...context });
    if (result.command || result.output) {
      pushToHistory(result);
    }
    setInput('');
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.drag-handle')) return;
    inputRef.current?.focus();
  };
  
  const onDrag = (_e: any, data: any) => {
    const newHeight = height - data.deltaY;
    // Add constraints to height
    if (newHeight > 100 && newHeight < window.innerHeight * 0.8) {
      setHeight(newHeight);
    }
  };


  return (
    <Draggable
        nodeRef={shellRef}
        axis="y"
        handle=".drag-handle"
        position={{ x: 0, y: 0 }}
        onDrag={onDrag}
    >
        <div
            ref={shellRef}
            style={{ height: `${height}px` }}
            className={cn(
                "relative w-full flex-shrink-0 bg-background/80 font-code text-sm text-foreground overflow-hidden",
                "animate-in fade-in slide-in-from-bottom-10"
            )}
            onClick={handleContainerClick}
        >
            <div className="drag-handle absolute top-0 left-0 right-0 h-4 cursor-ns-resize flex items-center justify-center border-t border-b border-border bg-background/50 group z-20">
                <GripHorizontal className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
            </div>

            <div className="absolute left-2 top-5 z-10 flex items-center gap-2 text-xs text-muted-foreground">
                <Terminal size={16} />
                <span>SHELL</span>
            </div>
            <Button variant="ghost" size="icon" className="absolute right-2 top-4 h-6 w-6 z-10" onClick={toggleShell}>
                <X size={16} />
            </Button>

            <ScrollArea className="h-full w-full pt-12" ref={scrollAreaRef}>
                <div className="p-4">
                {history.map((item) => (
                    <div key={item.id}>
                    <div className="flex items-center">
                        <span className="text-primary">guest@aniketpitre:~$</span>
                        <span className="ml-2">{item.command}</span>
                    </div>
                    <div className="leading-snug">{item.output}</div>
                    </div>
                ))}
                <form onSubmit={handleCommand} className="flex items-center">
                    <label htmlFor="shell-input" className="text-primary">guest@aniketpitre:~$</label>
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
    </Draggable>
  );
}
