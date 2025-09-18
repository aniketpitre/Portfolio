import { HelpCircle } from "lucide-react";

const commands = [
    { cmd: 'help', desc: 'Shows this list of available commands.' },
    { cmd: 'ls [dir]', desc: 'Lists contents of a directory (e.g., `ls experience`).' },
    { cmd: 'cat <file>', desc: 'Displays file content (e.g., `cat about/bio.txt`).' },
    { cmd: 'view <view_id>', desc: 'Switches to a specific view (e.g., `view skills`).' },
    { cmd: 'run <project_id>', desc: 'Directly deploys and views a specific project pod.' },
    { cmd: 'send_message', desc: 'Opens the contact form view.' },
    { cmd: 'clear', desc: 'Clears the terminal history.' },
    { cmd: 'exit', desc: 'Closes the guest session.' },
];

export function HelpView() {
    return (
        <div className="max-w-4xl">
             <h1 className="font-headline text-2xl font-bold text-foreground mb-4">Command Manual</h1>
            <p className="text-muted-foreground mb-6">This is a simulated shell. Use the commands below to navigate the environment or use the sidebar for direct access.</p>
            <div className="font-code text-sm space-y-2">
                {commands.map(c => (
                    <div key={c.cmd} className="flex flex-col sm:flex-row">
                        <p className="w-48 text-primary font-medium">{c.cmd}</p>
                        <p className="text-muted-foreground">{c.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
