'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle, XCircle, ShieldQuestion } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { validateK8sPodTechStack, ValidateK8sPodTechStackOutput } from '@/ai/flows/validate-k8s-pod-tech-stack';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FormSchema = z.object({
  description: z.string().min(20, { message: 'Description must be at least 20 characters.' }),
  techStack: z.string().min(3, { message: 'Tech stack must be at least 3 characters.' }),
});

type FormValues = z.infer<typeof FormSchema>;

export function K8sValidatorDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ValidateK8sPodTechStackOutput | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: 'A real-time file integrity monitor that uses hashing algorithms to detect and flag unauthorized file modifications.',
      techStack: 'PHP, JavaScript, MySQL',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const validationResult = await validateK8sPodTechStack(data);
      setResult(validationResult);
    } catch (error) {
      console.error("Validation failed:", error);
      setResult({ isValid: false, reason: 'An unexpected error occurred during validation.' });
    }
    setIsLoading(false);
  };

  return (
    <Card className="bg-transparent border-dashed">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-primary">AI-Powered K8s Pod Validator</CardTitle>
        <CardDescription>Check if a pod's tech stack matches its purpose.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="description">Pod Description</Label>
            <Textarea id="description" {...register('description')} rows={3} className="bg-background/50 mt-1"/>
            {errors.description && <p className="text-destructive text-xs mt-1">{errors.description.message}</p>}
          </div>
          <div>
            <Label htmlFor="techStack">Tech Stack (comma-separated)</Label>
            <Textarea id="techStack" {...register('techStack')} rows={2} className="bg-background/50 mt-1"/>
            {errors.techStack && <p className="text-destructive text-xs mt-1">{errors.techStack.message}</p>}
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</>
            ) : (
              <><ShieldQuestion className="mr-2 h-4 w-4" /> Validate Pod</>
            )}
          </Button>
        </form>

        {result && (
          <Alert variant={result.isValid ? 'default' : 'destructive'} className="bg-transparent">
            {result.isValid ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
            <AlertTitle className="font-bold">{result.isValid ? 'Validation Passed' : 'Validation Failed'}</AlertTitle>
            <AlertDescription>
              {result.isValid ? 'The tech stack is appropriate for the described pod.' : result.reason}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
