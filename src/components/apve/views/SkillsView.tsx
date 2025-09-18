'use client';
import React, { useState } from 'react';
import { SKILL_CATEGORIES, SKILLS_LIST } from '@/lib/app-data';
import { Folder, FileText, ChevronRight, CornerDownLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatePresence, motion } from 'framer-motion';

type Skill = {
  name: string;
  category: string;
  level: string;
};

const DirectoryItem = ({ name, onClick }: { name: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 p-2 rounded-md text-left text-sm transition-colors hover:bg-muted w-full"
  >
    <Folder className="h-5 w-5 text-primary" />
    <span className="font-medium">{name}</span>
    <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
  </button>
);

const FileItem = ({ name, onClick }: { name: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 p-2 rounded-md text-left text-sm transition-colors hover:bg-muted w-full"
  >
    <FileText className="h-5 w-5 text-muted-foreground" />
    <span>{name}.skill</span>
  </button>
);

const SkillDetailCard = ({ skill, onClose }: { skill: Skill, onClose: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="md:col-span-2"
    >
        <Card className="bg-transparent border-dashed relative">
            <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted">
                <CornerDownLeft className="h-4 w-4 text-muted-foreground" />
            </button>
            <CardHeader>
                <CardTitle className="text-primary">{skill.name}.skill</CardTitle>
                <CardDescription>File details</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div><strong>Category:</strong> {skill.category}</div>
                    <div><strong>Proficiency:</strong> <Badge variant="secondary">{skill.level}</Badge></div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
);


export function SkillsView() {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category);
    setSelectedSkill(null);
  };

  const handleBack = () => {
    setCurrentCategory(null);
    setSelectedSkill(null);
  };
  
  const handleFileClick = (skill: Skill) => {
    setSelectedSkill(skill);
  }

  const items = currentCategory
    ? SKILLS_LIST.filter(skill => skill.category === currentCategory)
    : Object.keys(SKILL_CATEGORIES);

  const Breadcrumbs = () => (
    <div className="flex items-center text-muted-foreground text-sm mb-4">
      <button onClick={handleBack} className="hover:text-primary">/usr/lib/skills</button>
      {currentCategory && (
        <>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-foreground">{currentCategory}</span>
        </>
      )}
    </div>
  );

  return (
    <div>
      <h1 className="font-headline font-bold text-2xl text-foreground mb-2">Skill Explorer</h1>
      <Breadcrumbs />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 border border-border rounded-lg p-2 bg-background/50 h-fit">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentCategory || 'root'}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1"
                >
                {!currentCategory && (
                    Object.keys(SKILL_CATEGORIES).map(category => (
                        <DirectoryItem key={category} name={category} onClick={() => handleCategoryClick(category)} />
                    ))
                )}
                {currentCategory && (
                    <>
                        <button onClick={handleBack} className="flex items-center gap-3 p-2 rounded-md text-left text-sm transition-colors hover:bg-muted w-full text-muted-foreground">
                            <CornerDownLeft className="h-5 w-5" />
                            <span>../</span>
                        </button>
                        {SKILLS_LIST.filter(s => s.category === currentCategory).map(skill => (
                            <FileItem key={skill.name} name={skill.name} onClick={() => handleFileClick(skill)} />
                        ))}
                    </>
                )}
                </motion.div>
            </AnimatePresence>
        </div>

        <AnimatePresence>
            {selectedSkill && <SkillDetailCard skill={selectedSkill} onClose={() => setSelectedSkill(null)} />}
        </AnimatePresence>
        
        {!selectedSkill && (
            <div className="md:col-span-2 flex items-center justify-center border border-dashed border-border rounded-lg p-8 bg-transparent">
                <p className="text-muted-foreground text-center">
                    {currentCategory ? 'Select a file to view details' : 'Select a directory to explore skills'}
                </p>
            </div>
        )}
      </div>
    </div>
  );
}
