'use client';

import { useAppContext } from '@/context/AppContext';
import SystemMonitor from './SystemMonitor';
import Viewport from './Viewport';
import Shell from './Shell';

const ExitScreen = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background font-code text-lg text-foreground">
    <p>Session Closed.</p>
  </div>
);

export default function Dashboard() {
  const { isExited } = useAppContext();

  if (isExited) {
    return <ExitScreen />;
  }

  return (
    <div className="flex h-screen w-full flex-col md:flex-row bg-background font-body text-foreground">
      <SystemMonitor />
      <main className="flex flex-1 flex-col overflow-hidden bg-background/80 backdrop-blur-sm">
        <Viewport />
        <Shell />
      </main>
    </div>
  );
}
