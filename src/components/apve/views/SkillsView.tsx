'use client';
import { SKILL_CATEGORIES, SKILLS_LIST } from '@/lib/app-data';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const categoryOrder = [
  'Programming & Web',
  'Cloud & DevOps',
  'System Administration',
  'Databases',
  'Creative',
  'Soft Skills',
  'Hobbies & Interests',
];

export function SkillsView() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(prev => (prev === category ? null : category));
  };

  const skillsByCategory = categoryOrder.reduce((acc, category) => {
    acc[category] = SKILLS_LIST.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<string, typeof SKILLS_LIST>);
  

  return (
    <div>
      <h1 className="font-headline font-bold text-2xl text-foreground mb-2">/usr/lib/skills</h1>
      <p className="text-muted-foreground mb-6">- Skill Matrix</p>
      
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categoryOrder.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => handleCategoryFilter(category)}
            className="transition-all"
          >
            {category}
          </Button>
        ))}
      </div>

      <TooltipProvider>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SKILLS_LIST.map((skill) => {
            const Icon = SKILL_CATEGORIES[skill.category as keyof typeof SKILL_CATEGORIES]?.icon;
            const isDimmed = activeCategory && skill.category !== activeCategory;

            return (
              <Tooltip key={skill.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Card className={cn(
                    "bg-transparent text-center group cursor-pointer transition-all duration-300",
                    isDimmed ? 'opacity-20' : 'opacity-100 hover:border-primary hover:scale-105'
                  )}>
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                        {Icon && <Icon className="h-8 w-8 text-primary/80 group-hover:text-primary transition-colors" />}
                        <p className="text-sm font-medium text-foreground">{skill.name}</p>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent side="top" className="font-sans bg-background text-foreground border-border">
                  <p>{skill.level}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </div>
  );
}
