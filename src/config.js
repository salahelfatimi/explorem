import {Pathnames} from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.NEXT_PUBLIC_BASE_URL
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en' ;
export const locales = ['en','de','ar'] ;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    de: '/pfadnamen',
    ar: '/pfadnamen'
  }
} ;

// Use the default: `always`
export const localePrefix = undefined;

