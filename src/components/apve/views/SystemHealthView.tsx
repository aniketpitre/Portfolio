'use client';
import { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useInterval } from '@/hooks/use-interval';
import { Cpu, MemoryStick, ShieldCheck, Terminal, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const generateData = () =>
  Array.from({ length: 10 }, (_, i) => ({
    name: `t-${9 - i}`,
    cpu: Math.random() * 50 + 10,
    mem: Math.random() * 20 + 30,
  }));

const insights = [
  { category: 'Cyber Security', text: 'The best defense is a good offense... and regular patching.' },
  { category: 'Linux', text: 'In a world without walls or fences, who needs Windows and Gates?' },
  { category: 'Cloud', text: 'There is no cloud, it\'s just someone else\'s computer.' },
  { category: 'Docker', text: 'Docker: "It works on my machine" is now a certified feature.' },
  { category: 'Kubernetes', text: 'Kubernetes: The final boss of container orchestration. May the YAML be with you.' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/80 backdrop-blur-sm p-2 border border-border rounded-md shadow-lg text-sm">
        <p className="label text-muted-foreground">{`${label}`}</p>
        <p className="intro" style={{ color: "hsl(var(--primary))" }}>{`CPU: ${payload[0].value.toFixed(2)}%`}</p>
        {payload[1] && <p className="intro" style={{ color: "#8884d8" }}>{`Memory: ${payload[1].value.toFixed(2)}%`}</p>}
      </div>
    );
  }
  return null;
};

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

const ChartCard = ({ title, icon: Icon, data, dataKey, color, unit }: any) => (
  <Card className="bg-transparent">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold" style={{ color }}>{data[data.length - 1][dataKey].toFixed(1)}{unit}</div>
      <div className="h-[120px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="hsl(var(--border))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--border))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
            <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} fill={`url(#color${dataKey})`} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export function SystemHealthView() {
  const [data, setData] = useState(generateData());

  useInterval(() => {
    setData(prevData => [...prevData.slice(1), {
      name: `t-0`,
      cpu: Math.random() * 50 + 10,
      mem: Math.random() * 20 + 30,
    }].map((d, i) => ({ ...d, name: `t-${9 - i}` })));
  }, 2000);

  return (
    <div>
      <h1 className="font-headline text-2xl font-bold text-foreground mb-2">System Health</h1>
      <p className="text-muted-foreground mb-6">Live metrics of the virtual environment.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="CPU Usage" icon={Cpu} data={data} dataKey="cpu" color="hsl(var(--primary))" unit="%" />
        <ChartCard title="Memory Usage" icon={MemoryStick} data={data} dataKey="mem" color="#8884d8" unit="%" />
      </div>
      <SystemInsights />
    </div>
  );
}
