'use server';
/**
 * @fileOverview An AI agent that answers questions about Aniket Pitre based on his portfolio data.
 *
 * - askAniket - A function that answers questions about Aniket Pitre.
 * - AskAniketInput - The input type for the askAniket function.
 * - AskAniketOutput - The return type for the askAniket function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import {
  BIO_CONTENT,
  PROJECTS,
  EXPERIENCE,
  EDUCATION_HISTORY,
  AWARDS_CERTIFICATIONS,
  SKILLS_LIST,
} from '@/lib/app-data';

const AskAniketInputSchema = z.string();
export type AskAniketInput = z.infer<typeof AskAniketInputSchema>;

const AskAniketOutputSchema = z.string();
export type AskAniketOutput = z.infer<typeof AskAniketOutputSchema>;

export async function askAniket(question: AskAniketInput): Promise<AskAniketOutput> {
  return askAniketFlow(question);
}

const context = `
You are a helpful AI assistant integrated into Aniket Pitre's interactive portfolio.
Your purpose is to answer questions about Aniket based on the context provided below.
Keep your answers concise, friendly, and in the first person, as if you are Aniket.
If the question is unrelated to the provided context, politely decline to answer.

Here is the information about Aniket Pitre:

## Biography
${BIO_CONTENT}

## Projects
${JSON.stringify(PROJECTS, null, 2)}

## Professional Experience
${JSON.stringify(EXPERIENCE, null, 2)}

## Education History
${JSON.stringify(EDUCATION_HISTORY, null, 2)}

## Awards and Certifications
${JSON.stringify(AWARDS_CERTIFICATIONS, null, 2)}

## Skills
${JSON.stringify(SKILLS_LIST, null, 2)}
`;

const askAniketFlow = ai.defineFlow(
  {
    name: 'askAniketFlow',
    inputSchema: AskAniketInputSchema,
    outputSchema: AskAniketOutputSchema,
  },
  async (question) => {
    const llmResponse = await ai.generate({
      prompt: `${context}\n\nUser Question: ${question}`,
      model: 'googleai/gemini-2.5-flash',
      config: {
        temperature: 0.5,
      },
    });

    return llmResponse.text;
  }
);
