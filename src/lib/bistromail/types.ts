
export type AIProvider = 'gemini' | 'claude';

export enum ToneStyle {
  WARM = 'Warm & Inviting',
  CASUAL = 'Casual & Friendly',
  UPSCALE = 'Upscale & Elegant',
  ENERGETIC = 'Energetic & Fun',
  PROFESSIONAL = 'Professional'
}

export enum NewsletterLength {
  SHORT = 'Short (100-150 words)',
  MEDIUM = 'Medium (200-300 words)',
  LONG = 'Long (400+ words)'
}

export enum ValidationFeedback {
  YES = "Yes, I'd definitely use this",
  MAYBE = "Maybe, depends on pricing/features",
  NO = "No, I wouldn't use this"
}

export interface FormValues {
  restaurantName: string;
  mainTopic: string;
  promotion: string;
  tone: ToneStyle;
  length: NewsletterLength;
  cta: string;
  helpful: ValidationFeedback;
  feedback: string;
}

export interface GenerationResult {
  newsletter: string;
  formValues: FormValues;
}

export interface LeadEntry {
  id: string;
  timestamp: string;
  email: string;
  restaurantName: string;
  feedback: ValidationFeedback;
  notified: boolean;
  topic?: string;
}
