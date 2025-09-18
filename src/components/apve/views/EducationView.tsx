
'use client';
import { EDUCATION_HISTORY } from '@/lib/app-data';
import { GraduationCap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import './EducationView.css';


export function EducationView() {
  return (
    <div>
      <h1 className="font-headline text-2xl font-bold text-foreground mb-8">Education</h1>
      <div className="timeline-container">
        <Accordion type="single" collapsible className="w-full">
          {EDUCATION_HISTORY.map((edu, index) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-icon-container">
                <div className="timeline-icon bg-background/50 border border-border">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <AccordionItem value={`item-${index}`} className="border-b-0">
                <AccordionTrigger className="timeline-trigger">
                    <div className="timeline-content">
                        <time className="block mb-1 text-sm font-normal leading-none text-muted-foreground">{edu.years}</time>
                        <h2 className="text-lg font-semibold text-foreground">{edu.degree}</h2>
                        <p className="text-md text-primary">{edu.institution}</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="timeline-details-content">
                  <p className="text-base font-normal text-muted-foreground/90">{edu.description}</p>
                  <p className="text-sm font-medium text-foreground mt-2">{edu.details}</p>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
