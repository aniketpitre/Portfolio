
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
import { AnimatePresence, motion } from 'framer-motion';

const insights = [
    { category: 'Cyber Security', text: 'The best defense is a good offense... and regular patching.' },
    { category: 'Linux', text: 'In a world without walls or fences, who needs Windows and Gates?' },
    { category: 'Cloud', text: 'There is no cloud, it\'s just someone else\'s computer.' },
    { category: 'Docker', text: 'Docker: "It works on my machine" is now a certified feature.' },
    { category: 'Kubernetes', text: 'Kubernetes: The final boss of container orchestration. May the YAML be with you.' },
    { category: 'Code', text: 'Talk is cheap. Show me the code.' },
    { category: 'Debugging', text: 'Debugging is like being the detective in a crime movie where you are also the murderer.'},
    { category: 'Programming', text: 'There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.'},
    { category: 'AI', text: 'The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.' },
    { category: 'Hardware', text: 'The number of transistors on a microchip doubles about every two years. Moore\'s Law is a self-fulfilling prophecy.' },
    { category: 'Security', text: 'Passwords are like underwear: don\'t let people see them, change them very often, and you shouldn\'t share them with strangers.' }
];

const SystemInsights = () => {
    const [index, setIndex] = useState(0);

    useInterval(() => {
        setIndex((prev) => (prev + 1) % insights.length);
    }, 4000);
  
    const insight = insights[index];
    
    return (
        <Card className="border-dashed bg-transparent w-full">
            <CardHeader>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-primary" />
                    <span>System Insights</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-2 h-24" style={{ perspective: '500px' }}>
              <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge variant="outline" className="mb-2">{insight.category}</Badge>
                    <p className="text-muted-foreground text-sm">
                      "{insight.text}"
                    </p>
                  </motion.div>
              </AnimatePresence>
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
      <Card className="bg-transparent w-full">
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
    <div className="flex flex-col gap-8">
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
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillRadarChart />
        <SystemInsights />
      </div>
    </div>
  );
}
