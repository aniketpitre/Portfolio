'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Terminal, MousePointerClick, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function WelcomeGuide({ open, onClose }: { open: boolean, onClose: () => void }) {

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-md bg-background/80 backdrop-blur-md border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-headline text-primary flex items-center gap-2">
            <Zap />
            Welcome to Aniket's Environment
          </DialogTitle>
          <DialogDescription>
            This portfolio is an interactive virtual desktop. Here are a few tips to get started.
          </DialogDescription>
        </DialogHeader>

        <motion.div 
            className="space-y-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <Terminal className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Use the Shell</h3>
              <p className="text-muted-foreground">
                The terminal at the bottom is fully functional. Try commands like{' '}
                <code className="bg-muted px-1 py-0.5 rounded text-primary">help</code>,{' '}
                <code className="bg-muted px-1 py-0.5 rounded text-primary">ls</code>, or{' '}
                <code className="bg-muted px-1 py-0.5 rounded text-primary">neofetch</code>.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MousePointerClick className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Navigate with the UI</h3>
              <p className="text-muted-foreground">
                Use the sidebar (or the menu on mobile) to jump directly to any section.
              </p>
            </div>
          </div>
           <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Discover Easter Eggs</h3>
              <p className="text-muted-foreground">
                There are hidden commands and interactions to find. Try running <code className="bg-muted px-1 py-0.5 rounded text-primary">sudo</code>... if you dare. Happy exploring!
              </p>
            </div>
          </div>
        </motion.div>

        <DialogFooter className="mt-4">
          <Button onClick={onClose} className="w-full">
            Got It, Let's Go
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
