'use client';
import { EDUCATION_HISTORY } from '@/lib/app-data';
import { GraduationCap, Calendar, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import './EducationView.css';

export function EducationView() {
  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-8 flex items-center gap-2">
        <GraduationCap />
        <span>Academic Trajectory</span>
      </h1>
      <div className="timeline-container">
        <Accordion type="single" collapsible className="w-full" defaultValue={EDUCATION_HISTORY[0].id}>
          {EDUCATION_HISTORY.map((edu) => (
            <AccordionItem value={edu.id} key={edu.id} className="timeline-item border-b-0">
              <div className="timeline-icon-container">
                  <div className="timeline-icon bg-primary/20 border-primary border-2">
                      <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
              </div>
              <AccordionTrigger className="timeline-trigger hover:no-underline">
                <div className="timeline-content">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h2 className="text-xl font-headline text-left text-foreground">{edu.institution}</h2>
                      <p className="text-md text-left text-accent">{edu.degree}</p>
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200 text-accent" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="timeline-details-content">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.years}</span>
                    </div>
                </div>
                <p className="text-base text-muted-foreground/90">{edu.details}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
