'use client';

import { useState } from 'react';
import LoadingSequence from '@/components/apve/LoadingSequence';
import Dashboard from '@/components/apve/Dashboard';
import { WelcomeGuide } from '@/components/apve/WelcomeGuide';

export default function Home() {
  const [booting, setBooting] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const handleBootComplete = () => {
    setBooting(false); // This will now just signal the end of the text animation
  };

  const handleEnter = () => {
    setShowGuide(true);
  }

  const handleGuideClose = () => {
    setShowGuide(false);
    setShowDashboard(true);
  }

  if (!showDashboard) {
    return (
      <>
        <LoadingSequence
          booting={booting}
          onFinished={handleBootComplete}
          onEnter={handleEnter}
        />
        <WelcomeGuide open={showGuide} onClose={handleGuideClose} />
      </>
    );
  }

  return (
      <Dashboard />
  );
}
