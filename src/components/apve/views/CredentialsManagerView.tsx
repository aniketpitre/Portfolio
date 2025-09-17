
'use client';
import { AWARDS_CERTIFICATIONS } from '@/lib/app-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { GraduationCap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CredentialsManagerView() {
  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
        <GraduationCap />
        <span>/etc/badges</span>
      </h1>
      <div className="mb-8">
        <h2 className="font-headline text-xl text-accent/80 mb-4 flex items-center gap-2">
            <Award className="h-5 w-5" />
            <span>Awards & Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AWARDS_CERTIFICATIONS.map((cred) => {
                const BadgeContent = () => (
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{cred.title}</CardTitle>
                            <Award className="text-amber-400" />
                        </div>
                        <CardDescription>{cred.issuer} - {cred.year}</CardDescription>
                    </CardHeader>
                );
    
                return (
                    <Dialog key={cred.id}>
                        <DialogTrigger asChild>
                        <Card className="cursor-pointer bg-card/80 border-amber-500/50 hover:border-amber-500 transition-all amber-glow">
                            <BadgeContent />
                            <CardContent>
                                <p className="text-sm font-medium">{cred.description}</p>
                                <p className="text-sm text-muted-foreground mt-2">Click to view abstract.</p>
                            </CardContent>
                        </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl bg-background border-primary">
                        <DialogHeader>
                            <DialogTitle className="text-accent text-2xl font-headline">{cred.title}</DialogTitle>
                            <DialogDescription>
                            {cred.issuer} - {cred.year}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 font-body text-foreground">
                            <p className='text-lg font-medium'>{cred.description}</p>
                            {cred.abstract && (
                                <div className="border-l-4 border-accent pl-4">
                                    <h3 className="font-semibold mb-2">Abstract</h3>
                                    <p className="text-muted-foreground">{cred.abstract}</p>
                                </div>
                            )}
                        </div>
                        </DialogContent>
                    </Dialog>
                );
            })}
        </div>
    </div>
    </div>
  );
}
