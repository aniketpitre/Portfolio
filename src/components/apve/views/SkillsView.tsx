'use client';
import { SKILL_CATEGORIES, SKILLS_LIST } from '@/lib/app-data';
import { Wrench } from 'lucide-react';
import './SkillsView.css';
import { cn } from '@/lib/utils';
import React from 'react';

const RADIUS = 280; // Radius for the category hubs from the center
const CATEGORY_RADIUS = 110; // Radius for the skill nodes from their hub

export function SkillsView() {
  const skillsByCategory = SKILLS_LIST.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  const categories = Object.keys(SKILL_CATEGORIES);
  const numCategories = categories.length;

  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-8 flex items-center gap-2">
        <Wrench />
        <span>/usr/lib/skills - Interactive Mind Map</span>
      </h1>
      
      <div className="mind-map-container">
        {/* Mobile / Fallback View */}
        <div className="skills-mobile-view">
            {categories.map((category) => {
                const categoryInfo = SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES];
                const skills = skillsByCategory[category] || [];
                const Icon = categoryInfo.icon;
                return (
                    <div key={category} className="mb-6">
                        <div 
                            className={cn("mind-map-category-hub", categoryInfo.color)}
                        >
                            <div className="hub-icon-container">
                                <Icon className="h-8 w-8" />
                            </div>
                            <p className="hub-label">{category}</p>
                        </div>
                        <div className="skills-wrapper">
                            {skills && skills.map(skill => (
                                <div key={skill} className={cn("mind-map-node", categoryInfo.color)}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>

        {/* Desktop Mind Map View */}
        <div className="skills-desktop-view">
            <div className="mind-map-center">
                <div className="w-32 h-32 rounded-full bg-primary/80 flex flex-col items-center justify-center text-center p-2">
                    <Wrench className="h-10 w-10 text-accent" />
                    <h2 className="text-md font-headline text-primary-foreground mt-1">Skill Hub</h2>
                </div>
            </div>

            {categories.map((category, i) => {
                const angle = (i / numCategories) * 2 * Math.PI;
                const x = RADIUS * Math.cos(angle);
                const y = RADIUS * Math.sin(angle);
                const categoryInfo = SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES];
                const Icon = categoryInfo.icon;
                const skills = skillsByCategory[category] || [];

                return (
                    <React.Fragment key={category}>
                        {/* Category Hub */}
                        <div 
                            className="mind-map-category-hub"
                            style={{ 
                                '--tx': `${x}px`,
                                '--ty': `${y}px`,
                                animationDelay: `${i * 0.2}s` 
                            } as React.CSSProperties}
                        >
                            <div className={cn("hub-icon-container", categoryInfo.color)}>
                                <Icon className="h-7 w-7" />
                            </div>
                            <p className="hub-label">{category}</p>
                        </div>

                        {/* Connecting line from Center to Category Hub */}
                        <svg className="mind-map-line" style={{ zIndex: 1 }}>
                            <line 
                                x1="50%" y1="50%" 
                                x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`} 
                            />
                        </svg>

                        {/* Skill Nodes around the Category Hub */}
                        {skills.map((skill, j) => {
                            const skillAngle = (j / skills.length) * 2 * Math.PI;
                            const skillX = x + CATEGORY_RADIUS * Math.cos(skillAngle);
                            const skillY = y + CATEGORY_RADIUS * Math.sin(skillAngle);

                            return (
                                <React.Fragment key={skill}>
                                    <div 
                                        className={cn("mind-map-node", categoryInfo.color)}
                                        style={{ 
                                            '--tx': `${skillX}px`,
                                            '--ty': `${skillY}px`,
                                            animationDelay: `${i * 0.2 + (j + 1) * 0.1}s`
                                        } as React.CSSProperties}
                                    >
                                        {skill}
                                    </div>
                                    {/* Connecting line from Category Hub to Skill Node */}
                                    <svg className="mind-map-line" style={{ zIndex: 0 }}>
                                        <line 
                                            x1={`calc(50% + ${x}px)`} y1={`calc(50% + ${y}px)`}
                                            x2={`calc(50% + ${skillX}px)`} y2={`calc(50% + ${skillY}px)`}
                                            className="skill-line"
                                        />
                                    </svg>
                                </React.Fragment>
                            )
                        })}
                    </React.Fragment>
                )
            })}
        </div>
      </div>
    </div>
  );
}
