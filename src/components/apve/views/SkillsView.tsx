'use client';
import { SKILLS_DATA } from '@/lib/app-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wrench } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, className }: { title: string, icon: React.ElementType, skills: string[], className?: string }) => (
    <Card className={`bg-card/60 border-primary/20 hover:border-primary transition-all transform hover:-translate-y-1 border-glow ${className}`}>
        <CardHeader>
            <CardTitle className="flex items-center gap-3 text-accent text-lg">
                <Icon className="h-6 w-6" />
                <span>{title}</span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-base py-1 px-3 bg-secondary/80 text-secondary-foreground hover:bg-secondary/100 cursor-default">
                        {skill}
                    </Badge>
                ))}
            </div>
        </CardContent>
    </Card>
);

export function SkillsView() {
  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-8 flex items-center gap-2">
        <Wrench />
        <span>/usr/lib/skills</span>
      </h1>
      
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start">
        {/* Left Branch */}
        <div className="w-full lg:w-1/4 flex flex-col gap-8 mt-0 lg:mt-20">
          <SkillCategory {...SKILLS_DATA.technical[0]} />
          <SkillCategory {...SKILLS_DATA.technical[3]} />
        </div>

        {/* Center and Right Branch */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCategory {...SKILLS_DATA.technical[1]} />
                <SkillCategory {...SKILLS_DATA.technical[2]} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCategory {...SKILLS_DATA.soft} />
                <SkillCategory {...SKILLS_DATA.technical[4]} />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                <SkillCategory {...SKILLS_DATA.hobbies} className="md:col-start-2" />
            </div>
        </div>
      </div>
    </div>
  );
}
