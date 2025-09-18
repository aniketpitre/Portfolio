'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

export function ContactView() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const recipientEmail = 'pitreaniket@gmail.com';

    const generateMailtoLink = () => {
        const body = encodeURIComponent(message + `\n\nFrom: ${email}`);
        return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <div>
            <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
                <Mail />
                <span>Secure Message Relay</span>
            </h1>
            <div className="max-w-xl mx-auto bg-card p-6 rounded-lg border border-border">
                <form className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Your Return Address (Email)</Label>
                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="user@domain.com" 
                            required 
                            className="bg-background"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
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
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <a href={generateMailtoLink()} >
                            <Send className="mr-2 h-4 w-4" />
                            Transmit Securely
                        </a>
                    </Button>
                </form>
            </div>
        </div>
    );
}
