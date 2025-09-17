'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

export function ContactView() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        // For this demo, we'll just show a success toast.
        toast({
            title: "Transmission Sent",
            description: "Your message has been securely relayed. I will respond shortly.",
        });
        (e.target as HTMLFormElement).reset();
    };

  return (
    <div>
        <h1 className="font-headline text-2xl text-accent mb-4 flex items-center gap-2">
            <Mail />
            <span>Secure Message Relay</span>
        </h1>
        <div className="max-w-xl mx-auto bg-card p-6 rounded-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="email">Your Return Address (Email)</Label>
                    <Input id="email" type="email" placeholder="user@domain.com" required className="bg-background"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="subject">Subject Line</Label>
                    <Input id="subject" type="text" placeholder="Inquiry / Opportunity" required className="bg-background"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Encrypted Message Body</Label>
                    <Textarea id="message" placeholder="Type your message here..." required rows={6} className="bg-background"/>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-4 w-4" />
                    Transmit Securely
                </Button>
            </form>
        </div>
    </div>
  );
}
