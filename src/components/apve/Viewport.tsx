'use client';

import { useAppContext } from '@/context/AppContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SystemHealthView } from './views/SystemHealthView';
import { UserProfileView } from './views/UserProfileView';
import { KubeletView } from './views/KubeletView';
import { AuditLogView } from './views/AuditLogView';
import { CredentialsManagerView } from './views/CredentialsManagerView';
import { ContactView } from './views/ContactView';
import { HelpView } from './views/HelpView';
import { EducationView } from './views/EducationView';
import { SkillsView } from './views/SkillsView';
import { AnimatePresence, motion } from 'framer-motion';

const views: { [key: string]: React.ComponentType } = {
  system_health: SystemHealthView,
  user_profile: UserProfileView,
  kubelet: KubeletView,
  auditd: AuditLogView,
  education: EducationView,
  credentials: CredentialsManagerView,
  skills: SkillsView,
  contact: ContactView,
  help: HelpView,
};

const viewVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    zIndex: 1,
    opacity: 1,
    y: 0,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    y: -20,
  },
};

export default function Viewport() {
  const { view } = useAppContext();
  const CurrentView = views[view] || SystemHealthView;

  return (
    <ScrollArea className="flex-1 bg-background/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          variants={viewVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="p-4 md:p-8"
        >
          <CurrentView />
        </motion.div>
      </AnimatePresence>
    </ScrollArea>
  );
}
