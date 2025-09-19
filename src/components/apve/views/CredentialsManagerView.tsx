
'use client';
import { AWARDS_CERTIFICATIONS } from '@/lib/app-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// A tiny, gray SVG that will serve as a blur-up placeholder
const placeholderSvg = `
<svg width="800" height="565" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#333" />
</svg>
`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);


export function CredentialsManagerView() {
  const awards = AWARDS_CERTIFICATIONS.filter(cred => cred.type === 'award');
  const certificates = AWARDS_CERTIFICATIONS.filter(cred => cred.type === 'certificate');

  return (
    <div>
      <h1 className="font-headline font-bold text-2xl text-foreground mb-6">Awards & Certifications</h1>
      
      <div className="mb-12">
        <h2 className="font-headline text-xl text-primary mb-4">Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((cred) => (
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

      <div>
        <h2 className="font-headline text-xl text-primary mb-4">Certifications</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {certificates.map((cred) => (
              <CarouselItem key={cred.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer bg-transparent hover:border-primary/50 transition-colors group h-full flex flex-col">
                        <CardHeader className="flex-grow">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base group-hover:text-primary transition-colors">{cred.title}</CardTitle>
                            <Star className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                          </div>
                          <CardDescription>{cred.issuer} - {cred.year}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="link" className="p-0 h-auto text-sm">View Certificate</Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-3xl bg-background border-border">
                      <DialogHeader>
                        <DialogTitle className="text-primary text-2xl font-headline">{cred.title}</DialogTitle>
                        <DialogDescription>
                          {cred.issuer} - {cred.year}
                        </DialogDescription>
                      </DialogHeader>
                      {cred.imageUrl && (
                        <div className="relative w-full aspect-[1.414]">
                           <Image 
                             src={cred.imageUrl} 
                             alt={`${cred.title} Certificate`} 
                             unoptimized={true}
                             fill
                             className="object-contain"
                           />
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  );
}
