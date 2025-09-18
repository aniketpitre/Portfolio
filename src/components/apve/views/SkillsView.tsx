'use client';
import { SKILL_CATEGORIES, SKILLS_LIST } from '@/lib/app-data';
import React, { createRef } from 'react';
import { cn } from '@/lib/utils';
import './SkillsView.css';
import Draggable from 'react-draggable';
import { useIsMobile } from '@/hooks/use-mobile';


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
  const isMobile = useIsMobile();
  const skillsByCategory = categoryOrder.reduce((acc, category) => {
    acc[category] = SKILLS_LIST.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<string, typeof SKILLS_LIST>);
  
  const refs = React.useRef<React.RefObject<HTMLDivElement>[]>([]);
  categoryOrder.forEach((_, i) => {
    refs.current[i] = createRef<HTMLDivElement>();
  });

  return (
    <div>
      <h1 className="font-headline font-bold text-2xl text-foreground mb-2">/usr/lib/skills</h1>
      <p className="text-muted-foreground mb-6">- Skill Constellation</p>

      <div className="skills-container">
        {categoryOrder.map((category, catIndex) => {
          const categoryInfo = SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES];
          const skills = skillsByCategory[category];
          const Icon = categoryInfo.icon;
          const nodeRef = refs.current[catIndex];
          
          return (
            <Draggable disabled={isMobile} nodeRef={nodeRef} key={category}>
              <div ref={nodeRef} className="constellation">
                <div className="constellation-hub">
                  <Icon className={cn("h-8 w-8", categoryInfo.color)} />
                  <h3>{category}</h3>
                </div>
                {skills.map((skill, skillIndex) => {
                    const angle = (skillIndex / skills.length) * 2 * Math.PI + (Math.random() - 0.5) * 0.2;
                    const radius = isMobile ? 60 + Math.random() * 10 : 100 + Math.random() * 20;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    const lineAngle = Math.atan2(y, x) * (180 / Math.PI);
                    const lineLength = Math.sqrt(x*x + y*y);

                    return (
                        <React.Fragment key={skill.name}>
                            <div
                                className="skill-star"
                                style={{
                                    transform: `translate(${x}px, ${y}px)`,
                                    '--skill-index': skillIndex,
                                } as React.CSSProperties}
                            >
                                {skill.name}
                            </div>
                            {!isMobile && (
                                <div
                                className="line-to-skill"
                                style={{
                                    width: `${lineLength}px`,
                                    height: '1px',
                                    transform: `rotate(${lineAngle}deg)`,
                                    top: '50%',
                                    left: '50%',
                                }}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
              </div>
            </Draggable>
          );
        })}
      </div>
    </div>
  );
}
