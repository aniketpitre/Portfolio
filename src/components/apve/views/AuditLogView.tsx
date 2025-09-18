'use client';

import { EXPERIENCE } from '@/lib/app-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

export function AuditLogView() {
  return (
    <div>
      <h1 className="font-headline font-bold text-2xl text-foreground mb-6">Experience</h1>
      <div className="space-y-8">
        {EXPERIENCE.map((entry) => (
          <div key={entry.id} className="border-l-2 border-primary/30 pl-6 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-background" />
            <p className="text-sm text-muted-foreground">{entry.timestamp}</p>
            <h2 className="text-lg font-semibold text-foreground">{entry.role}</h2>
            <p className="text-md text-muted-foreground font-medium">{entry.details.split('\n')[0]}</p>
            
            <Accordion type="single" collapsible className="w-full mt-2">
              <AccordionItem value="details" className="border-b-0">
                <AccordionTrigger className="text-sm hover:no-underline text-primary">View Details</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="whitespace-pre-wrap">{entry.details.substring(entry.details.indexOf('\n') + 1)}</p>
                    
                    {entry.projects && entry.projects.length > 0 && (
                      <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                              <Briefcase size={16} />
                              <span>Key Projects</span>
                          </h4>
                          <ul className="list-disc list-inside space-y-1">
                            {entry.projects.map(proj => (
                                <li key={proj.id}>
                                    {proj.name}
                                </li>
                            ))}
                          </ul>
                      </div>
                    )}

                    {entry.awards && entry.awards.length > 0 && (
                       <div>
                          <h4 className="font-semibold text-foreground mb-2">Accomplishments</h4>
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
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
