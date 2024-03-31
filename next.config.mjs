import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        domains: ['dufelyt7pqksg30d.public.blob.vercel-storage.com'],
    },
};
 
export default withNextIntl(nextConfig);