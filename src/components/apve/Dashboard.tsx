'use client';

import { useAppContext } from '@/context/AppContext';
import SystemMonitor from './SystemMonitor';
import Viewport from './Viewport';
import Shell from './Shell';
import { Button } from '../ui/button';
import { TerminalSquare } from 'lucide-react';

const ExitScreen = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background font-code text-lg text-foreground">
    <p>Session Closed.</p>
  </div>
);

export default function Dashboard() {
  const { isExited, isShellOpen, toggleShell } = useAppContext();

  if (isExited) {
    return <ExitScreen />;
  }

  return (
    <div className="relative flex h-screen w-full flex-col md:flex-row bg-background font-body text-foreground">
      <SystemMonitor />
      <main className="flex flex-1 flex-col overflow-hidden bg-background/80 backdrop-blur-sm">
        <Viewport />
        {isShellOpen && <Shell />}
      </main>
      {!isShellOpen && (
        <Button 
          onClick={toggleShell}
          variant="ghost" 
          size="sm" 
          className="absolute bottom-4 left-4 md:left-[calc(16rem+1rem)] z-30 animate-in fade-in"
        >
          <TerminalSquare />
          <span className="ml-2">Launch Shell</span>
        </Button>
      )}
    </div>
  );
}
