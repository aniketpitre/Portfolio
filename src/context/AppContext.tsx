'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState, useCallback } from 'react';
import { Terminal } from 'lucide-react';
import { initialHistory } from '@/lib/app-data';

export type CommandHistory = {
  id: number;
  command: string;
  output: ReactNode;
};

export type ViewId =
  | 'system_health'
  | 'user_profile'
  | 'kubelet'
  | 'auditd'
  | 'credentials'
  | 'contact'
  | 'help';

type AppContextType = {
  view: ViewId;
  setView: (view: ViewId) => void;
  history: CommandHistory[];
  pushToHistory: (item: { command: string; output: ReactNode }) => void;
  clearHistory: () => void;
  isExited: boolean;
  exit: () => void;
  activePod: string | null;
  setActivePod: (podId: string | null) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<ViewId>('system_health');
  const [history, setHistory] = useState<CommandHistory[]>(initialHistory);
  const [isExited, setIsExited] = useState(false);
  const [activePod, setActivePod] = useState<string | null>(null);

  const pushToHistory = useCallback((item: { command: string; output: ReactNode }) => {
    setHistory((prev) => [...prev, { ...item, id: prev.length }]);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([
      {
        id: 0,
        command: 'clear',
        output: <span className="text-muted-foreground">Log cleared.</span>,
      },
    ]);
  }, []);

  const exit = () => setIsExited(true);

  const value = {
    view,
    setView,
    history,
    pushToHistory,
    clearHistory,
    isExited,
    exit,
    activePod,
    setActivePod,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
