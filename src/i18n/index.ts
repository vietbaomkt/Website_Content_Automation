import { vi } from './vi';
import { en } from './en';

export type Language = 'vi' | 'en';

export const translations: Record<Language, typeof vi> = {
  vi,
  en,
};

export { vi, en };
