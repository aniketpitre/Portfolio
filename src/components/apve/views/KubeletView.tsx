'use client';
import { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '@/lib/app-data';
import { Server, X, CheckCircle, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/context/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { K8sValidatorDemo } from './K8sValidatorDemo';
import { ScrollArea } from '@/components/ui/scroll-area';
import Draggable from 'react-draggable';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';


const DeploymentLogView = ({ onFinished }: { onFinished: () => void }) => {
    const [logs, setLogs] = useState<{ text: string, status: string }[]>([]);
    
    useEffect(() => {
        const deploymentLogs = [
            { text: 'Starting deployment for pod...', status: 'pending' },
            { text: 'Requesting resources...', status: 'pending' },
            { text: 'Resource allocation successful.', status: 'success' },
            { text: 'Pulling container image...', status: 'pending' },
            { text: 'Image pull complete.', status: 'success' },
            { text: 'Creating container...', status: 'pending' },
            { text: 'Container created.', status: 'success' },
            { text: 'Running health checks...', status: 'pending' },
            { text: 'Health checks passed. Deployment successful.', status: 'success' },
        ];
        let delay = 0;
        deploymentLogs.forEach((log, index) => {
            delay += Math.random() * 250 + 50;
            setTimeout(() => {
                setLogs(prev => [...prev, log]);
                if (index === deploymentLogs.length - 1) {
                    setTimeout(onFinished, 500);
                }
            }, delay);
        });
    }, [onFinished]);

    return (
        <div className="bg-secondary font-code text-xs p-4 rounded-lg h-56">
            <ScrollArea className="h-full">
                {logs.map((log, i) => (
                    <div key={i} className="flex items-center gap-2">
                        {log.status === 'success' ? <CheckCircle className="h-3 w-3 text-green-500" /> : <div className="h-3 w-3 animate-spin rounded-full border-2 border-dashed border-primary" />}
                        <p className="text-muted-foreground">{log.text}</p>
                    </div>
                ))}
            </ScrollArea>
        </div>
    )
}

const ProjectDetail = ({ project, onClose }: { project: any, onClose: () => void }) => {
    const [showContent, setShowContent] = useState(false);
    const nodeRef = useRef(null);
    const isMobile = useIsMobile();

    return (
        <Draggable nodeRef={nodeRef} disabled={isMobile}>
            <motion.div 
                ref={nodeRef} 
                className="w-full max-w-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Card className="bg-background/80 backdrop-blur-md border-border">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-2xl font-headline text-primary">{project.name}</CardTitle>
                                <CardDescription>deployment/{project.id}</CardDescription>
                            </div>
                            <Button variant="ghost" size="icon" onClick={onClose}><X className="h-4 w-4" /></Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {!showContent ? <DeploymentLogView onFinished={() => setShowContent(true)} /> : (
                            <motion.div 
                                className="space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="text-muted-foreground">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech: string) => (
                                    <Badge key={tech} variant="secondary">{tech}</Badge>
                                    ))}
                                </div>
                                <div className="border-t border-border pt-4">
                                    {project.id === 'k8s-validator' ? <K8sValidatorDemo /> : (
                                        <div className="text-center p-4">
                                          <p className="text-muted-foreground mb-4">This is a mock deployment. Visit the live project for a full demo.</p>
                                          <Button asChild>
                                              <a href={project.link || '#'} target="_blank" rel="noopener noreferrer">
                                                  View Live Project <ExternalLink className="ml-2" />
                                              </a>
                                          </Button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </Draggable>
    );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


export function KubeletView() {
  const { activePod, setActivePod } = useAppContext();

  const handlePodClick = (podId: string) => {
    if (activePod === podId) {
        setActivePod(null);
    } else {
        setActivePod(podId);
    }
  };
  
  const handleCloseDetail = () => {
    setActivePod(null);
  }

  const selectedProject = activePod ? PROJECTS.find(p => p.id === activePod) : null;

  return (
    <div>
        <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="font-headline text-2xl font-bold text-foreground mb-2">Projects</h1>
            <p className="text-muted-foreground mb-6">A selection of my projects. Click on a pod to view details.</p>
        </motion.div>
      
        <AnimatePresence>
            {selectedProject && (
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-20 bg-black/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
                </motion.div>
            )}
        </AnimatePresence>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {PROJECTS.map(p => {
            const statusColor = p.status === 'Running' ? 'text-green-500' : 'text-yellow-500';
            return (
              <motion.div key={p.id} variants={itemVariants}>
                <Card 
                  className="cursor-pointer bg-transparent hover:border-primary/50 transition-colors h-full" 
                  onClick={() => handlePodClick(p.id)}
                >
                  <CardHeader>
                    <CardTitle className="truncate flex items-center gap-2">
                      <Server size={18} /> {p.name}
                    </CardTitle>
                    <CardDescription>pod/{p.id}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground h-16 overflow-hidden text-ellipsis">
                      {p.description}
                    </p>
                    <div className="flex items-center gap-1.5 mt-4 text-xs">
                      <div className={cn('w-2 h-2 rounded-full', statusColor === 'text-green-500' ? 'bg-green-500' : 'bg-yellow-500')}></div>
                      <p className={cn("font-medium", statusColor)}>{p.status}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
    </div>
  );
}
