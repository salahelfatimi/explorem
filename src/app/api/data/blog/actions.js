"use server";
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};
export const fetchBlogs = async (take) => {
    const blogs=[{
      "_id": {
        "$oid": "6617d978e647e176260ada09"
      },
      "imageUrl": "https://utfs.io/f/1db72baf-74ba-4649-b6b3-963ca5c8a2a9-emt7mz.jpg",
      "imageKey": "1db72baf-74ba-4649-b6b3-963ca5c8a2a9-emt7mz.jpg",
      "title": "New Milestone Unlocked!",
      "description": "In November 13, 2023, Explorem Formation Center was officially opened. Local partners, teacher, students and active candidates attended the event.\r\n\r\nWe are grateful to all who took their time celebrating this newly achieved project. \r\n\r\nThank you to all our partners – local partners, school partners and German partners - who worked with us since year 2020, and making this new milestone possible!\r\n",
      "author": "Explorem",
      "published": true,
      "createAt": {
        "$date": "2024-04-11T12:37:12.338Z"
      },
      "updateAt": {
        "$date": "2024-04-11T12:45:03.818Z"
      }
    },
    {
      "_id": {
        "$oid": "6617dafae647e176260ada0b"
      },
      "imageUrl": "https://utfs.io/f/bcd256f6-6a74-4b6a-a967-5a7d40a21def-jy5hdt.jpeg.jpg",
      "imageKey": "bcd256f6-6a74-4b6a-a967-5a7d40a21def-jy5hdt.jpeg.jpg",
      "title": "Explorem candidates in WDR Lokalzeit aus Köln! ",
      "description": "Our first 8 relocated nurse-candidates in Köln were covered and interviewed in Köln local TV.\r\n\r\nhttps://www1.wdr.de/lokalzeit/fernsehen/koeln/pflegeinternat-gegen-pflegekraeftemangel-im-bergischen--100.html\r\n\r\nWe are PROUD of you... Keep up the good work!!!  \r\n",
      "author": "Explorem",
      "published": true,
      "createAt": {
        "$date": "2024-04-11T12:43:38.177Z"
      },
      "updateAt": {
        "$date": "2024-04-11T12:45:07.606Z"
      }
    },
    {
      "_id": {
        "$oid": "6617e1c7e5686c1645155d16"
      },
      "imageUrl": "https://utfs.io/f/5f5beb44-abcc-402b-a7e5-75906b6b9133-1x9z5t.JPG",
      "imageKey": "5f5beb44-abcc-402b-a7e5-75906b6b9133-1x9z5t.JPG",
      "title": "Explorem team and candidates featured in ZDF TV",
      "description": "In February 2024, Explorem team and candidates were featured in ZDF TV regarding nurses from Morocco who want to live and work in Germany.\r\n\r\nThe German health care system is dependent on immigration. Demographic change is creating huge gaps. For 2030, the German Ministry of Economic Affairs expects around 4 million fewer people in employment across all sectors than today. Morocco has many young skilled workers who can help Germany, among other things because the level of qualification in Morocco is good compared to other African countries.\r\n\r\nExplorem managing directors, Mr. Abdessamad Aboul ossoud and Dr. Gracila V. Ucag, shared their experiences in assisting nurses in language training and qualification, documentation, recognition, visa process and relocating candidates to Germany, since year 2020.\r\n\r\nHere are some links, for more details:\r\n\r\nhttps://www.zdf.de/nachrichten/politik/ausland/fachkraeftemangel-pflegepersonal-marokko-100.html\r\n \r\nhttps://www.instagram.com/reel/C3lKOTfAwz3/?igsh=MTRkejE5YWY1bDViMA==\r\n\r\n",
      "author": "Explorem",
      "published": true,
      "createAt": {
        "$date": "2024-04-11T13:12:39.113Z"
      },
      "updateAt": {
        "$date": "2024-04-11T13:12:55.926Z"
      }
    },
    {
      "_id": {
        "$oid": "6617e71b3160465d0a20624c"
      },
      "imageUrl": "https://utfs.io/f/f3a4ceb4-a75a-4228-bd98-f09deb21d1e4-j9ayf.jpg",
      "imageKey": "f3a4ceb4-a75a-4228-bd98-f09deb21d1e4-j9ayf.jpg",
      "title": "100% Passed the B1 external exam!",
      "description": "Explorem in partnership with DRK Rettungsdienst Rhein-Berg GmbH has 22 nurse-candidates scholars. Their language formation, recognition and relocation process are all paid by their employer. They are receiving a stipend while completing their language qualification in Morocco. \r\n\r\nIn May 2023, they took the TELC B1 test. All of them successfully passed the test and acquire their B1 certificate.\r\n\r\n100% success rate of the first group of the program is such a great achievement for Explorem. \r\nKudos to all candidates and Explorem teachers, Mr. Nizar Dhibi and Ms. Wencke Derb, for a job well done!",
      "author": "Explorem",
      "published": true,
      "createAt": {
        "$date": "2024-04-11T13:35:22.324Z"
      },
      "updateAt": {
        "$date": "2024-04-11T13:35:35.490Z"
      }
    },
    {
      "_id": {
        "$oid": "6617f14ec36786caae8b2e6d"
      },
      "imageUrl": "https://utfs.io/f/6098ab76-14e0-44f4-857b-03e4f6de3324-z9pfeo.jpg",
      "imageKey": "6098ab76-14e0-44f4-857b-03e4f6de3324-z9pfeo.jpg",
      "title": "Nurses Successfully Relocated to Germany!",
      "description": "In year 2023 and the beginning of the present year, Explorem has been successfully relocating qualified nurses to Germany. Candidates were relocated to Dresden, Halle, Koln, Marburg, Glucksburg. ",
      "author": "Explorem",
      "published": true,
      "createAt": {
        "$date": "2024-04-11T14:18:53.454Z"
      },
      "updateAt": {
        "$date": "2024-04-11T14:19:04.043Z"
      }
    },
    {
      "_id": {
        "$oid": "6617f453c36786caae8b2e6e"
      },
      "imageUrl": "https://utfs.io/f/fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
      "imageKey": "fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
      "title": "23 Explorem nurse scholars received their Visa!",
      "description": "Among the best services Explorem have provided to their candidates for almost 3 years are Visa process and Relocation candidate support, aside from language formation and qualification.\r\n\r\nExplorem is assisting qualified candidates in visa application, getting visa appointments, compiling necessary documents, giving an orientation or preparation regarding visa, organization, and implementation of the journey or flight to Germany.\r\n\r\nIn March 2024, Explorem received a great news that 23 of their nurse scholars received their Visa and soon to be relocated. ",
      "author": "Explorem",
      "published": true,
      "createAt": {
        "$date": "2024-04-11T14:31:46.651Z"
      },
      "updateAt": {
        "$date": "2024-04-11T14:32:14.835Z"
      }
    }]
    return blogs.map(blog => {
      return {
          id: blog._id.$oid,
          imageUrl: blog.imageUrl,
          imageKey: blog.imageKey,
          title: blog.title,
          description: blog.description,
          author: blog.author,
          published: blog.published,
          createAt: formatDate(blog.createAt.$date),
            updateAt: formatDate(blog.updateAt.$date)
      };
  });
  
};

