'use client';
import { EDUCATION_HISTORY } from '@/lib/app-data';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import './EducationView.css';

export function EducationView() {
  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-8 flex items-center gap-2">
        <GraduationCap />
        <span>Academic Trajectory</span>
      </h1>
      <div className="timeline-container">
        {EDUCATION_HISTORY.map((edu, index) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-icon-container">
                <div className="timeline-icon bg-primary/20 border-primary border-2">
                    <GraduationCap className="h-6 w-6 text-accent" />
                </div>
            </div>
            <div className="timeline-content">
              <h2 className="text-xl font-headline text-foreground">{edu.institution}</h2>
              <p className="text-md text-accent">{edu.degree}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1 mb-3">
                  <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.years}</span>
                  </div>
              </div>
              <p className="text-base text-muted-foreground/80">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
