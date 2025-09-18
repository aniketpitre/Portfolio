'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type FormValues = {
  email: string;
  subject: string;
  message: string;
};

export function ContactView() {
    const { register, handleSubmit, reset } = useForm<FormValues>();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsLoading(true);
        setStatus(null);

        const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzo3fRT59yV8mHIihvdBF-bVgyKHhvyuvVVTtTEgumGgT49WDNHmz7bw284f5mEiRcdFw/exec';

        try {
            if (googleScriptUrl === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
                throw new Error("Google Apps Script URL is not configured.");
            }

            await fetch(googleScriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you shortly.' });
            reset();

        } catch (error) {
            console.error('Submission Error:', error);
            const errorMessage = (error instanceof Error && error.message.includes('not configured')) 
                ? 'The contact form is not yet connected to a data source.'
                : 'An error occurred while sending the message. Please try again later.';
            setStatus({ type: 'error', message: errorMessage });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1 className="font-headline font-bold text-2xl text-foreground mb-2">Contact Me</h1>
            <p className="text-muted-foreground mb-6">Have a question or want to work together? Send me a message.</p>

            <div className="max-w-xl mx-auto bg-transparent p-6 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="your.email@example.com" 
                            required 
                            className="bg-background/50"
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                            id="subject" 
                            type="text" 
                            placeholder="Re: Project Opportunity" 
                            required 
                            className="bg-background/50"
                            {...register('subject', { required: true })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                            id="message" 
                            placeholder="Your message here..." 
                            required 
                            rows={6} 
                            className="bg-background/50"
                            {...register('message', { required: true })}
                        />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                        ) : (
                            <><Send className="mr-2 h-4 w-4" /> Send Message</>
                        )}
                    </Button>
                </form>
                {status && (
                    <Alert variant={status.type === 'success' ? 'default' : 'destructive'} className="mt-4 bg-transparent">
                      {status.type === 'success' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                      <AlertTitle>{status.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
                      <AlertDescription>
                        {status.message}
                      </AlertDescription>
                    </Alert>
                )}
            </div>
        </div>
    );
}
