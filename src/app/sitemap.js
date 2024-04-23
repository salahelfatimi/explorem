export default function sitemap() {
    return [
      {
        url: 'https://www.explorem.net/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.explorem.net/en/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.explorem.net/en/blog',
        lastModified: new Date(),
        changeFrequency: 'dayly',
        priority: 0.5,
      },
      {
        url: 'https://www.explorem.net/en/employers',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.explorem.net/en/candidates',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://www.explorem.net/en/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      
    ]
  }