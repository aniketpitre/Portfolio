'use client';
import { SKILL_CATEGORIES, SKILLS_LIST } from '@/lib/app-data';
import { Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import './SkillsView.css';

export function SkillsView() {
  const skillsByCategory = SKILLS_LIST.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  // Define a specific order for categories
  const categoryOrder = [
    'Programming & Web',
    'System Administration',
    'Cloud & DevOps',
    'Databases',
    'Soft Skills',
    'Creative',
    'Hobbies & Interests',
  ];

  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-12 flex items-center justify-center gap-2">
        <Wrench />
        <span>/usr/lib/skills - Skill Matrix</span>
      </h1>
      
      <div className="mind-map-grid">
        {categoryOrder.map((category) => {
          const categoryInfo = SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES];
          const skills = skillsByCategory[category] || [];
          if (!categoryInfo) return null;
          const Icon = categoryInfo.icon;
          return (
            <div key={category} className={cn("mind-map-node", categoryInfo.color.replace('text-', 'border-'))}>
                <div className="flex items-center gap-3 mb-4">
                    <Icon className={cn("h-6 w-6", categoryInfo.color)} />
                    <h3 className="font-headline text-lg text-foreground">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                        <div key={skill} className="text-sm bg-background border border-border rounded-full px-3 py-1 text-muted-foreground">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
