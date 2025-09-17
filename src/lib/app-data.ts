
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BrainCircuit, Cpu, Database, Server, Users, Wrench, Camera, Film, Gamepad } from 'lucide-react';

export const userProfileImage = PlaceHolderImages.find(p => p.id === 'user-profile');

export const BIO_CONTENT = `
> aniket.pitre(uid=1001)
> groups: wheel, dev, security-research

ACCESS GRANTED. DISPLAYING USER RECORD:
----------------------------------------
I’m Aniket Pitre, an MCA postgraduate student driven by curiosity and innovation. My core interests lie in Cybersecurity, Linux, and Cloud technologies, where I enjoy exploring how systems work, how they break, and how to make them stronger. I focus on learning, experimenting, and applying concepts to solve real-world problems, while continuously expanding my skills across modern IT landscapes. With a vision to grow as a security and cloud-focused professional, I aim to create impactful solutions that blend technology, security, and efficiency.

Beyond academics, I actively engage in research, projects, and collaborations that challenge me to think critically and creatively. My journey so far has been shaped by hands-on experience in system administration, vulnerability management, and cloud-based problem solving, along with a strong drive to keep exploring new technologies. I believe in combining technical skills with a forward-looking vision, contributing to solutions that are not only secure and reliable but also innovative and sustainable.
`;

export const PROJECTS = [
    {
      id: 'ransomware-detector',
      name: 'Smart Ransomware Detector',
      description: 'A real-time file system monitor designed to detect ransomware-like activity. It automatically backs up modified files, quarantines suspicious executables, and sends alerts to the administrator. The dashboard features disk health charts and a sleek, responsive interface with GSAP animations and a dark/light theme toggle.',
      techStack: ['PHP', 'JavaScript', 'GSAP', 'MySQL', 'File System API'],
      status: 'Running',
    },
    {
      id: 'encryption-tool',
      name: 'Advanced Encryption Tool',
      description: 'A command-line utility for robust, secure data encryption. It implements AES-256 in CBC mode with PKCS7 padding and uses the PBKDF2HMAC algorithm for secure key derivation from a user-provided password, ensuring strong protection against brute-force attacks and providing reliable data confidentiality.',
      techStack: ['Python', 'AES-256', 'PBKDF2HMAC', 'Cryptography', 'CLI'],
      status: 'Running',
    },
    {
        id: 'pen-testing-toolkit',
        name: 'Penetration Testing Toolkit',
        description: 'A modular Python framework designed for network security auditing. The toolkit includes an extensible architecture for adding new modules, with initial tools for TCP port scanning to identify open ports and a brute-force module to demonstrate password attack vectors on network services.',
        techStack: ['Python', 'Networking', 'Security', 'Socket Programming'],
        status: 'Idle',
    },
    {
        id: 'file-integrity-checker',
        name: 'File Integrity Checker',
        description: 'A security tool that monitors specified directories for unauthorized changes. It generates SHA-256 hashes of files and stores them in a JSON database. On subsequent runs, it re-calculates hashes and compares them against the stored values to detect any tampering or unauthorized modifications.',
        techStack: ['Python', 'SHA-256', 'File I/O', 'JSON'],
        status: 'Running',
    },
    {
        id: 'virtual-tour',
        name: 'KKWIEER Virtual Tour',
        description: 'An interactive and immersive virtual tour of the MCA department at KKWIEER. Built with React, this single-page application provides a seamless user experience, allowing prospective students to explore the campus facilities and department highlights from anywhere. It is designed to be fully responsive and scalable.',
        techStack: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
        status: 'Idle',
    },
    {
      id: 'k8s-validator',
      name: 'AI K8s Validator',
      description: 'An interactive AI-powered demo that validates if a Kubernetes pod\'s tech stack is appropriate for its stated purpose. Powered by Google\'s Genkit, this tool showcases the power of language models in DevOps workflows, providing instant feedback on infrastructure decisions.',
      techStack: ['Next.js', 'TypeScript', 'Genkit', 'AI/ML', 'Zod'],
      status: 'Running',
    },
  ];

export const EXPERIENCE = [
  {
    id: 'tcs',
    timestamp: 'Aug-2022-2023',
    level: 'INFO',
    event: 'ASSIGNMENT_COMPLETED',
    user: 'aniket.pitre',
    role: 'SystemAdmin@TCS',
    details: `Tata Consultancy Services - System Administrator:
Vulnerability Scanning & Management:
- Conducted regular vulnerability scans on Linux and Windows servers to identify security weaknesses.
- Applied patches and updates to ensure systems remained secure.
Security Patching:
- Managed and implemented security patches across the organization’s infrastructure.
- Ensured timely remediation of vulnerabilities to reduce risk exposure.
Compliance Management:
- Ensured all systems met internal security standards and external compliance regulations.
- Maintained a rigorous patch management schedule and audited system configurations.
Collaboration & Reporting:
- Collaborated with cross-functional teams to resolve identified vulnerabilities.
- Provided regular reports on the status of security patches and compliance metrics.`,
    awards: ['Best Team Award', 'Special Achievement Award'],
  },
  {
    id: 'codtech',
    timestamp: 'Jan-2025',
    level: 'INFO',
    event: 'TRAINING_COMPLETED',
    user: 'aniket.pitre',
    role: 'Intern@CODTECH',
    details: 'Codtech - Intern: Completed an intensive internship focused on Cybersecurity and Ethical Hacking. Conducted penetration testing on web applications, identified critical security flaws, and provided detailed reports with remediation strategies. Key projects developed during this internship are listed below.',
    awards: [],
    projects: [
        { id: 'encryption-tool', name: 'Advanced Encryption Tool'},
        { id: 'pen-testing-toolkit', name: 'Penetration Testing Toolkit'},
        { id: 'file-integrity-checker', name: 'File Integrity Checker'},
    ],
  },
];

