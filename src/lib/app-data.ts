import { PlaceHolderImages } from '@/lib/placeholder-images';

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

export const EDUCATION = [
    {
        id: 'degree',
        type: 'badge',
        title: 'Bachelor of Engineering - Computer Science',
        issuer: 'University of Mumbai',
        year: '2019-2023',
        description: 'Completed a comprehensive B.E. in Computer Science, building a strong foundation in algorithms, data structures, software engineering, and systems architecture.'
    },
    {
        id: 'award-paper',
        type: 'featured-badge',
        title: 'Best Paper Award - ICRTIEA-2022',
        issuer: 'Fr. C. Rodrigues Institute of Technology',
        year: '2022',
        description: 'Awarded "Best Paper" for research on "A Study on the Effectiveness of Machine Learning Algorithms in the Detection of SQL Injection Attacks." The paper was published in the ICRTIEA-2022 conference proceedings, showcasing advanced research capabilities in cybersecurity.',
        abstract: 'This research evaluates the performance of various machine learning classifiers—including Support Vector Machines, Naive Bayes, and Random Forests—in identifying SQL injection vulnerabilities. By analyzing patterns in HTTP requests, the study demonstrates the high efficacy of ML-based approaches over traditional signature-based methods, proposing a more dynamic and resilient defense mechanism against evolving cyber threats.'
    }
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
    output: `Success. Spawning guest shell... Welcome to APVE. Type 'help' to see available commands.`
  }
];
