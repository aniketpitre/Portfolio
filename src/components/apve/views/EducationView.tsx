
'use client';
import { EDUCATION_HISTORY } from '@/lib/app-data';
import { GraduationCap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import './EducationView.css';

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

export function EducationView() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1 
        className="font-headline text-2xl font-bold text-foreground mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h1>
      <div className="timeline-container">
        <Accordion type="single" collapsible className="w-full">
          {EDUCATION_HISTORY.map((edu, index) => (
            <motion.div key={edu.id} className="timeline-item" variants={itemVariants}>
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
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
}
