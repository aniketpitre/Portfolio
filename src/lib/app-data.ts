import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BrainCircuit, Cpu, Database, Server, Users, Wrench, Camera, Film, Gamepad, Palette } from 'lucide-react';

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
      description: 'A real-time file system monitor designed to detect ransomware-like activity. It automatically backs up modified files, quarantines suspicious executables, and sends alerts to the administrator.',
      techStack: ['PHP', 'JavaScript', 'MySQL', 'File System API'],
      status: 'Running',
      link: 'https://github.com/Aniket-Pitre/SMART-RANSOMWARE-DETECTOR-AND-AUTO-BACKUP-SYSTEM'
    },
    {
      id: 'encryption-tool',
      name: 'Advanced Encryption Tool',
      description: 'A command-line utility for robust, secure data encryption. It implements AES-256 in CBC mode and uses PBKDF2HMAC for secure key derivation from a user-provided password.',
      techStack: ['Python', 'AES-256', 'Cryptography', 'CLI'],
      status: 'Running',
      link: 'https://github.com/Aniket-Pitre/CODTECH-Task-1'
    },
    {
        id: 'pen-testing-toolkit',
        name: 'Penetration Testing Toolkit',
        description: 'A modular Python framework designed for network security auditing, including a TCP port scanner and a brute-force module.',
        techStack: ['Python', 'Networking', 'Security', 'Socket Programming'],
        status: 'Idle',
        link: 'https://github.com/Aniket-Pitre/CODTECH-Task-2'
    },
    {
        id: 'file-integrity-checker',
        name: 'File Integrity Checker',
        description: 'A security tool that monitors directories for unauthorized changes by generating and comparing SHA-256 hashes of files.',
        techStack: ['Python', 'SHA-256', 'File I/O', 'JSON'],
        status: 'Running',
        link: 'https://github.com/Aniket-Pitre/CODTECH-Task-3'
    },
    {
        id: 'virtual-tour',
        name: 'KKWIEER Virtual Tour',
        description: 'An interactive and immersive virtual tour of the MCA department at KKWIEER. Built with React, this single-page application provides a seamless user experience.',
        techStack: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
        status: 'Idle',
        link: 'https://github.com/Aniket-Pitre/KKWIEER-Virtual-Tour'
    },
    {
      id: 'k8s-validator',
      name: 'AI K8s Validator',
      description: 'An interactive AI-powered demo that validates if a Kubernetes pod\'s tech stack is appropriate for its stated purpose. Powered by Google\'s Genkit.',
      techStack: ['Next.js', 'TypeScript', 'Genkit', 'AI/ML'],
      status: 'Running',
      link: '#'
    },
  ];

export const EXPERIENCE = [
  {
    id: 'tcs',
    timestamp: 'Aug 2022 - 2023',
    level: 'INFO',
    event: 'ASSIGNMENT_COMPLETED',
    user: 'aniket.pitre',
    role: 'System Administrator @ TCS',
    details: `Tata Consultancy Services
Vulnerability Scanning & Management:
- Conducted regular vulnerability scans on Linux and Windows servers.
- Applied patches and updates to ensure systems remained secure.
Security Patching:
- Managed and implemented security patches across the organization’s infrastructure.
- Ensured timely remediation of vulnerabilities to reduce risk exposure.`,
    awards: ['Best Team Award', 'Special Achievement Award'],
  },
  {
    id: 'codtech',
    timestamp: 'Jan 2025',
    level: 'INFO',
    event: 'TRAINING_COMPLETED',
    user: 'aniket.pitre',
    role: 'Cybersecurity Intern @ CODTECH',
    details: 'Codtech: Completed an internship in Cybersecurity and Ethical Hacking. Conducted penetration testing, identified flaws, and reported on remediation strategies.',
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
        years: '2024 - Present',
        details: 'Current CGPA: 7.77',
    },
    {
        id: 'bba-ca',
        institution: 'BYK College',
        degree: 'BBA-CA',
        description: 'Foundation in business administration with a focus on computer applications.',
        years: '2019 – 2022',
        details: 'Final CGPA: 8.95',
    },
    {
        id: 'hsc',
        institution: 'Bhonsala Military Junior College',
        degree: 'HSC Commerce',
        description: 'Higher secondary education in commerce stream.',
        years: '2017 – 2019',
        details: 'Final Grade: B',
    },
];

