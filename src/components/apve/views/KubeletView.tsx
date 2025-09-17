'use client';
import { useState } from 'react';
import { PROJECTS } from '@/lib/app-data';
import { Server, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/context/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { K8sValidatorDemo } from './K8sValidatorDemo';

// This is a special component to render the whale icon
const WhaleIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="w-24 h-24 text-blue-400" fill="currentColor">
    <path d="M6.936 18.293c.276.54.12 1.196-.363 1.545l-1.442 1.05C2.633 22.185 0 20.925 0 18.293c0-2.38 1.938-4.32 4.32-4.32h.568c.81 0 1.58.33 2.14 1.08l-.092 3.24zM22.8 9.6c.72 0 1.2-1.08 1.2-2.4s-.48-2.4-1.2-2.4c-.72 0-1.2 1.08-1.2 2.4s.48 2.4 1.2 2.4zm-1.2-6c.72 0 1.2-.6 1.2-1.2s-.48-1.2-1.2-1.2-1.2.6-1.2 1.2.48 1.2 1.2 1.2zM24 12c0-2.016-.84-3.84-2.4-4.8v3.6c0 .888.336 1.68 1.2 2.4.24.24.48.36.72.6l.48-.84zM19.2 1.2c.72 0 1.2-.6 1.2-1.2s-.48-1.2-1.2-1.2-1.2.6-1.2 1.2.48 1.2 1.2 1.2zm-1.2 1.2c-.72 0-1.2.6-1.2 1.2s.48 1.2 1.2 1.2c.72 0 1.2-.6 1.2-1.2s-.48-1.2-1.2-1.2zm-1.2 1.2c-.72 0-1.2.6-1.2 1.2s.48 1.2 1.2 1.2c.72 0 1.2-.6 1.2-1.2s-.48-1.2-1.2-1.2zM19.116 6c-.528.816-1.332 1.2-2.4 1.2H9.6c-2.304 0-4.44-.84-5.904-2.4C1.2 3.12 0 4.8 0 7.2v1.2C0 10.8.96 13.2 2.4 14.4l1.488-1.08c.528-.384.624-1.08.336-1.68l-1.056-1.872c.48.12.96.12 1.44.12h10.32c1.716 0 3.204-1.008 3.936-2.52.48-.96.72-2.04.72-3.12 0-.24-.012-.48-.024-.72h.012z"/>
  </svg>
);


const Pod = ({ project, isActive, onClick }: { project: any, isActive: boolean, onClick: () => void }) => {
  const statusColor = project.status === 'Running' ? 'bg-green-500' : 'bg-blue-500';
  return (
    <div
      onClick={onClick}
      className={cn(
        'absolute w-40 h-24 rounded-lg transition-all duration-500 cursor-pointer group',
        'hover:scale-110 hover:-translate-y-2',
        isActive ? 'scale-[2.5] z-30' : 'z-10'
      )}
      style={{
        transformStyle: 'preserve-3d',
        top: project.pos.y,
        left: project.pos.x,
        transform: `translateX(-50%)`,
      }}
    >
      <div className="absolute inset-0 bg-card border border-border rounded-lg transform transition-transform duration-500 group-hover:translate-z-2">
        <div className="p-2 h-full flex flex-col justify-between">
          <div>
            <p className="text-sm font-bold truncate">{project.name}</p>
            <p className="text-xs text-muted-foreground">pod/{project.id}</p>
          </div>
          <div className="flex items-center gap-1">
            <div className={cn('w-2 h-2 rounded-full', statusColor)}></div>
            <p className="text-xs">{project.status}</p>
          </div>
        </div>
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
      </div>
    </div>
  );
};

const ProjectDetail = ({ project, onClose }: { project: any, onClose: () => void }) => {
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center">
       <Card className="w-full max-w-2xl bg-background/90 backdrop-blur-sm border-primary animate-in fade-in zoom-in-95">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-headline text-accent">{project.name}</CardTitle>
              <CardDescription>deployment/{project.id}</CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}><X className="h-4 w-4" /></Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <div className="border-t border-border pt-4">
            {project.id === 'k8s-validator' ? <K8sValidatorDemo /> : <p className="text-center text-muted-foreground">Interactive demo would be displayed here.</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const DeploymentAnimation = ({ onFinished }: { onFinished: () => void }) => {
    return (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm animate-in fade-in">
            <WhaleIcon />
            <p className="font-code text-accent animate-pulse mt-4">Deploying container to pod...</p>
        </div>
    )
}

export function KubeletView() {
  const { activePod, setActivePod } = useAppContext();
  const [isDeploying, setIsDeploying] = useState(false);

  const podProjects = PROJECTS.map((p, i) => {
    const numCols = 3;
    const xPositions = [20, 50, 80]; // in percent
    const yOffset = 15; // in percent
    const ySpacing = 30; // in percent

    return {
      ...p,
      pos: {
        x: `${xPositions[i % numCols]}%`,
        y: `${yOffset + Math.floor(i / numCols) * ySpacing}%`,
      },
    };
  });

  const handlePodClick = (podId: string) => {
    if (activePod === podId) {
        setActivePod(null);
    } else {
        setIsDeploying(true);
        setActivePod(podId);
        setTimeout(() => setIsDeploying(false), 2000); // Animation duration
    }
  };
  
  const selectedProject = activePod ? podProjects.find(p => p.id === activePod) : null;

  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
        <Server />
        <span>Kubernetes Cluster: Pods</span>
      </h1>
      <div
        className="relative h-[80vh] w-full bg-card rounded-lg border-border p-4 overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        <div className={cn("absolute inset-0 transition-all duration-700", activePod ? 'opacity-20 blur-sm' : 'opacity-100')}>
            {podProjects.map(p => (
            <Pod key={p.id} project={p} isActive={activePod === p.id} onClick={() => handlePodClick(p.id)} />
            ))}
        </div>
        
        {activePod && isDeploying && <DeploymentAnimation onFinished={() => setIsDeploying(false)} />}
        {activePod && !isDeploying && selectedProject && (
          <ProjectDetail project={selectedProject} onClose={() => setActivePod(null)} />
        )}
      </div>
    </div>
  );
}
