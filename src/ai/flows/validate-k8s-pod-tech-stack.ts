'use server';
/**
 * @fileOverview Validates the tech stack details of a Kubernetes pod against its description using a language model.
 *
 * - validateK8sPodTechStack - A function that validates the tech stack details of a Kubernetes pod.
 * - ValidateK8sPodTechStackInput - The input type for the validateK8sPodTechStack function.
 * - ValidateK8sPodTechStackOutput - The return type for the validateK8sPodTechStack function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ValidateK8sPodTechStackInputSchema = z.object({
  description: z.string().describe('The description of the Kubernetes pod.'),
  techStack: z.string().describe('The tech stack details of the Kubernetes pod.'),
});
export type ValidateK8sPodTechStackInput = z.infer<typeof ValidateK8sPodTechStackInputSchema>;

const ValidateK8sPodTechStackOutputSchema = z.object({
  isValid: z.boolean().describe('Whether the tech stack details are valid for the given description.'),
  reason: z.string().optional().describe('The reason why the tech stack details are invalid, if applicable.'),
});
export type ValidateK8sPodTechStackOutput = z.infer<typeof ValidateK8sPodTechStackOutputSchema>;

export async function validateK8sPodTechStack(input: ValidateK8sPodTechStackInput): Promise<ValidateK8sPodTechStackOutput> {
  return validateK8sPodTechStackFlow(input);
}

const validateK8sPodTechStackPrompt = ai.definePrompt({
  name: 'validateK8sPodTechStackPrompt',
  input: {schema: ValidateK8sPodTechStackInputSchema},
  output: {schema: ValidateK8sPodTechStackOutputSchema},
  prompt: `You are an expert Kubernetes pod tech stack validator.

You will be given a description of a Kubernetes pod and its tech stack details.
Your task is to determine whether the tech stack details are valid for the given description.

Description: {{{description}}}
Tech Stack: {{{techStack}}}

Respond with a boolean value indicating whether the tech stack is valid, and a reason if it is invalid.
`,
});

const validateK8sPodTechStackFlow = ai.defineFlow(
  {
    name: 'validateK8sPodTechStackFlow',
    inputSchema: ValidateK8sPodTechStackInputSchema,
    outputSchema: ValidateK8sPodTechStackOutputSchema,
  },
  async input => {
    const {output} = await validateK8sPodTechStackPrompt(input);
    return output!;
  }
);
