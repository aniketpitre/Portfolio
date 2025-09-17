'use client';
import { BIO_CONTENT, userProfileImage } from '@/lib/app-data';
import Image from 'next/image';
import { User, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function UserProfileView() {
  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
        <User />
        <span>User Profile: aniket.pitre</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex flex-col items-center">
            {userProfileImage && (
                <Image
                    src={userProfileImage.imageUrl}
                    alt={userProfileImage.description}
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-primary shadow-lg"
                    data-ai-hint={userProfileImage.imageHint}
                />
            )}
            <div className="mt-4 flex gap-2">
                <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Email"><Mail className="h-4 w-4" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="GitHub"><Github className="h-4 w-4" /></a>
                </Button>
            </div>
        </div>
        <div className="md:col-span-2 bg-card p-4 rounded-lg border border-border">
          <pre className="font-code whitespace-pre-wrap text-sm text-foreground">
            {BIO_CONTENT}
          </pre>
        </div>
      </div>
    </div>
  );
}
