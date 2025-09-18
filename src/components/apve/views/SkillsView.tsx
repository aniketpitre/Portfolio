'use client';
import { SKILL_CATEGORIES, SKILLS_LIST } from '@/lib/app-data';
import { Wrench, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './SkillsView.css';

const categoryOrder = [
  'Programming & Web',
  'System Administration',
  'Cloud & DevOps',
  'Databases',
  'Soft Skills',
  'Creative',
  'Hobbies & Interests',
];

const SkillDetail = ({ category, skills, onClose }: { category: string, skills: string[], onClose: () => void }) => {
    const categoryInfo = SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES];
    if (!categoryInfo) return null;
    const Icon = categoryInfo.icon;
  
    return (
      <div className="skill-detail-view animate-in fade-in zoom-in-95">
        <Card className="bg-background/90 backdrop-blur-sm border-primary">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon className={cn("h-6 w-6", categoryInfo.color)} />
              <CardTitle className="font-headline text-xl text-accent">{category}</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}><X className="h-4 w-4" /></Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <div key={skill} className="text-sm bg-secondary border border-border rounded-full px-3 py-1 text-foreground">
                  {skill}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
};

export function SkillsView() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillsByCategory = SKILLS_LIST.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  const handleCardClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  const selectedSkills = activeCategory ? skillsByCategory[activeCategory] : [];

  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-8 flex items-center justify-center gap-2">
        <Wrench />
        <span>/usr/lib/skills - Skill Matrix</span>
      </h1>
      
      <div className="relative skills-grid-container h-[70vh]">
        <div className={cn("skills-grid", activeCategory ? 'is-active' : '')}>
          {categoryOrder.map((category) => {
            const categoryInfo = SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES];
            const skills = skillsByCategory[category] || [];
            if (!categoryInfo) return null;
            const Icon = categoryInfo.icon;
            return (
              <div 
                key={category} 
                className="skill-card"
                onClick={() => handleCardClick(category)}
              >
                <div className="skill-card-header">
                  <Icon className={cn("h-6 w-6", categoryInfo.color)} />
                  <h3 className="font-headline text-lg text-foreground">{category}</h3>
                </div>
                <div className="skill-list">
                  {skills.slice(0, 4).map(skill => (
                    <div key={skill} className="skill-badge">
                      {skill}
                    </div>
                  ))}
                  {skills.length > 4 && <div className="skill-badge">+{skills.length - 4} more</div>}
                </div>
              </div>
            );
          })}
        </div>

        {activeCategory && (
            <SkillDetail 
                category={activeCategory}
                skills={selectedSkills}
                onClose={() => setActiveCategory(null)}
            />
        )}
      </div>
    </div>
  );
}