export const AWARDS_CERTIFICATIONS = [
    {
        id: 'award-paper',
        type: 'featured-badge',
        title: 'Best Paper Award',
        issuer: 'ICEISF Conference',
        year: '2025',
        description: '“Tokenizing Trees as Digital Assets: Exploring Blockchain for Sustainable Investment”',
        abstract: 'This research explores the innovative application of blockchain technology to tokenize real-world forestry assets. It proposes a framework for creating transparent, liquid, and secure digital tokens that represent ownership in sustainable forestry projects.'
    },
    {
        id: 'award-tcs-team',
        type: 'featured-badge',
        title: 'Best Team Award',
        issuer: 'Tata Consultancy Services',
        year: '2023',
        description: 'Recognized for outstanding collaboration and performance within the system administration team.',
        abstract: 'This award acknowledges the team\'s synergy, efficiency, and collective success in achieving project milestones and exceeding performance metrics.'
    },
    {
        id: 'award-tcs-special',
        type: 'featured-badge',
        title: 'Special Achievement Award',
        issuer: 'Tata Consultancy Services',
        year: '2022',
        description: 'Awarded for exceptional contributions and dedication to improving enterprise security posture.',
        abstract: 'This individual honor recognizes proactive identification of critical vulnerabilities and the implementation of robust security measures.'
    }
];

export const SKILL_CATEGORIES = {
    'Programming & Web': { icon: BrainCircuit, color: 'text-blue-400' },
    'Cloud & DevOps': { icon: Server, color: 'text-purple-400' },
    'System Administration': { icon: Cpu, color: 'text-green-400' },
    'Databases': { icon: Database, color: 'text-orange-400' },
    'Creative': { icon: Palette, color: 'text-red-400' },
    'Soft Skills': { icon: Users, color: 'text-yellow-400' },
    'Hobbies & Interests': { icon: Gamepad, color: 'text-pink-400' },
};

export const SKILLS_LIST = [
    { name: 'Python', category: 'Programming & Web' },
    { name: 'C/C++', category: 'Programming & Web' },
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
    { name: 'Collaboration', category: 'Soft Skills' },
    { name: 'Leadership', category: 'Soft Skills' },
    { name: 'Adaptability', category: 'Soft Skills' },
    { name: 'Problem-Solving', category: 'Soft Skills' },
    { name: 'Communication', category: 'Soft Skills' },
    { name: 'Watching Movies', category: 'Hobbies & Interests' },
    { name: 'Volleyball', category: 'Hobbies & Interests' },
];

export const initialHistory = [
  {
    id: 0,
    command: 'uname -a',
    output: 'Linux aniketpitre.com 6.1.0-generic x86_64 GNU/Linux',
  },
  {
    id: 1,
    command: 'init',
    output: `Welcome. Type 'help' to see available commands.`
  }
];

// Note: The 'SKILLS' export below is for the command processor and is different from SKILLS_DATA.
// It is intentionally simplified for the 'cat' command.
export const SKILLS = `
Technical Skills:
- Programming: Python, C/C++, JavaScript, PHP, React, Next.js
- System Admin: Linux, Windows Server
- Cloud/DevOps: Git, Docker, Kubernetes, CI/CD, AWS
- Databases: Oracle, MySQL, MongoDB, SQL

Soft Skills:
- Analytical, Collaboration, Leadership, Adaptability

Hobbies:
- Watching Movies & Series, Playing Volleyball
`;
