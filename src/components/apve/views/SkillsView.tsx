'use client';
import { SKILLS_DATA } from '@/lib/app-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wrench, BrainCircuit, Users, Gamepad, Camera } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, className }: { title: string, icon: React.ElementType, skills: string[], className?: string }) => (
    <Card className={`bg-card/60 border-primary/20 hover:border-primary transition-all transform hover:-translate-y-1 ${className}`}>
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
      <h1 className="font-headline text-2xl text-accent mb-6 flex items-center gap-2">
        <Wrench />
        <span>/usr/lib/skills</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Technical Skills - Main Column */}
        <div className="lg:col-span-2 space-y-6">
            <h2 className="font-headline text-xl text-foreground flex items-center gap-2">
                <BrainCircuit />
                <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILLS_DATA.technical.map(category => (
                    <SkillCategory key={category.title} {...category} />
                ))}
            </div>
        </div>

        {/* Soft Skills & Hobbies - Side Column */}
        <div className="space-y-6">
            <div>
                <h2 className="font-headline text-xl text-foreground mb-4 flex items-center gap-2">
                    <Users />
                    <span>Soft Skills</span>
                </h2>
                <div className="grid grid-cols-1 gap-6">
                    <SkillCategory {...SKILLS_DATA.soft} />
                </div>
            </div>
             <div>
                <h2 className="font-headline text-xl text-foreground mb-4 flex items-center gap-2">
                    <Gamepad />
                    <span>Hobbies & Interests</span>
                </h2>
                <div className="grid grid-cols-1 gap-6">
                    <SkillCategory {...SKILLS_DATA.hobbies} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
