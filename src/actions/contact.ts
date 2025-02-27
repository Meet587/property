'use server';
import { contactSchema } from '@/schemas/contact';

export async function submitContactForm(data: unknown) {
  const validated = contactSchema.safeParse(data);
  if (!validated.success) {
    return { error: validated.error.format() };
  }

  try {
    // Save to database or send email
    return { success: true };
  } catch (error) {
    return { error: 'Failed to submit form' };
  }
}