export const fetchSingleBlog = async (id) => {
  const blogs=[{
    "_id": {
      "$oid": "6617d978e647e176260ada09"
    },
    "imageUrl": "https://utfs.io/f/1db72baf-74ba-4649-b6b3-963ca5c8a2a9-emt7mz.jpg",
    "imageKey": "1db72baf-74ba-4649-b6b3-963ca5c8a2a9-emt7mz.jpg",
    "title": "New Milestone Unlocked!",
    "description": "In November 13, 2023, Explorem Formation Center was officially opened. Local partners, teacher, students and active candidates attended the event.\r\n\r\nWe are grateful to all who took their time celebrating this newly achieved project. \r\n\r\nThank you to all our partners – local partners, school partners and German partners - who worked with us since year 2020, and making this new milestone possible!\r\n",
    "author": "Explorem",
    "published": true,
    "createAt": {
      "$date": "2024-04-11T12:37:12.338Z"
    },
    "updateAt": {
      "$date": "2024-04-11T12:45:03.818Z"
    }
  },
  {
    "_id": {
      "$oid": "6617dafae647e176260ada0b"
    },
    "imageUrl": "https://utfs.io/f/bcd256f6-6a74-4b6a-a967-5a7d40a21def-jy5hdt.jpeg.jpg",
    "imageKey": "bcd256f6-6a74-4b6a-a967-5a7d40a21def-jy5hdt.jpeg.jpg",
    "title": "Explorem candidates in WDR Lokalzeit aus Köln! ",
    "description": "Our first 8 relocated nurse-candidates in Köln were covered and interviewed in Köln local TV.\r\n\r\nhttps://www1.wdr.de/lokalzeit/fernsehen/koeln/pflegeinternat-gegen-pflegekraeftemangel-im-bergischen--100.html\r\n\r\nWe are PROUD of you... Keep up the good work!!!  \r\n",
    "author": "Explorem",
    "published": true,
    "createAt": {
      "$date": "2024-04-11T12:43:38.177Z"
    },
    "updateAt": {
      "$date": "2024-04-11T12:45:07.606Z"
    }
  },
  {
    "_id": {
      "$oid": "6617e1c7e5686c1645155d16"
    },
    "imageUrl": "https://utfs.io/f/5f5beb44-abcc-402b-a7e5-75906b6b9133-1x9z5t.JPG",
    "imageKey": "5f5beb44-abcc-402b-a7e5-75906b6b9133-1x9z5t.JPG",
    "title": "Explorem team and candidates featured in ZDF TV",
    "description": "In February 2024, Explorem team and candidates were featured in ZDF TV regarding nurses from Morocco who want to live and work in Germany.\r\n\r\nThe German health care system is dependent on immigration. Demographic change is creating huge gaps. For 2030, the German Ministry of Economic Affairs expects around 4 million fewer people in employment across all sectors than today. Morocco has many young skilled workers who can help Germany, among other things because the level of qualification in Morocco is good compared to other African countries.\r\n\r\nExplorem managing directors, Mr. Abdessamad Aboul ossoud and Dr. Gracila V. Ucag, shared their experiences in assisting nurses in language training and qualification, documentation, recognition, visa process and relocating candidates to Germany, since year 2020.\r\n\r\nHere are some links, for more details:\r\n\r\nhttps://www.zdf.de/nachrichten/politik/ausland/fachkraeftemangel-pflegepersonal-marokko-100.html\r\n \r\nhttps://www.instagram.com/reel/C3lKOTfAwz3/?igsh=MTRkejE5YWY1bDViMA==\r\n\r\n",
    "author": "Explorem",
    "published": true,
    "createAt": {
      "$date": "2024-04-11T13:12:39.113Z"
    },
    "updateAt": {
      "$date": "2024-04-11T13:12:55.926Z"
    }
  },
  {
    "_id": {
      "$oid": "6617e71b3160465d0a20624c"
    },
    "imageUrl": "https://utfs.io/f/f3a4ceb4-a75a-4228-bd98-f09deb21d1e4-j9ayf.jpg",
    "imageKey": "f3a4ceb4-a75a-4228-bd98-f09deb21d1e4-j9ayf.jpg",
    "title": "100% Passed the B1 external exam!",
    "description": "Explorem in partnership with DRK Rettungsdienst Rhein-Berg GmbH has 22 nurse-candidates scholars. Their language formation, recognition and relocation process are all paid by their employer. They are receiving a stipend while completing their language qualification in Morocco. \r\n\r\nIn May 2023, they took the TELC B1 test. All of them successfully passed the test and acquire their B1 certificate.\r\n\r\n100% success rate of the first group of the program is such a great achievement for Explorem. \r\nKudos to all candidates and Explorem teachers, Mr. Nizar Dhibi and Ms. Wencke Derb, for a job well done!",
    "author": "Explorem",
    "published": true,
    "createAt": {
      "$date": "2024-04-11T13:35:22.324Z"
    },
    "updateAt": {
      "$date": "2024-04-11T13:35:35.490Z"
    }
  },
  {
    "_id": {
      "$oid": "6617f14ec36786caae8b2e6d"
    },
    "imageUrl": "https://utfs.io/f/6098ab76-14e0-44f4-857b-03e4f6de3324-z9pfeo.jpg",
    "imageKey": "6098ab76-14e0-44f4-857b-03e4f6de3324-z9pfeo.jpg",
    "title": "Nurses Successfully Relocated to Germany!",
    "description": "In year 2023 and the beginning of the present year, Explorem has been successfully relocating qualified nurses to Germany. Candidates were relocated to Dresden, Halle, Koln, Marburg, Glucksburg. ",
    "author": "Explorem",
    "published": true,
    "createAt": {
      "$date": "2024-04-11T14:18:53.454Z"
    },
    "updateAt": {
      "$date": "2024-04-11T14:19:04.043Z"
    }
  },
  {
    "_id": {
      "$oid": "6617f453c36786caae8b2e6e"
    },
    "imageUrl": "https://utfs.io/f/fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
    "imageKey": "fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
    "title": "23 Explorem nurse scholars received their Visa!",
    "description": "Among the best services Explorem have provided to their candidates for almost 3 years are Visa process and Relocation candidate support, aside from language formation and qualification.\r\n\r\nExplorem is assisting qualified candidates in visa application, getting visa appointments, compiling necessary documents, giving an orientation or preparation regarding visa, organization, and implementation of the journey or flight to Germany.\r\n\r\nIn March 2024, Explorem received a great news that 23 of their nurse scholars received their Visa and soon to be relocated. ",
    "author": "Explorem",
    "published": true,
    "createAt": {
      "$date": "2024-04-11T14:31:46.651Z"
    },
    "updateAt": {
      "$date": "2024-04-11T14:32:14.835Z"
    }
  }]
  const blog = blogs.find(blog => blog._id.$oid === id);
  
    return {
        id: blog._id.$oid,
        imageUrl: blog.imageUrl,
        imageKey: blog.imageKey,
        title: blog.title,
        description: blog.description,
        author: blog.author,
        published: blog.published,
        createAt: formatDate(blog.createAt.$date),
        updateAt: formatDate(blog.updateAt.$date)
    };

};

