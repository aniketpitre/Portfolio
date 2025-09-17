'use client';

import { EXPERIENCE } from '@/lib/app-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Terminal, Briefcase, Link } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';

export function AuditLogView() {
  const { setView, setActivePod } = useAppContext();

  const handleProjectLink = (projectId: string) => {
    setView('kubelet');
    setActivePod(projectId);
  };


  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
        <Terminal />
        <span>/var/log/career.log</span>
      </h1>
      <div className="font-code text-sm bg-card p-4 rounded-lg border border-border">
        <Accordion type="single" collapsible className="w-full">
          {EXPERIENCE.map((entry) => (
            <AccordionItem value={entry.id} key={entry.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-left">
                  <span className="text-muted-foreground">{entry.timestamp}</span>
                  <span className="text-green-400">level={entry.level}</span>
                  <span className="text-cyan-400">event={entry.event}</span>
                  <span className="text-yellow-400">user={entry.user}</span>
                  <span className="text-purple-400">role={entry.role}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-4 border-l-2 border-primary ml-2 space-y-4">
                  <p className="text-base text-foreground whitespace-pre-wrap">{entry.details}</p>
                  
                  {entry.projects && entry.projects.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-accent/90 mb-2 flex items-center gap-2">
                            <Briefcase size={16} />
                            <span>Key Projects</span>
                        </h4>
                        <div className="space-y-2">
                        {entry.projects.map(proj => (
                            <div key={proj.id}>
                                <Button
                                    variant="link"
                                    className="p-0 h-auto text-base text-foreground hover:text-accent"
                                    onClick={() => handleProjectLink(proj.id)}
                                >
                                    <Link size={14} className="mr-2" />
                                    {proj.name}
                                </Button>
                            </div>
                        ))}
                        </div>
                    </div>
                  )}

                  {entry.awards && entry.awards.length > 0 && (
                     <div>
                        <h4 className="font-semibold text-accent/90 mb-2">Accomplishments</h4>
                        <div className="flex flex-wrap gap-2">
                            {entry.awards.map(award => (
                                <Badge key={award} variant="secondary" className="text-accent border-accent/50">{award}</Badge>
                            ))}
                        </div>
                     </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
