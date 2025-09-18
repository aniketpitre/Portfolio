'use client';

import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AvatarIcon } from './AvatarIcon';
import './UserProfileView.css';

export function UserProfileView() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <div className="mb-4">
            <AvatarIcon />
          </div>
          <h1 className="font-headline text-2xl font-bold text-foreground">Aniket Pitre</h1>
          <div className="mt-4 flex gap-2">
              <Button variant="outline" size="icon" asChild>
                  <a href="mailto:pitreaniket@gmail.com" aria-label="Email"><Mail className="h-4 w-4" /></a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/aniket-pitre" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/aniketpitre" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              </Button>
          </div>
        </div>
        <div className="md:col-span-2">
            <h2 className="font-headline text-xl font-bold text-foreground mb-4">About Me</h2>
            <div className="text-muted-foreground space-y-4">
                <p>I’m Aniket Pitre, an MCA postgraduate student driven by curiosity and innovation. My core interests lie in Cybersecurity, Linux, and Cloud technologies, where I enjoy exploring how systems work, how they break, and how to make them stronger.</p>
                <p>I focus on learning, experimenting, and applying concepts to solve real-world problems, while continuously expanding my skills across modern IT landscapes. With a vision to grow as a security and cloud-focused professional, I aim to create impactful solutions that blend technology, security, and efficiency.</p>
                <p>My journey so far has been shaped by hands-on experience in system administration, vulnerability management, and cloud-based problem solving, along with a strong drive to keep exploring new technologies.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
