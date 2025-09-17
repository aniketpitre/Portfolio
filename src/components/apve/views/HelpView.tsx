import { HelpCircle } from "lucide-react";

const commands = [
    { cmd: 'help', desc: 'Shows this list of available commands.' },
    { cmd: 'ls [dir]', desc: 'Lists contents of a directory (e.g., `ls experience`). If no directory is specified, lists root directories.' },
    { cmd: 'cat <file>', desc: 'Displays file content (e.g., `cat about/bio.txt`).' },
    { cmd: 'kubectl get pods', desc: 'Switches to the interactive Kubernetes project view.' },
    { cmd: 'run <project_id>', desc: 'Directly deploys and views a specific project pod.' },
    { cmd: 'send_message', desc: 'Opens the secure contact form.' },
    { cmd: 'whoami', desc: 'Displays the current user.' },
    { cmd: 'date', desc: 'Displays the current date and time.' },
    { cmd: 'echo <text>', desc: 'Prints the provided text to the console.' },
    { cmd: 'uname', desc: 'Displays system information.' },
    { cmd: 'clear', desc: 'Clears the terminal history.' },
    { cmd: 'exit', desc: 'Closes the guest session.' },
];

export function HelpView() {
    return (
        <div className="max-w-4xl">
             <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
                <HelpCircle />
                <span>APVE Command Manual</span>
            </h1>
            <div className="font-code text-sm">
                {commands.map(c => (
                    <div key={c.cmd} className="flex flex-col sm:flex-row mb-2">
                        <p className="w-48 text-accent">{c.cmd}</p>
                        <p className="text-muted-foreground">{c.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
