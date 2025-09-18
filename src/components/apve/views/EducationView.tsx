'use client';
import { EDUCATION_HISTORY } from '@/lib/app-data';
import { GraduationCap } from 'lucide-react';

export function EducationView() {
  return (
    <div>
      <h1 className="font-headline text-2xl font-bold text-foreground mb-8">Education</h1>
      <div className="relative border-l-2 border-primary/30">
        {EDUCATION_HISTORY.map((edu, index) => (
          <div key={edu.id} className="mb-10 ml-8">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-background">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </span>
            <h2 className="text-lg font-semibold text-foreground">{edu.degree}</h2>
            <p className="text-md text-primary">{edu.institution}</p>
            <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">{edu.years}</time>
            <p className="text-base text-muted-foreground/90">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
