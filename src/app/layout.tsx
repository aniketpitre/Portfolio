import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aniket Pitre | Virtual Environment',
  description: 'Guest-level SSH access to a personal Virtualized Command & Control Environment.',
};

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Inter({
  subsets: ['latin'],
  variable: '--font-headline',
});

const fontCode = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-code',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'font-body antialiased',
          fontBody.variable,
          fontHeadline.variable,
          fontCode.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
