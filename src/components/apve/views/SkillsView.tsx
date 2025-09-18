'use client';
import { SKILL_CATEGORIES, SKILLS_LIST } from '@/lib/app-data';
import { Wrench } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
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

export function SkillsView() {
  const skillsByCategory = categoryOrder.reduce((acc, category) => {
    acc[category] = SKILLS_LIST.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<string, typeof SKILLS_LIST>);

  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-8 flex items-center justify-center gap-2">
        <Wrench />
        <span>/usr/lib/skills - Skill Constellation</span>
      </h1>
      
      <div className="constellation-container">
        {categoryOrder.map((category, catIndex) => {
          const categoryInfo = SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES];
          const skills = skillsByCategory[category];
          const Icon = categoryInfo.icon;
          const numSkills = skills.length;
          
          return (
            <div key={category} className="constellation" style={{'--cat-index': catIndex} as React.CSSProperties}>
              <div className="constellation-hub">
                <Icon className={cn("h-8 w-8", categoryInfo.color)} />
                <h3 className="constellation-title">{category}</h3>
              </div>
              {skills.map((skill, skillIndex) => {
                const angle = (skillIndex / numSkills) * 2 * Math.PI;
                const radius = 140 + (numSkills > 6 ? 25 : 0) + (skill.name.length > 10 ? 20 : 0);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div key={skill.name} className="skill-star-container" style={{ transform: `translate(${x}px, ${y}px)` }}>
                    <div className="skill-star" style={{'--skill-index': skillIndex} as React.CSSProperties }>{skill.name}</div>
                     <div className="skill-star-line" style={{ transform: `rotate(${angle + Math.PI}rad)` }}></div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
