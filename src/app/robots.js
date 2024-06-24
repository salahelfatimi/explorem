export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/en',
      
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}