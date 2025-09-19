'use client';

import { EXPERIENCE } from '@/lib/app-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import './EducationView.css'; // Reusing the timeline styles

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
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export function AuditLogView() {
  const { setView, setActivePod } = useAppContext();

  const handleProjectClick = (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation(); // Prevent the accordion from toggling
    setView('kubelet');
    setActivePod(projectId);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1
        className="font-headline font-bold text-2xl text-foreground mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h1>
      <div className="timeline-container">
        <Accordion type="single" collapsible className="w-full">
            {EXPERIENCE.map((entry, index) => (
            <motion.div key={entry.id} className="timeline-item" variants={itemVariants}>
                <div className="timeline-icon-container">
                    <div className="timeline-icon bg-background/50 border border-border">
                        <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                </div>
                <AccordionItem value={`item-${index}`} className="border-b-0">
                    <AccordionTrigger className="timeline-trigger">
                        <div className="timeline-content">
                            <time className="block mb-1 text-sm font-normal leading-none text-muted-foreground">{entry.timestamp}</time>
                            <h2 className="text-lg font-semibold text-foreground">{entry.role}</h2>
                            <p className="text-md text-primary">{entry.details.split('\n')[0]}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="timeline-details-content">
                        <div className="space-y-4 text-muted-foreground/90">
                        <p className="whitespace-pre-wrap">{entry.details.substring(entry.details.indexOf('\n') + 1)}</p>
                        
                        {entry.projects && entry.projects.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-foreground/90 mb-2 flex items-center gap-2">
                                    <Briefcase size={16} />
                                    <span>Key Projects</span>
                                </h4>
                                <div className="flex flex-col items-start gap-1">
                                {entry.projects.map(proj => (
                                    <Button 
                                    key={proj.id} 
                                    variant="link" 
                                    className="p-0 h-auto text-muted-foreground hover:text-primary"
                                    onClick={(e) => handleProjectClick(e, proj.id)}
                                    >
                                        {proj.name}
                                    </Button>
                                ))}
                                </div>
                            </div>
                        )}

                        {entry.awards && entry.awards.length > 0 && (
                            <div>
                                <h4 className="font-semibold text-foreground/90 mb-2">Accomplishments</h4>
                                <div className="flex flex-wrap gap-2">
                                    {entry.awards.map(award => (
                                        <Badge key={award} variant="secondary">{award}</Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </motion.div>
            ))}
        </Accordion>
      </div>
    </motion.div>
  );
}
