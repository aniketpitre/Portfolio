'use client';

import { useAppContext } from '@/context/AppContext';
import SystemMonitor from './SystemMonitor';
import Viewport from './Viewport';
import Shell from './Shell';
import { Button } from '../ui/button';
import { TerminalSquare, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';

const ExitScreen = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background font-code text-lg text-foreground">
    <p>Session Closed.</p>
  </div>
);

export default function Dashboard() {
  const { isExited, isShellOpen, toggleShell } = useAppContext();
  const [isSheetOpen, setSheetOpen] = useState(false);

  if (isExited) {
    return <ExitScreen />;
  }

  return (
    <div className="relative flex h-screen w-full flex-col md:flex-row bg-background font-body text-foreground">
      <div className="hidden md:block">
        <SystemMonitor onLinkClick={() => {}} />
      </div>
      
      <div className="md:hidden p-2 flex items-center justify-between border-b border-border">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
                <SystemMonitor onLinkClick={() => setSheetOpen(false)} />
            </SheetContent>
          </Sheet>
          <h1 className="font-headline text-lg font-bold text-foreground">Aniket Pitre</h1>
      </div>


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
