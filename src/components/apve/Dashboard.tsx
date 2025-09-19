'use client';

import { useAppContext } from '@/context/AppContext';
import SystemMonitor from './SystemMonitor';
import Viewport from './Viewport';
import Shell from './Shell';
import { Button } from '../ui/button';
import { TerminalSquare, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExitScreen = () => (
  <motion.div 
    className="flex h-screen w-full items-center justify-center bg-background font-code text-lg text-foreground"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <p>Session Closed.</p>
  </motion.div>
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
        <Shell />
      </main>
      <AnimatePresence>
      {!isShellOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-4 left-4 md:left-[calc(16rem+1rem)] z-30"
        >
          <Button 
            onClick={toggleShell}
            variant="ghost" 
            size="sm" 
          >
            <TerminalSquare />
            <span className="ml-2">Launch Shell</span>
          </Button>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
