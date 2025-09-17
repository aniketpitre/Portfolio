'use client';
import { BIO_CONTENT, userProfileImage } from '@/lib/app-data';
import Image from 'next/image';
import { User, Mail, Linkedin, Github, Terminal, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AvatarIcon } from './AvatarIcon';
import './UserProfileView.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

const insights = [
  { category: 'Cyber Security', text: 'The best defense is a good offense... and regular patching.' },
  { category: 'Linux', text: 'In a world without walls or fences, who needs Windows and Gates?' },
  { category: 'Cloud', text: 'There is no cloud, it\'s just someone else\'s computer.' },
  { category: 'Docker', text: 'Docker: "It works on my machine" is now a certified feature.' },
  { category: 'Kubernetes', text: 'Kubernetes: The final boss of container orchestration. May the YAML be with you.' },
  { category: 'Cyber Security', text: 'Passwords are like underwear: don\'t leave them lying around, change them often, and don\'t share them.' },
];

const SystemInsights = () => {
    const [index, setIndex] = useState(0);

    const nextInsight = () => {
        setIndex((prev) => (prev + 1) % insights.length);
    }
  
    useEffect(() => {
      const timer = setInterval(nextInsight, 7000);
      return () => clearInterval(timer);
    }, []);

    const insight = insights[index];
    
    return (
        <Card className="mt-8 w-full border-dashed border-accent/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-accent" />
                    <span>User Insights</span>
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={nextInsight} className="h-6 w-6">
                    <RefreshCw className="h-3 w-3" />
                </Button>
            </CardHeader>
            <CardContent className="font-code text-xs pt-2">
                <Badge variant="secondary" className="mb-2 border-accent/30">{insight.category}</Badge>
                <p className="text-muted-foreground">
                    <span className="text-accent/80 mr-1">$</span> 
                    {insight.text}
                </p>
            </CardContent>
        </Card>
    );
}

export function UserProfileView() {
  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
        <User />
        <span>User Profile: aniket.pitre</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex flex-col items-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {userProfileImage && (
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-lg">
                      <Image
                        src={userProfileImage.imageUrl}
                        alt={userProfileImage.description}
                        data-ai-hint={userProfileImage.imageHint}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                </div>
                <div className="flip-card-back">
                   <AvatarIcon />
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
                <Button variant="outline" size="icon" asChild>
                    <a href="mailto:aniketpitre2001@gmail.com" aria-label="Email"><Mail className="h-4 w-4" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/aniket-pitre" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/Aniket-Pitre" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-4 w-4" /></a>
                </Button>
            </div>
            <SystemInsights />
        </div>
        <div className="md:col-span-2 bg-card p-4 rounded-lg border border-border">
          <pre className="font-code whitespace-pre-wrap text-sm text-foreground">
            {BIO_CONTENT}
          </pre>
        </div>
      </div>
    </div>
  );
}
