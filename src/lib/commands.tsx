'use client';
import type { ReactNode } from 'react';
import type { AppContextType, ViewId } from '@/context/AppContext';
import { BIO_CONTENT, PROJECTS, EXPERIENCE, SKILLS } from './app-data';
import { HelpView } from '@/components/apve/views/HelpView';

const MOCK_FILESYSTEM: Record<string, Record<string, string | { content: string, view: ViewId }>> = {
  'about': {
    'bio.txt': { content: BIO_CONTENT, view: 'user_profile' },
  },
  'projects': {
    'readme.md': "Directory containing project information. Use 'kubectl get pods' for an interactive view.",
  },
  'experience': {
    'career.log': { content: "System log of professional experience. Use 'auditd.service' from sidebar for a better view.", view: 'auditd' },
  },
  'education': {
    'history.log': { content: "User education history. Use 'education.log' from sidebar.", view: 'education' },
  }
};


const listDirectory = (path: string): ReactNode => {
    const parts = path.replace(/\/$/, '').split('/');
    let current = MOCK_FILESYSTEM;
    if (parts[0] !== '' && parts.length > 0) {
        const dir = MOCK_FILESYSTEM[parts[0]];
        if (!dir) return <p className="text-destructive">ls: cannot access '{path}': No such file or directory</p>;
        current = { [parts[0]]: dir };
    }

    return (
        <div className="grid grid-cols-4 gap-x-4">
            {Object.keys(current).map(dir => (
                <p key={dir} className="text-blue-400">{dir}/</p>
            ))}
        </div>
    );
};

const catFile = (path: string, context: AppContextType): ReactNode => {
    const [dir, file] = path.split('/');
    if (!dir || !file || !MOCK_FILESYSTEM[dir] || !MOCK_FILESYSTEM[dir][file]) {
        return <p className="text-destructive">cat: {path}: No such file or directory</p>;
    }
    const fileContent = MOCK_FILESYSTEM[dir][file];
    if (typeof fileContent === 'object' && fileContent.view) {
        context.setView(fileContent.view);
    }
    return <pre className="font-code whitespace-pre-wrap text-sm">{typeof fileContent === 'string' ? fileContent : fileContent.content}</pre>;
};

export const processCommand = (
  command: string,
  context: AppContextType
): { command: string; output: ReactNode } => {
  const [cmd, ...args] = command.trim().split(' ');

  switch (cmd.toLowerCase()) {
    case '':
      return { command, output: '' };
    case 'help':
      context.setView('help');
      return { command, output: <HelpView /> };

    case 'ls':
      const path = args[0] || '';
      return { command, output: listDirectory(path) };
    
    case 'cat':
      if (args.length === 0) {
        return { command, output: 'cat: missing file operand' };
      }
      return { command, output: catFile(args[0], context) };

    case 'kubectl':
      if (args[0] === 'get' && args[1] === 'pods') {
        context.setView('kubelet');
        return { command, output: 'Switching to Kubernetes cluster view...' };
      }
      return { command, output: `kubectl: unknown command '${args.join(' ')}'`};

    case 'run':
      if (args.length === 0) {
        return { command, output: 'run: missing project name' };
      }
      const projectToRun = PROJECTS.find(p => p.id.toLowerCase() === args[0].toLowerCase());
      if (projectToRun) {
        context.setView('kubelet');
        context.setActivePod(projectToRun.id);
        return { command, output: `Deploying pod/${projectToRun.id}...` };
      }
      return { command, output: `run: project '${args[0]}' not found` };

    case 'send_message':
      context.setView('contact');
      return { command, output: 'Opening secure contact form...' };

    case 'clear':
      context.clearHistory();
      return { command: '', output: '' }; // The clearHistory function handles the message

    case 'exit':
      context.exit();
      return { command, output: 'Disconnecting... Session closed.' };

    case 'sudo':
        return { command, output: 
          <div>
            <p className="text-destructive">COMMAND DENIED: Insufficient permissions.</p>
            <p className="font-code mt-2">> Nice try. Security is a feature, not a bug in this environment. 😉</p>
          </div>
        };

    default:
      return {
        command,
        output: `apve: command not found: ${command}`,
      };
  }
};
