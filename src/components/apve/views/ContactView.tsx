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

        // IMPORTANT: Replace this URL with the one you get from deploying your Google Apps Script.
        const googleScriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

        try {
            if (googleScriptUrl === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
                throw new Error("Google Apps Script URL is not configured.");
            }

            const response = await fetch(googleScriptUrl, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script cross-origin requests
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            // Note: with 'no-cors', we can't read the response body, but we can assume success if no network error was thrown.
            setStatus({ type: 'success', message: 'Message transmitted successfully! I will get back to you shortly.' });
            reset();

        } catch (error) {
            console.error('Submission Error:', error);
            const errorMessage = (error instanceof Error && error.message.includes('not configured')) 
                ? 'The contact form is not yet connected to a data source.'
                : 'An error occurred while transmitting the message. Please try again later.';
            setStatus({ type: 'error', message: errorMessage });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
                <Mail />
                <span>Secure Message Relay</span>
            </h1>
            <div className="max-w-xl mx-auto bg-card p-6 rounded-lg border border-border">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Your Return Address (Email)</Label>
                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="user@domain.com" 
                            required 
                            className="bg-background"
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject Line</Label>
                        <Input 
                            id="subject" 
                            type="text" 
                            placeholder="Inquiry / Opportunity" 
                            required 
                            className="bg-background"
                            {...register('subject', { required: true })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Encrypted Message Body</Label>
                        <Textarea 
                            id="message" 
                            placeholder="Type your message here..." 
                            required 
                            rows={6} 
                            className="bg-background"
                            {...register('message', { required: true })}
                        />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
                        {isLoading ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Transmitting...</>
                        ) : (
                            <><Send className="mr-2 h-4 w-4" /> Transmit Securely</>
                        )}
                    </Button>
                </form>
                {status && (
                    <Alert variant={status.type === 'success' ? 'default' : 'destructive'} className={`mt-4 ${status.type === 'success' ? 'border-green-500' : ''}`}>
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
