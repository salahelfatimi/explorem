

export default async function sitemap() {
  const  blogs = [
    {
      "title":"EXPLOREM Launched its Scholarship Program ",
      "createAt":"2024-05-04"
    },
    {
        "title":"Explorem founder/managing directors speech during the recognition ceremony.",
        "createAt":"2024-04-25"
      },
    {
        "title": "22 Candidates Successfully Relocated to Germany!",
        "createAt":"2024-04-21"
       
      },
    {
        "title": "23 Explorem nurse scholars received their Visa!",
        "createAt":"2024-04-11"
  
      },  
    {
        "title": "Nurses Successfully Relocated to Germany!",
        "createAt":"2024-04-11"
        
      },
    {
      "title": "100% Passed the B1 external exam!",
      "createAt":"2024-04-11"
     
    },{

        "title": "Explorem team and candidates featured in ZDF TV",
        "createAt":"2024-04-11"
       
      }, {
        "title": "Explorem candidates in WDR Lokalzeit aus Cologne!",
        "createAt":"2024-04-11"
        
      },{
        "title": "New Milestone Unlocked!",
        "createAt":"2024-04-11"
        
      }
  ]
  const blogEntries=blogs.map((blog)=>({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blogs/${blog.title.trim().replace(/[/%\s]+/g, '-')}`,
      lastModified: new Date(blog.createAt),
      changeFrequency: 'daily',
      priority: 1,
  }))
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Corrected spelling
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/employers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/candidates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...blogEntries
  ];
}