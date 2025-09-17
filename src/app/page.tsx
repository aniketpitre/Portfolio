'use client';

import { useState } from 'react';
import { AppProvider } from '@/context/AppContext';
import LoadingSequence from '@/components/apve/LoadingSequence';
import Dashboard from '@/components/apve/Dashboard';

export default function Home() {
  const [booting, setBooting] = useState(true);

  const handleBootComplete = () => {
    setBooting(false);
  };

  if (booting) {
    return <LoadingSequence onFinished={handleBootComplete} />;
  }

  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}
