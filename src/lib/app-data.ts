
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BrainCircuit, Cpu, Database, Server, Users } from 'lucide-react';

export const userProfileImage = PlaceHolderImages.find(p => p.id === 'user-profile');

export const BIO_CONTENT = `
> aniket.pitre(uid=1001)
> groups: wheel, dev, security-research

ACCESS GRANTED. DISPLAYING USER RECORD:
----------------------------------------
Aniket Pitre is a versatile and results-driven professional with a robust foundation in Computer Science and a specialized focus on Cybersecurity and Cloud Technologies. With hands-on experience in vulnerability assessment, penetration testing, and cloud orchestration using Docker and Kubernetes, he excels at bridging the gap between software development and system security.

His academic background, highlighted by a 'Best Paper' award, underscores his ability to conduct in-depth research and contribute meaningful insights to the field. Aniket is a proactive problem-solver, passionate about architecting secure, scalable, and resilient systems. He is constantly exploring emerging threats and innovative defensive strategies to stay at the forefront of the ever-evolving technology landscape.
`;

export const PROJECTS = [
  {
    id: 'ransomware-detector',
    name: 'Ransomware Detector',
    description: 'A real-time file integrity monitor that uses hashing algorithms to detect and flag unauthorized file modifications, simulating a key defense against ransomware.',
    techStack: ['Python', 'Hashing', 'File I/O'],
    status: 'Running',
  },
  {
    id: 'k8s-validator',
    name: 'K8s Pod Validator',
    description: 'An AI-powered tool to validate Kubernetes pod configurations. It uses a GenAI model to check if a pod\'s tech stack is appropriate for its described purpose.',
    techStack: ['Next.js', 'GenAI', 'Zod'],
    status: 'Running',
  },
  {
    id: 'virtual-tour',
    name: '3D Virtual Tour',
    description: 'A proof-of-concept for an immersive 3D tour of a college campus, built with fundamental web technologies and architectural visualization principles.',
    techStack: ['React', 'JavaScript', 'HTML/CSS'],
    status: 'Idle',
  },
  {
    id: 'portfolio-cli',
    name: 'APVE Environment',
    description: 'This very portfolio. A fully interactive, simulated command-line environment showcasing expertise in UI/UX, system design, and frontend development.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS'],
    status: 'Running',
  },
];

export const EXPERIENCE = [
  {
    id: 'tcs',
    timestamp: 'Aug-2022-2023',
    level: 'INFO',
    event: 'USER_ASSIGNED',
    user: 'aniket.pitre',
    role: 'SystemAdmin@TCS',
    details: 'As a System Administrator, performed comprehensive vulnerability scanning and penetration testing across enterprise systems. Developed and implemented security protocols, contributing to a significant reduction in system vulnerabilities.',
    awards: ['Best Team Award', 'Special Achievement Award'],
  },
  {
    id: 'codtech',
    timestamp: 'Jan-2025-2025',
    level: 'INFO',
    event: 'TRAINING_COMPLETED',
    user: 'aniket.pitre',
    role: 'Intern@CODTECH',
    details: 'Completed an intensive internship focused on Cybersecurity and Ethical Hacking. Conducted penetration testing on web applications, identified critical security flaws, and provided detailed reports with remediation strategies.',
    awards: [],
  },
];

export const EDUCATION_HISTORY = [
    {
        id: 'pg-mca',
        institution: 'K.K. Wagh Institute of Engineering (PG-MCA)',
        degree: 'Post-Graduate MCA',
        years: '2024-Present',
        details: 'Current CGPA: 7.77',
    },
    {
        id: 'bba-ca',
        institution: 'BYK College',
        degree: 'BBA-CA',
        years: '2019–2022',
        details: 'Final CGPA: 8.95',
    },
    {
        id: 'hsc',
        institution: 'Bhonsala Military Junior College',
        degree: 'HSC Commerce',
        years: '2017–2019',
        details: 'Final Grade: B',
    },
];

export const AWARDS_CERTIFICATIONS = [
    {
        id: 'award-paper',
        type: 'featured-badge',
        title: 'Best Paper Award',
        issuer: 'ICEISF',
        year: '2025',
        description: '“Tokenizing Trees as Digital Assets: Exploring Blockchain for Sustainable Investment”',
        abstract: 'This research explores the innovative application of blockchain technology to tokenize real-world forestry assets. It proposes a framework for creating transparent, liquid, and secure digital tokens that represent ownership in sustainable forestry projects. The paper examines the potential for this model to unlock new investment avenues, enhance ecological preservation efforts, and provide a decentralized mechanism for verifying carbon credits. By bridging the gap between environmental finance and distributed ledger technology, this work aims to foster a new class of green investments that are both profitable and ecologically responsible.'
    },
    {
        id: 'award-tcs-team',
        type: 'featured-badge',
        title: 'Best Team Award',
        issuer: 'Tata Consultancy Services',
        year: '2023',
        description: 'Recognized for outstanding collaboration and performance within the system administration team.',
        abstract: 'This award acknowledges the team\'s synergy, efficiency, and collective success in achieving project milestones and exceeding performance metrics. It highlights a commitment to shared goals and mutual support.'
    },
    {
        id: 'award-tcs-special',
        type: 'featured-badge',
        title: 'Special Achievement Award',
        issuer: 'Tata Consultancy Services',
        year: '2022',
        description: 'Awarded for exceptional contributions and dedication to improving enterprise security posture.',
        abstract: 'This individual honor recognizes proactive identification of critical vulnerabilities and the implementation of robust security measures that significantly enhanced the integrity and resilience of the company\'s digital infrastructure.'
    }
];

export const SKILLS_DATA = {
    technical: [
      {
        title: 'Programming & Web',
        icon: BrainCircuit,
        skills: ['Python', 'C', 'C++', 'JavaScript', 'PHP', 'React', 'Next.js', 'TypeScript', 'HTML/CSS'],
      },
      {
        title: 'System Administration',
        icon: Cpu,
        skills: ['Linux (RHCSA coursework)', 'Windows Server', 'Shell Scripting', 'Security Hardening'],
      },
      {
        title: 'Cloud & DevOps',
        icon: Server,
        skills: ['Git', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Technologies'],
      },
      {
        title: 'Databases',
        icon: Database,
        skills: ['Oracle', 'MySQL', 'MongoDB', 'SQL'],
      },
    ],
    soft: {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Analytical', 'Collaborator', 'Leader', 'Adaptable', 'Problem-Solving', 'Communication'],
    },
};


export const initialHistory = [
  {
    id: 0,
    command: 'uname -a',
    output: 'Linux apitre.io 5.4.0-150-generic #167-Ubuntu SMP Mon May 15 17:29:33 UTC 2023 x86_64 GNU/Linux',
  },
  {
    id: 1,
    command: 'init',
    output: `Success. Spawning guest shell... Welcome to 'help' to see available commands.`
  }
];
