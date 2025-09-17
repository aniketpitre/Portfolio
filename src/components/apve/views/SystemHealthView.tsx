'use client';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInterval } from '@/hooks/use-interval';
import { Cpu, MemoryStick, Network, ShieldCheck } from 'lucide-react';

const generateData = () =>
  Array.from({ length: 10 }, (_, i) => ({
    name: `t-${10 - i}`,
    cpu: Math.random() * 50 + 10,
    mem: Math.random() * 20 + 30,
    net: Math.random() * 15 + 5,
  }));


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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background/80 backdrop-blur-sm p-2 border border-border rounded-md font-code text-sm">
          <p className="label text-muted-foreground">{`${label}`}</p>
          <p className="intro text-cyan-400">{`CPU: ${payload[0].value.toFixed(2)}%`}</p>
          {payload[1] && <p className="intro text-purple-400">{`Memory: ${payload[1].value.toFixed(2)}%`}</p>}
          {payload[2] && <p className="intro text-green-400">{`Network: ${payload[2].value.toFixed(2)}KB/s`}</p>}
        </div>
      );
    }
    return null;
  };

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
                    <div className="text-2xl font-bold text-cyan-400">{data[data.length-1].cpu.toFixed(1)}%</div>
                    <div className="h-[120px] mt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}/>
                                <YAxis domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}/>
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
                     <div className="text-2xl font-bold text-purple-400">{data[data.length-1].mem.toFixed(1)}%</div>
                     <div className="h-[120px] mt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                                <defs>
                                     <linearGradient id="colorMem" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                     <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                     </linearGradient>
                                </defs>
                                <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}/>
                                <YAxis domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}/>
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="mem" stroke="#8884d8" fill="url(#colorMem)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
