'use client';
import { SKILLS_DATA } from '@/lib/app-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wrench, BrainCircuit } from 'lucide-react';
import './SkillsView.css';
import { cn } from '@/lib/utils';

const SkillCategory = ({ title, icon: Icon, skills, className }: { title: string, icon: React.ElementType, skills: string[], className?: string }) => (
    <Card className={cn("bg-card/80 border-primary/20 hover:border-primary transition-all transform hover:-translate-y-1 border-glow", className)}>
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
  const nodes = [
    SKILLS_DATA.technical[0], // Programming
    SKILLS_DATA.technical[1], // SysAdmin
    SKILLS_DATA.technical[2], // Cloud
    SKILLS_DATA.technical[3], // Databases
    SKILLS_DATA.technical[4], // Creative
    SKILLS_DATA.soft,         // Soft Skills
    SKILLS_DATA.hobbies,      // Hobbies
  ];

  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-8 flex items-center gap-2">
        <Wrench />
        <span>/usr/lib/skills - Interactive Mind Map</span>
      </h1>
      
      <div className="mind-map-container">
        <div className="mind-map-center">
            <div className="p-4 rounded-full bg-primary/20 border-2 border-primary border-dashed">
                <div className="w-40 h-40 rounded-full bg-primary/80 flex flex-col items-center justify-center text-center p-2">
                    <BrainCircuit className="h-12 w-12 text-accent" />
                    <h2 className="text-lg font-headline text-primary-foreground mt-2">Core Skills</h2>
                </div>
            </div>
        </div>

        {nodes.map((node, index) => (
            <div key={node.title} className={`mind-map-node node-${index + 1}`}>
                <SkillCategory {...node} />
            </div>
        ))}
        
        {/* Lines connecting center to nodes */}
        {nodes.map((_, index) => (
             <svg key={index} className="mind-map-line">
                <line x1="50%" y1="50%" className={`line-${index + 1}`} />
            </svg>
        ))}
      </div>
    </div>
  );
}
