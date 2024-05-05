export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: ['/','/en/employers','/en/candidates','/en/testimonial','/en/blogs','/en/contact','/en/about'],
      },
      sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    }
  }