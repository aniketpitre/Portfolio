
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BrainCircuit, Cpu, Database, Server, Users, Wrench, Camera, Film, Gamepad, Palette } from 'lucide-react';

export const userProfileImage = PlaceHolderImages.find(p => p.id === 'user-profile');
export const professionalProfileImage = PlaceHolderImages.find(p => p.id === 'user-profile-professional');


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
- Conducted regular vulnerability scans on diverse enterprise environments, including Linux (RHEL, CentOS) and Windows servers, using industry-standard tools like Nessus and Qualys.
- Analyzed scan reports to prioritize vulnerabilities based on CVSS scores and business impact.
- Collaborated with system owners to coordinate and apply patches, ensuring minimal disruption to production services.
Security Patching & System Hardening:
- Managed the end-to-end lifecycle of security patching across the organization’s infrastructure.
- Ensured timely remediation of critical vulnerabilities to reduce risk exposure and maintain compliance with security policies.
- Implemented system hardening best practices, configuring servers and applications to resist common attack vectors.`,
    awards: ['Best Team Award', 'Special Achievement Award'],
  },
  {
    id: 'codtech',
    timestamp: 'Jan 2025',
    level: 'INFO',
    event: 'TRAINING_COMPLETED',
    user: 'aniket.pitre',
    role: 'Cybersecurity Intern @ CODTECH',
    details: `Codtech IT Solutions