export const getLatestBlog = async () => {
  const latestBlog={
    "_id": {
      "$oid": "6617f453c36786caae8b2e6e"
    },
    "imageUrl": "https://utfs.io/f/fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
    "imageKey": "fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
    "title": "23 Explorem nurse scholars received their Visa!",
    "description": "Among the best services Explorem have provided to their candidates for almost 3 years are Visa process and Relocation candidate support, aside from language formation and qualification.\r\n\r\nExplorem is assisting qualified candidates in visa application, getting visa appointments, compiling necessary documents, giving an orientation or preparation regarding visa, organization, and implementation of the journey or flight to Germany.\r\n\r\nIn March 2024, Explorem received a great news that 23 of their nurse scholars received their Visa and soon to be relocated. ",
    "author": "Explorem",
    "published": true,
    "createAt": {
      "$date": "2024-04-11T14:31:46.651Z"
    },
    "updateAt": {
      "$date": "2024-04-11T14:32:14.835Z"
    }
  } 
  
    return {
        id: latestBlog._id.$oid,
        imageUrl: latestBlog.imageUrl,
        imageKey: latestBlog.imageKey,
        title: latestBlog.title,
        description: latestBlog.description,
        author: latestBlog.author,
        published: latestBlog.published,
        createAt: formatDate(latestBlog.createAt.$date),
        updateAt: formatDate(latestBlog.updateAt.$date)
    };

 
};
