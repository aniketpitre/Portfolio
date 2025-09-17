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

const renderView = (view: string) => {
  switch (view) {
    case 'system_health':
      return <SystemHealthView />;
    case 'user_profile':
      return <UserProfileView />;
    case 'kubelet':
        return <KubeletView />;
    case 'auditd':
        return <AuditLogView />;
    case 'education':
        return <EducationView />;
    case 'credentials':
        return <CredentialsManagerView />;
    case 'contact':
        return <ContactView />;
    case 'help':
        return <HelpView />;
    default:
      return <SystemHealthView />;
  }
};

export default function Viewport() {
  const { view } = useAppContext();

  return (
    <ScrollArea className="flex-1 bg-background/50">
      <div className="p-4 md:p-8">
        {renderView(view)}
      </div>
    </ScrollArea>
  );
}
