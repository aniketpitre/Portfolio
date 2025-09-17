'use client';

import { EXPERIENCE } from '@/lib/app-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Terminal } from 'lucide-react';

export function AuditLogView() {
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
                <div className="pl-4 border-l-2 border-primary ml-2">
                  <p className="text-base text-foreground mb-3">{entry.details}</p>
                  {entry.awards.length > 0 && (
                     <div className="flex flex-wrap gap-2">
                        {entry.awards.map(award => (
                            <Badge key={award} variant="secondary" className="text-accent border-accent/50">{award}</Badge>
                        ))}
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
