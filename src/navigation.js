import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
const locales = ["en", "de", "ar"];
export const localePrefix = 'always'; // Default
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});