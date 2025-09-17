'use client';
import { EDUCATION_HISTORY } from '@/lib/app-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export function EducationView() {
  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
        <GraduationCap />
        <span>Education History</span>
      </h1>
      <div className="space-y-6">
        {EDUCATION_HISTORY.map((edu) => (
          <Card key={edu.id} className="bg-card">
            <CardHeader>
              <CardTitle className="text-xl">{edu.institution}</CardTitle>
              <CardDescription>{edu.degree} &mdash; {edu.years}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
