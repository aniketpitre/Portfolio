'use client';
import { useState, useEffect } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInterval } from '@/hooks/use-interval';
import { Cpu, MemoryStick, ShieldCheck, Terminal, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const generateData = () =>
  Array.from({ length: 10 }, (_, i) => ({
    name: `t-${9 - i}`,
    cpu: Math.random() * 50 + 10,
    mem: Math.random() * 20 + 30,
    net: Math.random() * 15 + 5,
  }));

const insights = [
  { category: 'Cyber Security', text: 'The best defense is a good offense... and regular patching.' },
  { category: 'Linux', text: 'In a world without walls or fences, who needs Windows and Gates?' },
  { category: 'Cloud', text: 'There is no cloud, it\'s just someone else\'s computer.' },
  { category: 'Docker', text: 'Docker: "It works on my machine" is now a certified feature.' },
  { category: 'Kubernetes', text: 'Kubernetes: The final boss of container orchestration. May the YAML be with you.' },
  { category: 'Blockchain', text: 'Blockchain: The only chain that can set you free... or cost you a fortune in gas fees.' },
  { category: 'Cyber Security', text: 'Passwords are like underwear: don\'t leave them lying around, change them often, and don\'t share them.' },
  { category: 'Linux', text: '`sudo make me a sandwich.` ... `Okay.`' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/80 backdrop-blur-sm p-2 border border-border rounded-md font-code text-sm">
        <p className="label text-muted-foreground">{`${label}`}</p>
        <p className="intro text-cyan-400">{`CPU: ${payload[0].value.toFixed(2)}%`}</p>
        {payload[1] && <p className="intro text-purple-400">{`Memory: ${payload[1].value.toFixed(2)}%`}</p>}
      </div>
    );
  }
  return null;
};

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
        <Card className="mt-6 border-dashed border-accent/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-accent" />
                    <span>System Insights</span>
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={nextInsight} className="h-6 w-6">
                    <RefreshCw className="h-3 w-3" />
                </Button>
            </CardHeader>
            <CardContent className="font-code text-sm pt-2">
                <Badge variant="secondary" className="mb-2 border-accent/30">{insight.category}</Badge>
                <p className="text-muted-foreground">
                    <span className="text-accent/80 mr-1">$</span> 
                    {insight.text}
                </p>
            </CardContent>
        </Card>
    );
}

export function SystemHealthView() {
  const [data, setData] = useState(generateData());

  useInterval(() => {
    setData(prevData => [...prevData.slice(1), {
      name: `t-0`,
      cpu: Math.random() * 50 + 10,
      mem: Math.random() * 20 + 30,
      net: Math.random() * 15 + 5,
    }].map((d, i) => ({ ...d, name: `t-${9 - i}` })));
  }, 2000);

  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
        <ShieldCheck />
        <span>System Health Monitor</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-400">{data[data.length - 1].cpu.toFixed(1)}%</div>
            <div className="h-[120px] mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="cpu" stroke="hsl(var(--accent))" fill="url(#colorCpu)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
            <MemoryStick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-400">{data[data.length - 1].mem.toFixed(1)}%</div>
            <div className="h-[120px] mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorMem" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="mem" stroke="#8884d8" fill="url(#colorMem)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      <SystemInsights />
    </div>
  );
}
