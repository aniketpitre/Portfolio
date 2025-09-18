'use client';

import { useState } from 'react';
import { Cpu, Server, Network, MemoryStick, ShieldCheck, User, GraduationCap, Mail, BotMessageSquare, Wrench } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { useInterval } from '@/hooks/use-interval';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const daemons = [
  { id: 'user_profile', name: 'user_profile.daemon', icon: User, label: 'About Me', description: 'Displays user biography and social links.' },
  { id: 'kubelet', name: 'kubelet.service', icon: Server, label: 'Projects', description: 'Manages and displays project pods.' },
  { id: 'auditd', name: 'auditd.service', icon: BotMessageSquare, label: 'Experience', description: 'Logs professional career events.' },
  { id: 'education', name: 'education.log', icon: GraduationCap, label: 'Education', description: 'Shows academic history and trajectory.' },
  { id: 'credentials', name: 'credentials.manager', icon: GraduationCap, label: 'Credentials', description: 'Manages awards and certifications.' },
  { id: 'skills', name: 'skills.conf', icon: Wrench, label: 'Skills', description: 'Lists technical and soft skills.' },
  { id: 'contact', name: 'sendmail.service', icon: Mail, label: 'Contact', description: 'Opens a secure message relay.' },
  { id: 'system_health', name: 'system_health.service', icon: ShieldCheck, label: 'System Health', description: 'Monitors system performance metrics.' },
];

const StatBar = ({ icon: Icon, label, value, unit }: { icon: React.ElementType, label: string, value: number, unit: string }) => (
    <div>
        <div className="flex justify-between items-center text-xs mb-1">
            <div className="flex items-center gap-2 text-muted-foreground">
                <Icon size={14} />
                <span>{label}</span>
            </div>
            <span className="font-mono">{value.toFixed(1)}{unit}</span>
        </div>
        <Progress value={value} className="h-1 bg-secondary" indicatorClassName="bg-primary" />
    </div>
);

export default function SystemMonitor() {
  const { view, setView } = useAppContext();
  const [cpu, setCpu] = useState(25);
  const [mem, setMem] = useState(40);
  const [net, setNet] = useState(10);

  useInterval(() => {
    setCpu(Math.random() * 50 + 10);
    setMem(Math.random() * 20 + 30);
    setNet(Math.random() * 15 + 5);
  }, 2000);

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border bg-background/30 p-4 space-y-6">
      <div>
        <h1 className="font-headline text-xl font-bold text-foreground">Aniket Pitre</h1>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">System Status</h2>
        <StatBar icon={Cpu} label="CPU" value={cpu} unit="%" />
        <StatBar icon={MemoryStick} label="Memory" value={mem} unit="%" />
        <StatBar icon={Network} label="Network I/O" value={net} unit="KB/s" />
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto">
        <h2 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Views</h2>
        <TooltipProvider>
            {daemons.map(daemon => (
              <Tooltip key={daemon.id} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <button
                        onClick={() => setView(daemon.id as any)}
                        className={cn(
                        "w-full flex items-center gap-3 p-2 rounded-md text-left text-sm transition-colors",
                        view === daemon.id
                            ? 'bg-primary/10 text-primary-foreground font-semibold'
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        )}
                    >
                        <daemon.icon size={16} />
                        <div className="flex-1 truncate">
                          <p>{daemon.label}</p>
                        </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="font-sans bg-background text-foreground border-border">
                      <p>{daemon.description}</p>
                  </TooltipContent>
              </Tooltip>
            ))}
        </TooltipProvider>
      </div>
      
      <div className="text-xs text-muted-foreground font-mono">
        <p>IP: 127.0.0.1</p>
        <p>USER: guest</p>
      </div>
    </aside>
  );
}
