'use client';

import { useState } from 'react';
import LoadingSequence from '@/components/apve/LoadingSequence';
import Dashboard from '@/components/apve/Dashboard';
import { AppProvider } from '@/context/AppContext';

export default function Home() {
  const [booting, setBooting] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleBootComplete = () => {
    setBooting(false); // This will now just signal the end of the text animation
  };

  const handleEnter = () => {
    setShowDashboard(true);
  }

  if (!showDashboard) {
    return (
      <LoadingSequence
        booting={booting}
        onFinished={handleBootComplete}
        onEnter={handleEnter}
      />
    );
  }

  return (
      <Dashboard />
  );
}
