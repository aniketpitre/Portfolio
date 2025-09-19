
'use client';
import { AWARDS_CERTIFICATIONS } from '@/lib/app-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const placeholderSvg = `
<svg width="800" height="565" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#333" />
</svg>
`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};


export function CredentialsManagerView() {

  return (
    <div>
      <motion.h1 
        className="font-headline font-bold text-2xl text-foreground mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Awards & Certifications
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
          {AWARDS_CERTIFICATIONS.map((cred) => (
              <Dialog key={cred.id}>
                  <DialogTrigger asChild>
                    <motion.div variants={itemVariants} className="h-full">
                      <Card className="cursor-pointer bg-transparent hover:border-primary/50 transition-colors group flex flex-col h-full">
                          <CardHeader className="flex-grow">
                              <div className="flex items-start justify-between">
                                  <CardTitle className="text-base group-hover:text-primary transition-colors">{cred.title}</CardTitle>
                                  {cred.type === 'award' ? (
                                    <Award className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                                  ) : (
                                    <Star className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                                  )}
                              </div>
                              <CardDescription>{cred.issuer} - {cred.year}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button variant="link" className="p-0 h-auto text-sm">
                              {cred.imageUrl ? 'View Certificate' : 'View Details'}
                            </Button>
                          </CardContent>
                      </Card>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl bg-background border-border">
                      <DialogHeader>
                          <DialogTitle className="text-primary text-2xl font-headline">{cred.title}</DialogTitle>
                          <DialogDescription>
                          {cred.issuer} - {cred.year}
                          </DialogDescription>
                      </DialogHeader>
                      {cred.imageUrl ? (
                        <div className="relative w-full aspect-video">
                           <Image 
                             src={cred.imageUrl} 
                             alt={`${cred.title} Certificate`} 
                             fill
                             objectFit="contain"
                             placeholder="blur"
                             blurDataURL={`data:image/svg+xml;base64,${toBase64(placeholderSvg)}`}
                           />
                        </div>
                      ) : (
                        <div className="space-y-4 font-body text-foreground">
                            <p className='text-lg'>{cred.description}</p>
                            {cred.abstract && (
                                <div className="border-l-2 border-border pl-4">
                                    <h3 className="font-semibold mb-1">Abstract</h3>
                                    <p className="text-muted-foreground">{cred.abstract}</p>
                                </div>
                            )}
                        </div>
                      )}
                  </DialogContent>
              </Dialog>
          ))}
      </motion.div>
    </div>
  );
}