export const EDUCATION_HISTORY = [
    {
        id: 'pg-mca',
        institution: 'K.K. Wagh Institute of Engineering (PG-MCA)',
        degree: 'Post-Graduate MCA',
        description: 'Advanced studies in computer applications and software development.',
        years: '2024-Present',
        details: 'Current CGPA: 7.77',
    },
    {
        id: 'bba-ca',
        institution: 'BYK College',
        degree: 'BBA-CA',
        description: 'Foundation in business administration with a focus on computer applications.',
        years: '2019–2022',
        details: 'Final CGPA: 8.95',
    },
    {
        id: 'hsc',
        institution: 'Bhonsala Military Junior College',
        degree: 'HSC Commerce',
        description: 'Higher secondary education in commerce stream.',
        years: '2017–2019',
        details: 'Final Grade: B',
    },
];

export const AWARDS_CERTIFICATIONS = [
    {
        id: 'award-paper',
        type: 'featured-badge',
        title: '🏆 Best Paper Award — ICEISF (Jan 2025)',
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

export const SKILL_CATEGORIES = {
    'Programming & Web': { icon: BrainCircuit, color: 'text-cyan-400' },
    'System Administration': { icon: Cpu, color: 'text-green-400' },
    'Cloud & DevOps': { icon: Server, color: 'text-blue-400' },
    'Databases': { icon: Database, color: 'text-yellow-400' },
    'Creative': { icon: Camera, color: 'text-purple-400' },
    'Soft Skills': { icon: Users, color: 'text-pink-400' },
    'Hobbies & Interests': { icon: Gamepad, color: 'text-orange-400' },
};

export const SKILLS_LIST = [
    { name: 'Python', category: 'Programming & Web' },
    { name: 'C', category: 'Programming & Web' },
    { name: 'C++', category: 'Programming & Web' },
    { name: 'JavaScript', category: 'Programming & Web' },
    { name: 'PHP', category: 'Programming & Web' },
    { name: 'React', category: 'Programming & Web' },
    { name: 'Next.js', category: 'Programming & Web' },
    { name: 'TypeScript', category: 'Programming & Web' },
    { name: 'HTML/CSS', category: 'Programming & Web' },
    { name: 'Linux', category: 'System Administration' },
    { name: 'Windows Server', category: 'System Administration' },
    { name: 'Shell Scripting', category: 'System Administration' },
    { name: 'Security Hardening', category: 'System Administration' },
    { name: 'Git', category: 'Cloud & DevOps' },
    { name: 'Docker', category: 'Cloud & DevOps' },
    { name: 'Kubernetes', category: 'Cloud & DevOps' },
    { name: 'CI/CD', category: 'Cloud & DevOps' },
    { name: 'AWS', category: 'Cloud & DevOps' },
    { name: 'Oracle', category: 'Databases' },
    { name: 'MySQL', category: 'Databases' },
    { name: 'MongoDB', category: 'Databases' },
    { name: 'SQL', category: 'Databases' },
    { name: 'Photo Editing', category: 'Creative' },
    { name: 'Photography', category: 'Creative' },
    { name: 'Video Editing', category: 'Creative' },
    { name: 'Analytical', category: 'Soft Skills' },
    { name: 'Collaborator', category: 'Soft Skills' },
    { name: 'Leader', category: 'Soft Skills' },
    { name: 'Adaptable', category: 'Soft Skills' },
    { name: 'Problem-Solving', category: 'Soft Skills' },
    { name: 'Communication', category: 'Soft Skills' },
    { name: 'Watching Movies', category: 'Hobbies & Interests' },
    { name: 'Volleyball', category: 'Hobbies & Interests' },
];

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

// Note: The 'SKILLS' export below is for the command processor and is different from SKILLS_DATA.
// It is intentionally simplified for the 'cat' command.
export const SKILLS = `
Technical Skills:
- Programming: Python, C, C++, JavaScript, PHP, React
- System Admin: Linux (RHCSA coursework), Windows
- Cloud/DevOps: Git, Docker, Kubernetes, AWS
- Databases: Oracle, MySQL, MongoDB
- Creative: Photo Editing, Photography, Video Editing

Soft Skills:
- Analytical, Collaborator, Leader, Adaptable

Hobbies:
- Watching Movies & Series, Playing Volleyball
`;
