'use client';
import { EDUCATION } from '@/lib/app-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { GraduationCap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function CredentialsManagerView() {
  return (
    <div>
      <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
        <GraduationCap />
        <span>/etc/badges</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION.map((cred) => {
          const isFeatured = cred.type === 'featured-badge';
          
          const BadgeContent = () => (
            <CardHeader>
                <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{cred.title}</CardTitle>
                    <Award className={cn("text-yellow-400", isFeatured && "text-amber-400")} />
                </div>
                <CardDescription>{cred.issuer} - {cred.year}</CardDescription>
            </CardHeader>
          );

          if (isFeatured) {
            return (
              <Dialog key={cred.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer bg-card/80 border-amber-500/50 hover:border-amber-500 transition-all amber-glow">
                    <BadgeContent />
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Click to view details and abstract.</p>
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
                    <p>{cred.description}</p>
                    <div className="border-l-4 border-accent pl-4">
                        <h3 className="font-semibold mb-2">Abstract</h3>
                        <p className="text-muted-foreground">{cred.abstract}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          }
          
          return (
            <Card key={cred.id} className="bg-card">
              <BadgeContent />
              <CardContent>
                <p className="text-sm text-muted-foreground">{cred.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
