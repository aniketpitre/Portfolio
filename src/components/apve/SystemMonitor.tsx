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
        <Progress value={value} className="h-1 bg-primary/20" />
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
    <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card/20 p-4 space-y-6">
      <div>
        <h1 className="font-headline text-xl text-accent text-glow">Aniket Pitre</h1>
        <p className="text-sm text-muted-foreground">Virtual Environment</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-muted-foreground">SYSTEM STATUS</h2>
        <StatBar icon={Cpu} label="CPU" value={cpu} unit="%" />
        <StatBar icon={MemoryStick} label="Memory" value={mem} unit="%" />
        <StatBar icon={Network} label="Network I/O" value={net} unit="KB/s" />
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto">
        <h2 className="text-sm font-semibold text-muted-foreground">RUNNING DAEMONS</h2>
        <TooltipProvider>
            {daemons.map(daemon => (
              <Tooltip key={daemon.id} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <button
                        onClick={() => setView(daemon.id as any)}
                        className={cn(
                        "w-full flex items-center gap-3 p-2 rounded-md text-left text-sm transition-colors",
                        view === daemon.id
                            ? 'bg-primary/80 text-primary-foreground'
                            : 'hover:bg-primary/20 text-muted-foreground hover:text-foreground'
                        )}
                    >
                        <daemon.icon size={16} className={cn(view === daemon.id ? "text-accent" : "")} />
                        <div className="flex-1 truncate">
                        <p className="font-medium">{daemon.label}</p>
                        <p className="text-xs text-muted-foreground/80">{daemon.name}</p>
                        </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="font-sans">
                      <p>{daemon.description}</p>
                  </TooltipContent>
              </Tooltip>
            ))}
        </TooltipProvider>
      </div>
      
      <div className="text-xs text-muted-foreground">
        <p>IP: 10.1.1.5</p>
        <p>User: guest</p>
        <p>Uptime: {Math.floor(Date.now() / 1000 / 60)}m</p>
      </div>
    </aside>
  );
}