Gained hands-on experience in Cybersecurity and Ethical Hacking through a series of practical projects. My work focused on developing defensive security tools and scripts to address common cyber threats.
Key Responsibilities & Accomplishments:
- Developed multiple Python-based security tools, including an encryption utility and a file integrity monitor.
- Conducted simulated penetration tests on internal lab environments to identify vulnerabilities.
- Documented findings and contributed to reports outlining security weaknesses and recommended remediation strategies.`,
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
        description: 'Pursuing a Master of Computer Applications with a focus on advanced computing concepts, including AI, cybersecurity, and cloud technologies. This program involves intensive, hands-on lab work and project-based learning.',
        years: '2024 - Present',
        details: 'Key Coursework: Advanced Data Structures, AI & Machine Learning, Network Security, Cloud Computing. Current CGPA: 7.77',
    },
    {
        id: 'bba-ca',
        institution: 'BYK College',
        degree: 'BBA-CA',
        description: 'Completed a Bachelor of Business Administration in Computer Applications, blending management principles with technical skills. The curriculum provided a strong foundation in programming, database management, and business analytics.',
        years: '2019 – 2022',
        details: 'Developed a strong aptitude for bridging the gap between technical solutions and business objectives. Final CGPA: 8.95',
    },
    {
        id: 'hsc',
        institution: 'Bhonsala Military Junior College',
        degree: 'HSC Commerce',
        description: 'Completed higher secondary education with a focus on commerce, accounts, and economics. This disciplined environment fostered a strong sense of responsibility and analytical thinking.',
        years: '2017 – 2019',
        details: 'Gained foundational knowledge in financial principles and business operations. Final Grade: B',
    },
];

export const AWARDS_CERTIFICATIONS = [
    {
        id: 'award-paper',
        type: 'award',
        title: 'Best Paper Award',
        issuer: 'ICEISF Conference',
        year: '2025',
        description: '“Tokenizing Trees as Digital Assets: Exploring Blockchain for Sustainable Investment”',
        abstract: 'This research explores the innovative application of blockchain technology to tokenize real-world forestry assets. It proposes a framework for creating transparent, liquid, and secure digital tokens that represent ownership in sustainable forestry projects.'
    },
    {
        id: 'award-tcs-team',
        type: 'award',
        title: 'Best Team Award',
        issuer: 'Tata Consultancy Services',
        year: '2023',
        description: 'Recognized for outstanding collaboration and performance within the system administration team.',
        abstract: 'This award acknowledges the team\'s synergy, efficiency, and collective success in achieving project milestones and exceeding performance metrics.'
    },
    {
        id: 'award-tcs-special',
        type: 'award',
        title: 'Special Achievement Award',
        issuer: 'Tata Consultancy Services',
        year: '2022',
        description: 'Awarded for exceptional contributions and dedication to improving enterprise security posture.',
        abstract: 'This individual honor recognizes proactive identification of critical vulnerabilities and the implementation of robust security measures.'
    },
    {
        id: 'cert-ms-ai',
        type: 'certificate',
        title: 'Microsoft AI Skill Challenge',
        issuer: 'Microsoft',
        year: '2024',
        imageUrl: 'https://drive.google.com/uc?export=view&id=1CQ5hygZwMTa5zKv6F1l1rLe63ggDRckG'
    },
    {
        id: 'cert-aws-cloud-practitioner',
        type: 'certificate',
        title: 'AWS Cloud Practitioner Essentials',
        issuer: 'AWS',
        year: '2025',
        imageUrl: 'https://drive.google.com/uc?export=view&id=1as-IPnRbrVhtkabbnJYG-IvbRlKe7KzR'
    }
];

export const SKILL_CATEGORIES = {
    'Programming & Web': { icon: BrainCircuit, color: '#60a5fa' }, // blue-400
    'Cloud & DevOps': { icon: Server, color: '#c084fc' }, // purple-400
    'System Administration': { icon: Cpu, color: '#4ade80' }, // green-400
    'Databases': { icon: Database, color: '#fb923c' }, // orange-400
    'Creative': { icon: Palette, color: '#f87171' }, // red-400
    'Soft Skills': { icon: Users, color: '#facc15' }, // yellow-400
    'Hobbies & Interests': { icon: Gamepad, color: '#f472b6' }, // pink-400
};

export const SKILLS_LIST = [
    { name: 'Python', category: 'Programming & Web', level: 'Advanced' },
    { name: 'C/C++', category: 'Programming & Web', level: 'Proficient' },
    { name: 'JavaScript', category: 'Programming & Web', level: 'Proficient' },
    { name: 'PHP', category: 'Programming & Web', level: 'Intermediate' },
    { name: 'React', category: 'Programming & Web', level: 'Proficient' },
    { name: 'Next.js', category: 'Programming & Web', level: 'Proficient' },
    { name: 'TypeScript', category: 'Programming & Web', level: 'Intermediate' },
    { name: 'HTML/CSS', category: 'Programming & Web', level: 'Advanced' },
    { name: 'Linux', category: 'System Administration', level: 'Advanced' },
    { name: 'Windows Server', category: 'System Administration', level: 'Proficient' },
    { name: 'Shell Scripting', category: 'System Administration', level: 'Proficient' },
    { name: 'Security Hardening', category: 'System Administration', level: 'Advanced' },
    { name: 'Git', category: 'Cloud & DevOps', level: 'Advanced' },
    { name: 'Docker', category: 'Cloud & DevOps', level: 'Proficient' },
    { name: 'Kubernetes', category: 'Cloud & DevOps', level: 'Intermediate' },
    { name: 'CI/CD', category: 'Cloud & DevOps', level: 'Intermediate' },
    { name: 'AWS', category: 'Cloud & DevOps', level: 'Intermediate' },
    { name: 'Oracle', category: 'Databases', level: 'Intermediate' },
    { name: 'MySQL', category: 'Databases', level: 'Proficient' },
    { name: 'MongoDB', category: 'Databases', level: 'Beginner' },
    { name: 'SQL', category: 'Databases', level: 'Advanced' },
    { name: 'Photo Editing', category: 'Creative', level: 'Proficient' },
    { name: 'Photography', category: 'Creative', level: 'Hobbyist' },
    { name: 'Video Editing', category: 'Creative', level: 'Intermediate' },
    { name: 'Analytical', category: 'Soft Skills', level: 'Core Strength' },
    { name: 'Collaboration', category: 'Soft Skills', level: 'Core Strength' },
    { name: 'Leadership', category: 'Soft Skills', level: 'Core Strength' },
    { name: 'Adaptability', category: 'Soft Skills', level: 'Core Strength' },
    { name: 'Problem-Solving', category: 'Soft Skills', level: 'Core Strength' },
    { name: 'Communication', category: 'Soft Skills', level: 'Core Strength' },
    { name: 'Watching Movies', category: 'Hobbies & Interests', level: 'Cinephile' },
    { name: 'Volleyball', category: 'Hobbies & Interests', level: 'Team Player' },
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
