import { HelpCircle } from "lucide-react";
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};


export function HelpView() {
    return (
        <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
             <h1 className="font-headline text-2xl font-bold text-foreground mb-4">Command Manual</h1>
            <p className="text-muted-foreground mb-6">This is a simulated shell. Use the commands below to navigate the environment or use the sidebar for direct access.</p>
            <motion.div 
                className="font-code text-sm space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {commands.map(c => (
                    <motion.div key={c.cmd} className="flex flex-col sm:flex-row" variants={itemVariants}>
                        <p className="w-48 text-primary font-medium">{c.cmd}</p>
                        <p className="text-muted-foreground">{c.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
