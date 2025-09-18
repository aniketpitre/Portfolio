'use client';

import { Mail, Linkedin, Github, Terminal, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AvatarIcon } from './AvatarIcon';
import './UserProfileView.css';
import { useState } from 'react';
import { useInterval } from '@/hooks/use-interval';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';

const insights = [
  { category: 'Cyber Security', text: 'The best defense is a good offense... and regular patching.' },
  { category: 'Linux', text: 'In a world without walls or fences, who needs Windows and Gates?' },
  { category: 'Cloud', text: 'There is no cloud, it\'s just someone else\'s computer.' },
  { category: 'Docker', text: 'Docker: "It works on my machine" is now a certified feature.' },
  { category: 'Kubernetes', text: 'Kubernetes: The final boss of container orchestration. May the YAML be with you.' },
];

const SystemInsights = () => {
    const [index, setIndex] = useState(() => Math.floor(Math.random() * insights.length));

    const nextInsight = () => {
        setIndex((prev) => (prev + 1) % insights.length);
    }
  
    const insight = insights[index];
    
    return (
        <Card className="mt-6 border-dashed bg-transparent">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-primary" />
                    <span>System Insights</span>
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={nextInsight} className="h-6 w-6">
                    <RefreshCw className="h-3 w-3" />
                </Button>
            </CardHeader>
            <CardContent className="pt-2">
                <Badge variant="outline" className="mb-2">{insight.category}</Badge>
                <p className="text-muted-foreground text-sm">
                  "{insight.text}"
                </p>
            </CardContent>
        </Card>
    );
}

const initialSkillData = [
  { subject: 'Development', A: 90, fullMark: 100 },
  { subject: 'Security', A: 85, fullMark: 100 },
  { subject: 'Cloud/DevOps', A: 75, fullMark: 100 },
  { subject: 'System Admin', A: 95, fullMark: 100 },
  { subject: 'Databases', A: 80, fullMark: 100 },
];

const SkillRadarChart = () => {
  const [skillData, setSkillData] = useState(initialSkillData);

  useInterval(() => {
    setSkillData(skillData.map(skill => ({
      ...skill,
      A: Math.max(50, Math.min(100, skill.A + (Math.random() - 0.5) * 5)),
    })));
  }, 2000);

  return (
      <Card className="mt-8 bg-transparent">
          <CardHeader>
              <CardTitle className="text-lg font-headline">Core Competencies</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                      <defs>
                          <linearGradient id="skillRadarGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                      </defs>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                      <Radar name="Skills" dataKey="A" stroke="hsl(var(--primary))" fill="url(#skillRadarGradient)" fillOpacity={0.8} />
                  </RadarChart>
              </ResponsiveContainer>
          </CardContent>
      </Card>
  )
}

export function UserProfileView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-1 flex flex-col items-center">
        <div className="mb-6">
          <AvatarIcon />
        </div>
        <h1 className="font-headline text-3xl font-bold text-foreground text-center">Aniket Pitre</h1>
        <div className="mt-4 flex gap-3">
            <Button variant="outline" size="lg" className="h-12 w-12 p-0 rounded-full" asChild>
                <a href="mailto:pitreaniket@gmail.com" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </Button>
            <Button variant="outline" size="lg" className="h-12 w-12 p-0 rounded-full" asChild>
                <a href="https://www.linkedin.com/in/aniket-pitre" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </Button>
            <Button variant="outline" size="lg" className="h-12 w-12 p-0 rounded-full" asChild>
                <a href="https://github.com/aniketpitre" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            </Button>
        </div>
      </div>
      <div className="md:col-span-2">
          <h2 className="font-headline text-xl font-bold text-foreground mb-4">About Me</h2>
          <div className="text-muted-foreground space-y-4">
              <p>I’m Aniket Pitre, an MCA postgraduate student driven by curiosity and innovation. My core interests lie in Cybersecurity, Linux, and Cloud technologies, where I enjoy exploring how systems work, how they break, and how to make them stronger.</p>
              <p>I focus on learning, experimenting, and applying concepts to solve real-world problems, while continuously expanding my skills across modern IT landscapes. With a vision to grow as a security and cloud-focused professional, I aim to create impactful solutions that blend technology, security, and efficiency.</p>
              <p>My journey so far has been shaped by hands-on experience in system administration, vulnerability management, and cloud-based problem solving, along with a strong drive to keep exploring new technologies.</p>
          </div>
          <SkillRadarChart />
          <SystemInsights />
      </div>
    </div>
  );
}
