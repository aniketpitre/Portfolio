'use client';
import { AWARDS_CERTIFICATIONS } from '@/lib/app-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CredentialsManagerView() {
  return (
    <div>
      <h1 className="font-headline font-bold text-2xl text-foreground mb-6">Awards & Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS_CERTIFICATIONS.map((cred) => (
              <Dialog key={cred.id}>
                  <DialogTrigger asChild>
                      <Card className="cursor-pointer bg-transparent hover:border-primary/50 transition-colors group">
                          <CardHeader>
                              <div className="flex items-start justify-between">
                                  <CardTitle className="text-base group-hover:text-primary transition-colors">{cred.title}</CardTitle>
                                  <Award className="text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                              <CardDescription>{cred.issuer} - {cred.year}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button variant="link" className="p-0 h-auto text-sm">View Details</Button>
                          </CardContent>
                      </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl bg-background border-border">
                      <DialogHeader>
                          <DialogTitle className="text-primary text-2xl font-headline">{cred.title}</DialogTitle>
                          <DialogDescription>
                          {cred.issuer} - {cred.year}
                          </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 font-body text-foreground">
                          <p className='text-lg'>{cred.description}</p>
                          {cred.abstract && (
                              <div className="border-l-2 border-border pl-4">
                                  <h3 className="font-semibold mb-1">Abstract</h3>
                                  <p className="text-muted-foreground">{cred.abstract}</p>
                              </div>
                          )}
                      </div>
                  </DialogContent>
              </Dialog>
          ))}
      </div>
    </div>
  );
}
