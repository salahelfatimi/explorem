"use server";
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};
export const fetchBlogs = async (take) => {
  const blogs = [
    {
      _id: {
        $oid: "6617d978e647e176260ada09",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AJSTmqGfqaensKmjr5+fqZybp6uqro6Y0xtW8WWP/wCqqrajqb6yr761tMGhl5+LhJKgm6einschYv5ojv8Avb7QopinjnyAhX+IaF9pf2Jd18jO+/7/QWjjao3/ALqzvVFITA8KDHl4gBAWI3FgWsCkmNXU4zNYzXiW/wC6oo5qWEkWHz1CQ0wDAQZ3bWV5dGyDgonW3O/r8f8Ao4BMQzs2AB9pNT1TJycsFRQVS0tNen6D1tro8vb/4NdgftmcUAsAAAAASUVORK5CYII=        ",
      width: "6240",
      height: "3512",

      Url: "https://utfs.io/f/1db72baf-74ba-4649-b6b3-963ca5c8a2a9-emt7mz.jpg",
      imageKey: "1db72baf-74ba-4649-b6b3-963ca5c8a2a9-emt7mz.jpg",
      title: "New Milestone Unlocked!",
      description:
        "In November 13, 2023, Explorem Formation Center was officially opened. Local partners, teacher, students and active candidates attended the event.\r\n\r\nWe are grateful to all who took their time celebrating this newly achieved project. \r\n\r\nThank you to all our partners – local partners, school partners and German partners - who worked with us since year 2020, and making this new milestone possible!\r\n",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T12:37:12.338Z",
      },
      updateAt: {
        $date: "2024-04-11T12:45:03.818Z",
      },
    },
    {
      _id: {
        $oid: "6617dafae647e176260ada0b",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AMjK3NrU39nb79jU6trh+tihochCKrdEMtmytP/u+gCtmp7f3vHd09/o4PLE0OfGoKPUd0e5X0Pft7X/9/8Aqo2Uh3ODuqTAlIKUlIuVx5ygsGBDjlBEn3p9x6KgAGNcbCMkQJCY1w0XPBAMCYYyM2g8RxoIE0srLDAXFQB5aHdMR2JtcZw1NFUMAgJKEB1gOD5QPEdKNkQkExQAlIqfGRIcExEaRUJRZGV+DxMqS0JPfm2MrpWxeU05AIWIpzMwOUtNW11bcJmctU9QaTcwQMKnts6yzM6Ufyg7ZTn0w6gKAAAAAElFTkSuQmCC        ",
      width: "6960",
      height: "4640",

      Url: "https://utfs.io/f/bcd256f6-6a74-4b6a-a967-5a7d40a21def-jy5hdt.jpeg.jpg",
      imageKey: "bcd256f6-6a74-4b6a-a967-5a7d40a21def-jy5hdt.jpeg.jpg",
      title: "Explorem candidates in WDR Lokalzeit aus Köln!",
      description:
        "Our first 8 relocated nurse-candidates in Köln were covered and interviewed in Köln local TV.\r\n\r\nhttps://www1.wdr.de/lokalzeit/fernsehen/koeln/pflegeinternat-gegen-pflegekraeftemangel-im-bergischen--100.html\r\n\r\nWe are PROUD of you... Keep up the good work!!!  \r\n",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T12:43:38.177Z",
      },
      updateAt: {
        $date: "2024-04-11T12:45:07.606Z",
      },
    },
    {
      _id: {
        $oid: "6617e1c7e5686c1645155d16",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AMjK3NrU39nb79jU6trh+tihochCKrdEMtmytP/u+gCtmp7f3vHd09/o4PLE0OfGoKPUd0e5X0Pft7X/9/8Aqo2Uh3ODuqTAlIKUlIuVx5ygsGBDjlBEn3p9x6KgAGNcbCMkQJCY1w0XPBAMCYYyM2g8RxoIE0srLDAXFQB5aHdMR2JtcZw1NFUMAgJKEB1gOD5QPEdKNkQkExQAlIqfGRIcExEaRUJRZGV+DxMqS0JPfm2MrpWxeU05AIWIpzMwOUtNW11bcJmctU9QaTcwQMKnts6yzM6Ufyg7ZTn0w6gKAAAAAElFTkSuQmCC        ",
      width: "6960",
      height: "4640",

      Url: "https://utfs.io/f/5f5beb44-abcc-402b-a7e5-75906b6b9133-1x9z5t.JPG",
      imageKey: "5f5beb44-abcc-402b-a7e5-75906b6b9133-1x9z5t.JPG",
      title: "Explorem team and candidates featured in ZDF TV",
      description:
        "In February 2024, Explorem team and candidates were featured in ZDF TV regarding nurses from Morocco who want to live and work in Germany.\r\n\r\nThe German health care system is dependent on immigration. Demographic change is creating huge gaps. For 2030, the German Ministry of Economic Affairs expects around 4 million fewer people in employment across all sectors than today. Morocco has many young skilled workers who can help Germany, among other things because the level of qualification in Morocco is good compared to other African countries.\r\n\r\nExplorem managing directors, Mr. Abdessamad Aboul ossoud and Dr. Gracila V. Ucag, shared their experiences in assisting nurses in language training and qualification, documentation, recognition, visa process and relocating candidates to Germany, since year 2020.\r\n\r\nHere are some links, for more details:\r\n\r\nhttps://www.zdf.de/nachrichten/politik/ausland/fachkraeftemangel-pflegepersonal-marokko-100.html\r\n \r\nhttps://www.instagram.com/reel/C3lKOTfAwz3/?igsh=MTRkejE5YWY1bDViMA==\r\n\r\n",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T13:12:39.113Z",
      },
      updateAt: {
        $date: "2024-04-11T13:12:55.926Z",
      },
    },
    {
      _id: {
        $oid: "6617e71b3160465d0a20624c",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AOPXveziyejgyt/ZyOTd0OXf0ufg0uvj0ezjze/jzgCNfFaQfVygj23Xy67Tyq/a0Lnz5NT36NHy48v27NgAbFs5ZlUzkHhX39a93tS96d/I8d/L//3r9u3a7+XVAHBsYgAAKGtRO5VjVYqKj6qeko6Slc6tnp6LfVFHPgBgXloFM3giHBlwLzCjmJtdVFGPobTzyM1HNkcXAAAAhIFtxM7OAB8uaSwt16+iV09JZW1qgpasECc7DQYAAJ+ila/HzkFdaXVISI5saZ6WhMvHhWuMm2p4eHJuaIQ/eQGE/yChAAAAAElFTkSuQmCC        ",
      width: "1280",
      height: "958",

      Url: "https://utfs.io/f/f3a4ceb4-a75a-4228-bd98-f09deb21d1e4-j9ayf.jpg",
      imageKey: "f3a4ceb4-a75a-4228-bd98-f09deb21d1e4-j9ayf.jpg",
      title: "100% Passed the B1 external exam!",
      description:
        "Explorem in partnership with DRK Rettungsdienst Rhein-Berg GmbH has 22 nurse-candidates scholars. Their language formation, recognition and relocation process are all paid by their employer. They are receiving a stipend while completing their language qualification in Morocco. \r\n\r\nIn May 2023, they took the TELC B1 test. All of them successfully passed the test and acquire their B1 certificate.\r\n\r\n100% success rate of the first group of the program is such a great achievement for Explorem. \r\nKudos to all candidates and Explorem teachers, Mr. Nizar Dhibi and Ms. Wencke Derb, for a job well done!",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T13:35:22.324Z",
      },
      updateAt: {
        $date: "2024-04-11T13:35:35.490Z",
      },
    },
    {
      _id: {
        $oid: "6617f14ec36786caae8b2e6d",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AL7Q3r3O3MDQ2bTCyKetrgwgLQAFFzI3PFBVW2BkaQDA0uK9zt3C0dz7//+hrK4aLToeJy9haG5tdXl3en0AxdXjyNrpwNHc8/v+s7y6JCksGR8ma36SZHJ9aWttAHp6esHQ2snc6ubx9pSjnzhHU1ZaX3VqY2xoZV9gYgBgYF1yc3GxvMLr9/52gIQ/QExQXGtweoNqbnJYWFgAcXBtbm1ocnFssLe5V1xhSkBBaWxyUV9tTFRdTU5NAHFvaHFtZnl3cX58dlhcW2xhWYt4a3NmXDM4PkFCQtgZaFhlulAVAAAAAElFTkSuQmCC        ",
      width: "4624",
      height: "3468",

      Url: "https://utfs.io/f/6098ab76-14e0-44f4-857b-03e4f6de3324-z9pfeo.jpg",
      imageKey: "6098ab76-14e0-44f4-857b-03e4f6de3324-z9pfeo.jpg",
      title: "Nurses Successfully Relocated to Germany!",
      description:
        "In year 2023 and the beginning of the present year, Explorem has been successfully relocating qualified nurses to Germany. Candidates were relocated to Dresden, Halle, Koln, Marburg, Glucksburg. ",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T14:18:53.454Z",
      },
      updateAt: {
        $date: "2024-04-11T14:19:04.043Z",
      },
    },
    {
      _id: {
        $oid: "6617f453c36786caae8b2e6e",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AJiYndXR0a2tthw2hFdWZpyQeB8gKjItK8iHXMp3QQCenZ3AurbFwMC6vtWjpKyNdXo4OEszOjpoZlF6VUAAp6OhzcrFzMjH//v3n5SQHRgkKSozbWpljXRoDzVfAKKioeXl58TFx56lxGJgchIUFAADG1djaZyPjFFKUACin5/Avr6joqdVYJk7P14uHhYtHiJeeoivzdxtf4cApp+dsaqoxsXF6ersrKOfZ0M/XTE4Vmx0tMvUdIWPGMRbIBgs2R4AAAAASUVORK5CYII=        ",
      width: "4624",
      height: "2604",

      Url: "https://utfs.io/f/fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
      imageKey: "fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
      title: "23 Explorem nurse scholars received their Visa!",
      description:
        "Among the best services Explorem have provided to their candidates for almost 3 years are Visa process and Relocation candidate support, aside from language formation and qualification.\r\n\r\nExplorem is assisting qualified candidates in visa application, getting visa appointments, compiling necessary documents, giving an orientation or preparation regarding visa, organization, and implementation of the journey or flight to Germany.\r\n\r\nIn March 2024, Explorem received a great news that 23 of their nurse scholars received their Visa and soon to be relocated. ",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T14:31:46.651Z",
      },
      updateAt: {
        $date: "2024-04-11T14:32:14.835Z",
      },
    },
    {
      _id: {
        $oid: "662532a0f0d00b380426017a",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAIAAABPmPnhAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nAH4AAf/ACo0LhIaFCoyJ2tzaGBeR0pFJ1lTMYB0QJ2VZKKkgwBPYWErPjwrOTdodW5QWlFRWkxlc19QWkeCjYB9gnMAVWpwT3R9UHBvbXp2W1pNaWBNUVRBU0k2V1RBSls/ACo7PUphZSYhHBQNE0E9NCYjHicdFnpuW5OeiIuqkwBxeHaWmZVSQysRBQBOP0JBOjsOFh0+MyS1qYTo2rYAxL+4wreuvqB3cGAke19lkXl5SVRYQCgjspF18eS+AMe+tMi+ssq7qtTEstXEs82+rtvMurunmNnErf/v0gDj2szr39D15dHz49D46NT/8t7/9N//+uX//eb/+uDB3HQvKnXFjAAAAABJRU5ErkJggg==        ",
      width: "2048",
      height: "1536",

      Url: "https://utfs.io/f/92e2b629-6904-4472-949d-25aab568e521-kq15iu.jpg",
      imageKey: "92e2b629-6904-4472-949d-25aab568e521-kq15iu.jpg",
      title: "22 Candidates Successfully Relocated to Germany!",
      description:
        "In April 20 and 21, the 22 of the EXPLOREM nurse-candidates were successfully\r\nrelocated to Cologne Germany. As to date, there are 32 out of 37 program recipients\r\nwere relocated. The 5 other candidates are waiting for their pre-approval documents\r\nfor visa process. These 37 candidates are graduates of Excel Group of Institutes\r\n(Marrakech), Galien Institute (Agadir), and Work Center (Oujda).\r\n\r\nThis is one of the successful recruitment projects managed by EXPLOREM, in\r\ncollaboration with DRK-Rettungsdienst Rhein-Berg GmbH and Marburg\r\nConsulting.\r\n\r\nThrough the efforts and initiatives of EXPLOREM managing directors, Mr.\r\nAbdessamad Aboul ossoud and Dr. Gracila Ucag, the recipients of the program\r\nreceived monthly stipend for one year and were provided with FREE services on\r\nlanguage formation until B2 level; services on documentation, recognition, visa\r\nprocess, relocation support such as flight tickets, insurance registration, etc. All\r\ncosts/ expenses are paid by DRK, the employer.\r\n\r\nEXPLOREM has more fruitful projects in the table in which students, skilled workers\r\nand professionals will benefit. With the new Skilled Immigrant Act of Germany,\r\nexisting mechanisms for skilled workers with a university degree, such as the EU Blue\r\nCard, will continue and in some cases be extended. In addition, a new opportunity\r\ncard will enable third-country nationals to seek employment.\r\n\r\nWith all the relocated candidates of Explorem since year 2020, the team is a reliable\r\ncompany to provide the best services in language and nursing formation, recruitment\r\nmanagement, documentation and recognition process, relocation support such as\r\nvisa assistance, insurance registration and apartment search, etc.\r\n\r\nEXPLOREM made a difference. EXPLOREM made it happen.",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-21T15:37:03.907Z",
      },
      updateAt: {
        $date: "2024-04-21T15:37:03.907Z",
      },
    },
    {
      _id: {
        $oid: "662a42f9ae5c9959eea912a0",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAABJ0AAASdAHeZh94AAAA+0lEQVR4nAXBO0gCARzA4T+0tjQElvQiugaXq8ggO7sjOoUaFDpC5IoWiSIsAx9gUEvekk1hOhlOeuDQEBIIjYE0lNADHKO1saHg1/dJwTLJxJeob0d4nwpxN2lwoemk1lY4DFk0X+DyCSQdVDgKB7kyVukps3yry/z6I5yJzsKgSf0V7gHZ8U2Qm45y4FnEln4cGeXBM8PjWIKklue8+0eu3EMK4STt7Bvd0hdt3ynzfUJGvLiBGLpi0/qEW3ULqeaveb75wT1uUTROsL0aaX+c5l6JilXjw4VOp4ak7BiNcoN9c5MRGWJ8YA51WGM3kKAaq+CsF4luOPwDlm2LWsfdvDgAAAAASUVORK5CYII= ",
      width: "1758",
      height: "988",

      Url: "https://utfs.io/f/883f093b-43ec-4532-a22e-ed5d884237b4-kplyvh.png",
      imageKey: "883f093b-43ec-4532-a22e-ed5d884237b4-kplyvh.png",
      title:
        "Explorem founder/ managing directors speech during the recognition ceremony. ",
      description:
        "Explorem founder/ managing directors speech during the recognition ceremony. \r\n\r\nOn April 19, 2024, the Excel Group of Institutes gave recognition to 20 of their nurse graduates who were successfully relocated to Cologne, Germany.\r\n\r\nThis project is part of the Explorem program in relocating qualified professionals to Germany, in collaboration with German employers/companies. With the initiatives of Explorem, these candidates were able to sign employment contracts and received FREE language courses until the B2 level, recognition and documentation, visa process, relocation, etc.. all paid by their employer.\r\n\r\nFor more information, you may visit the Explorem Center located at Imm 6, Rue Vieux des Marrakchis Nr 7 Gueliz Marrakech, or you may call us at 0668676518 (WhatsApp) or 0809891297 (landline).\r\nWe are open from Monday to Friday, from 10h00 to 18h00.\r\n\r\n#explorem\r\n#exploremrecruit\r\n#exploremacademy \r\n#wemakeadifference \r\n#wemakeithappen\r\n",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-25T15:37:03.907Z",
      },
      updateAt: {
        $date: "2024-04-25T15:37:03.907Z",
      },
    },
  ];
  blogs.sort((a, b) => new Date(b.updateAt.$date) - new Date(a.updateAt.$date));
  const slicedBlogs = blogs.slice(0, take);
  return slicedBlogs.map((blog) => {
    return {
      id: blog._id.$oid,
      base64: blog.base64,
      width: blog.width,

      height: blog.height,

      Url: blog.Url,
      imageKey: blog.imageKey,
      title: blog.title,
      description: blog.description,
      author: blog.author,
      published: blog.published,
      createAt: formatDate(blog.createAt.$date),
      updateAt: formatDate(blog.updateAt.$date),
    };
  });
};

export const fetchSingleBlog = async (id) => {
  const blogs = [
    {
      _id: {
        $oid: "6617d978e647e176260ada09",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AJSTmqGfqaensKmjr5+fqZybp6uqro6Y0xtW8WWP/wCqqrajqb6yr761tMGhl5+LhJKgm6einschYv5ojv8Avb7QopinjnyAhX+IaF9pf2Jd18jO+/7/QWjjao3/ALqzvVFITA8KDHl4gBAWI3FgWsCkmNXU4zNYzXiW/wC6oo5qWEkWHz1CQ0wDAQZ3bWV5dGyDgonW3O/r8f8Ao4BMQzs2AB9pNT1TJycsFRQVS0tNen6D1tro8vb/4NdgftmcUAsAAAAASUVORK5CYII=        ",
      width: "6240",
      height: "3512",
      Org: "https://utfs.io/f/1db72baf-74ba-4649-b6b3-963ca5c8a2a9-emt7mz.jpg",
      Url: "https://utfs.io/f/1db72baf-74ba-4649-b6b3-963ca5c8a2a9-emt7mz.jpg",
      imageKey: "1db72baf-74ba-4649-b6b3-963ca5c8a2a9-emt7mz.jpg",
      title: "New Milestone Unlocked!",
      description:
        "In November 13, 2023, Explorem Formation Center was officially opened. Local partners, teacher, students and active candidates attended the event.\r\n\r\nWe are grateful to all who took their time celebrating this newly achieved project. \r\n\r\nThank you to all our partners – local partners, school partners and German partners - who worked with us since year 2020, and making this new milestone possible!\r\n",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T12:37:12.338Z",
      },
      updateAt: {
        $date: "2024-04-11T12:45:03.818Z",
      },
    },
    {
      _id: {
        $oid: "6617dafae647e176260ada0b",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AMjK3NrU39nb79jU6trh+tihochCKrdEMtmytP/u+gCtmp7f3vHd09/o4PLE0OfGoKPUd0e5X0Pft7X/9/8Aqo2Uh3ODuqTAlIKUlIuVx5ygsGBDjlBEn3p9x6KgAGNcbCMkQJCY1w0XPBAMCYYyM2g8RxoIE0srLDAXFQB5aHdMR2JtcZw1NFUMAgJKEB1gOD5QPEdKNkQkExQAlIqfGRIcExEaRUJRZGV+DxMqS0JPfm2MrpWxeU05AIWIpzMwOUtNW11bcJmctU9QaTcwQMKnts6yzM6Ufyg7ZTn0w6gKAAAAAElFTkSuQmCC        ",
      width: "6960",
      height: "4640",
      Org: "https://utfs.io/f/bcd256f6-6a74-4b6a-a967-5a7d40a21def-jy5hdt.jpeg.jpg",
      Url: "https://utfs.io/f/bcd256f6-6a74-4b6a-a967-5a7d40a21def-jy5hdt.jpeg.jpg",
      imageKey: "bcd256f6-6a74-4b6a-a967-5a7d40a21def-jy5hdt.jpeg.jpg",
      title: "Explorem candidates in WDR Lokalzeit aus Köln!",
      description:
        "Our first 8 relocated nurse-candidates in Köln were covered and interviewed in Köln local TV.\r\n\r\nhttps://www1.wdr.de/lokalzeit/fernsehen/koeln/pflegeinternat-gegen-pflegekraeftemangel-im-bergischen--100.html\r\n\r\nWe are PROUD of you... Keep up the good work!!!  \r\n",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T12:43:38.177Z",
      },
      updateAt: {
        $date: "2024-04-11T12:45:07.606Z",
      },
    },
    {
      _id: {
        $oid: "6617e1c7e5686c1645155d16",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AMjK3NrU39nb79jU6trh+tihochCKrdEMtmytP/u+gCtmp7f3vHd09/o4PLE0OfGoKPUd0e5X0Pft7X/9/8Aqo2Uh3ODuqTAlIKUlIuVx5ygsGBDjlBEn3p9x6KgAGNcbCMkQJCY1w0XPBAMCYYyM2g8RxoIE0srLDAXFQB5aHdMR2JtcZw1NFUMAgJKEB1gOD5QPEdKNkQkExQAlIqfGRIcExEaRUJRZGV+DxMqS0JPfm2MrpWxeU05AIWIpzMwOUtNW11bcJmctU9QaTcwQMKnts6yzM6Ufyg7ZTn0w6gKAAAAAElFTkSuQmCC        ",
      width: "6960",
      height: "4640",
      Org: "https://utfs.io/f/5f5beb44-abcc-402b-a7e5-75906b6b9133-1x9z5t.JPG",
      Url: "https://utfs.io/f/5f5beb44-abcc-402b-a7e5-75906b6b9133-1x9z5t.JPG",
      imageKey: "5f5beb44-abcc-402b-a7e5-75906b6b9133-1x9z5t.JPG",
      title: "Explorem team and candidates featured in ZDF TV",
      description:
        "In February 2024, Explorem team and candidates were featured in ZDF TV regarding nurses from Morocco who want to live and work in Germany.\r\n\r\nThe German health care system is dependent on immigration. Demographic change is creating huge gaps. For 2030, the German Ministry of Economic Affairs expects around 4 million fewer people in employment across all sectors than today. Morocco has many young skilled workers who can help Germany, among other things because the level of qualification in Morocco is good compared to other African countries.\r\n\r\nExplorem managing directors, Mr. Abdessamad Aboul ossoud and Dr. Gracila V. Ucag, shared their experiences in assisting nurses in language training and qualification, documentation, recognition, visa process and relocating candidates to Germany, since year 2020.\r\n\r\nHere are some links, for more details:\r\n\r\nhttps://www.zdf.de/nachrichten/politik/ausland/fachkraeftemangel-pflegepersonal-marokko-100.html\r\n \r\nhttps://www.instagram.com/reel/C3lKOTfAwz3/?igsh=MTRkejE5YWY1bDViMA==\r\n\r\n",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T13:12:39.113Z",
      },
      updateAt: {
        $date: "2024-04-11T13:12:55.926Z",
      },
    },
    {
      _id: {
        $oid: "6617e71b3160465d0a20624c",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AOPXveziyejgyt/ZyOTd0OXf0ufg0uvj0ezjze/jzgCNfFaQfVygj23Xy67Tyq/a0Lnz5NT36NHy48v27NgAbFs5ZlUzkHhX39a93tS96d/I8d/L//3r9u3a7+XVAHBsYgAAKGtRO5VjVYqKj6qeko6Slc6tnp6LfVFHPgBgXloFM3giHBlwLzCjmJtdVFGPobTzyM1HNkcXAAAAhIFtxM7OAB8uaSwt16+iV09JZW1qgpasECc7DQYAAJ+ila/HzkFdaXVISI5saZ6WhMvHhWuMm2p4eHJuaIQ/eQGE/yChAAAAAElFTkSuQmCC        ",
      width: "1280",
      height: "958",
      Org: "https://utfs.io/f/f3a4ceb4-a75a-4228-bd98-f09deb21d1e4-j9ayf.jpg",
      Url: "https://utfs.io/f/f3a4ceb4-a75a-4228-bd98-f09deb21d1e4-j9ayf.jpg",
      imageKey: "f3a4ceb4-a75a-4228-bd98-f09deb21d1e4-j9ayf.jpg",
      title: "100% Passed the B1 external exam!",
      description:
        "Explorem in partnership with DRK Rettungsdienst Rhein-Berg GmbH has 22 nurse-candidates scholars. Their language formation, recognition and relocation process are all paid by their employer. They are receiving a stipend while completing their language qualification in Morocco. \r\n\r\nIn May 2023, they took the TELC B1 test. All of them successfully passed the test and acquire their B1 certificate.\r\n\r\n100% success rate of the first group of the program is such a great achievement for Explorem. \r\nKudos to all candidates and Explorem teachers, Mr. Nizar Dhibi and Ms. Wencke Derb, for a job well done!",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T13:35:22.324Z",
      },
      updateAt: {
        $date: "2024-04-11T13:35:35.490Z",
      },
    },
    {
      _id: {
        $oid: "6617f14ec36786caae8b2e6d",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AL7Q3r3O3MDQ2bTCyKetrgwgLQAFFzI3PFBVW2BkaQDA0uK9zt3C0dz7//+hrK4aLToeJy9haG5tdXl3en0AxdXjyNrpwNHc8/v+s7y6JCksGR8ma36SZHJ9aWttAHp6esHQ2snc6ubx9pSjnzhHU1ZaX3VqY2xoZV9gYgBgYF1yc3GxvMLr9/52gIQ/QExQXGtweoNqbnJYWFgAcXBtbm1ocnFssLe5V1xhSkBBaWxyUV9tTFRdTU5NAHFvaHFtZnl3cX58dlhcW2xhWYt4a3NmXDM4PkFCQtgZaFhlulAVAAAAAElFTkSuQmCC        ",
      width: "4624",
      height: "3468",
      Org: "https://utfs.io/f/6098ab76-14e0-44f4-857b-03e4f6de3324-z9pfeo.jpg",
      Url: "https://utfs.io/f/6098ab76-14e0-44f4-857b-03e4f6de3324-z9pfeo.jpg",
      imageKey: "6098ab76-14e0-44f4-857b-03e4f6de3324-z9pfeo.jpg",
      title: "Nurses Successfully Relocated to Germany!",
      description:
        "In year 2023 and the beginning of the present year, Explorem has been successfully relocating qualified nurses to Germany. Candidates were relocated to Dresden, Halle, Koln, Marburg, Glucksburg. ",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T14:18:53.454Z",
      },
      updateAt: {
        $date: "2024-04-11T14:19:04.043Z",
      },
    },
    {
      _id: {
        $oid: "6617f453c36786caae8b2e6e",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AJiYndXR0a2tthw2hFdWZpyQeB8gKjItK8iHXMp3QQCenZ3AurbFwMC6vtWjpKyNdXo4OEszOjpoZlF6VUAAp6OhzcrFzMjH//v3n5SQHRgkKSozbWpljXRoDzVfAKKioeXl58TFx56lxGJgchIUFAADG1djaZyPjFFKUACin5/Avr6joqdVYJk7P14uHhYtHiJeeoivzdxtf4cApp+dsaqoxsXF6ersrKOfZ0M/XTE4Vmx0tMvUdIWPGMRbIBgs2R4AAAAASUVORK5CYII=        ",
      width: "4624",
      height: "2604",
      Org: "https://utfs.io/f/fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
      Url: "https://utfs.io/f/fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
      imageKey: "fd980f35-e7d0-40d4-9f71-abfd60f97751-k378iq.jpg",
      title: "23 Explorem nurse scholars received their Visa!",
      description:
        "Among the best services Explorem have provided to their candidates for almost 3 years are Visa process and Relocation candidate support, aside from language formation and qualification.\r\n\r\nExplorem is assisting qualified candidates in visa application, getting visa appointments, compiling necessary documents, giving an orientation or preparation regarding visa, organization, and implementation of the journey or flight to Germany.\r\n\r\nIn March 2024, Explorem received a great news that 23 of their nurse scholars received their Visa and soon to be relocated. ",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-11T14:31:46.651Z",
      },
      updateAt: {
        $date: "2024-04-11T14:32:14.835Z",
      },
    },
    {
      _id: {
        $oid: "662a42f9ae5c9959eea912a0",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAABJ0AAASdAHeZh94AAAA+0lEQVR4nAXBO0gCARzA4T+0tjQElvQiugaXq8ggO7sjOoUaFDpC5IoWiSIsAx9gUEvekk1hOhlOeuDQEBIIjYE0lNADHKO1saHg1/dJwTLJxJeob0d4nwpxN2lwoemk1lY4DFk0X+DyCSQdVDgKB7kyVukps3yry/z6I5yJzsKgSf0V7gHZ8U2Qm45y4FnEln4cGeXBM8PjWIKklue8+0eu3EMK4STt7Bvd0hdt3ynzfUJGvLiBGLpi0/qEW3ULqeaveb75wT1uUTROsL0aaX+c5l6JilXjw4VOp4ak7BiNcoN9c5MRGWJ8YA51WGM3kKAaq+CsF4luOPwDlm2LWsfdvDgAAAAASUVORK5CYII= ",
      width: "1758",
      height: "988",
      Org: "https://utfs.io/f/883f093b-43ec-4532-a22e-ed5d884237b4-kplyvh.png",
      Url: "https://utfs.io/f/93e59d44-6155-459d-b8fe-e06805c88728-v2sni1.mp4",
      imageKey: "883f093b-43ec-4532-a22e-ed5d884237b4-kplyvh.png",
      title:
        "Explorem founder/ managing directors speech during the recognition ceremony. ",
      description:
        "Explorem founder/ managing directors speech during the recognition ceremony. \r\n\r\nOn April 19, 2024, the Excel Group of Institutes gave recognition to 20 of their nurse graduates who were successfully relocated to Cologne, Germany.\r\n\r\nThis project is part of the Explorem program in relocating qualified professionals to Germany, in collaboration with German employers/companies. With the initiatives of Explorem, these candidates were able to sign employment contracts and received FREE language courses until the B2 level, recognition and documentation, visa process, relocation, etc.. all paid by their employer.\r\n\r\nFor more information, you may visit the Explorem Center located at Imm 6, Rue Vieux des Marrakchis Nr 7 Gueliz Marrakech, or you may call us at 0668676518 (WhatsApp) or 0809891297 (landline).\r\nWe are open from Monday to Friday, from 10h00 to 18h00.\r\n\r\n#explorem\r\n#exploremrecruit\r\n#exploremacademy \r\n#wemakeadifference \r\n#wemakeithappen\r\n",
      author: "Explorem",
      published: true,
      createAt: {
        $date: "2024-04-25T15:37:03.907Z",
      },
      updateAt: {
        $date: "2024-04-25T15:37:03.907Z",
      },
    },
  ];
  const blog = blogs.find((blog) => blog._id.$oid == id);
  if (blog) {
    return {
      id: blog._id.$oid,
      Org: blog.Org,
      base64: blog.base64,
      width: blog.width,
      height: blog.height,
      base641: blog?.base641,
      width1: blog?.width1,
      height1: blog?.height1,
      Url: blog.Url,
      imageKey: blog.imageKey,
      imageUrl1: blog?.imageUrl1,
      imageKey1: blog?.imageKey1,
      title: blog.title,
      description: blog.description,
      author: blog.author,
      published: blog.published,
      createAt: formatDate(blog.createAt.$date),
      updateAt: formatDate(blog.updateAt.$date),
    };
  } else {
    return {
      status: 404,
    };
  }
};

export const getLatestBlog = async () => {
  const latestBlog = 
  {
    _id: {
      $oid: "662a42f9ae5c9959eea912a0",
    },
    base64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAABJ0AAASdAHeZh94AAAA+0lEQVR4nAXBO0gCARzA4T+0tjQElvQiugaXq8ggO7sjOoUaFDpC5IoWiSIsAx9gUEvekk1hOhlOeuDQEBIIjYE0lNADHKO1saHg1/dJwTLJxJeob0d4nwpxN2lwoemk1lY4DFk0X+DyCSQdVDgKB7kyVukps3yry/z6I5yJzsKgSf0V7gHZ8U2Qm45y4FnEln4cGeXBM8PjWIKklue8+0eu3EMK4STt7Bvd0hdt3ynzfUJGvLiBGLpi0/qEW3ULqeaveb75wT1uUTROsL0aaX+c5l6JilXjw4VOp4ak7BiNcoN9c5MRGWJ8YA51WGM3kKAaq+CsF4luOPwDlm2LWsfdvDgAAAAASUVORK5CYII=  ",
    width: "1758",
    height: "988",
    Org: "https://utfs.io/f/883f093b-43ec-4532-a22e-ed5d884237b4-kplyvh.png",
    Url: "https://utfs.io/f/883f093b-43ec-4532-a22e-ed5d884237b4-kplyvh.png",
    imageKey: "883f093b-43ec-4532-a22e-ed5d884237b4-kplyvh.png",
    title:
      "Explorem founder/ managing directors speech during the recognition ceremony. ",
    description:
      "Explorem founder/ managing directors speech during the recognition ceremony. \r\n\r\nOn April 19, 2024, the Excel Group of Institutes gave recognition to 20 of their nurse graduates who were successfully relocated to Cologne, Germany.\r\n\r\nThis project is part of the Explorem program in relocating qualified professionals to Germany, in collaboration with German employers/companies. With the initiatives of Explorem, these candidates were able to sign employment contracts and received FREE language courses until the B2 level, recognition and documentation, visa process, relocation, etc.. all paid by their employer.\r\n\r\nFor more information, you may visit the Explorem Center located at Imm 6, Rue Vieux des Marrakchis Nr 7 Gueliz Marrakech, or you may call us at 0668676518 (WhatsApp) or 0809891297 (landline).\r\nWe are open from Monday to Friday, from 10h00 to 18h00.\r\n\r\n#explorem\r\n#exploremrecruit\r\n#exploremacademy \r\n#wemakeadifference \r\n#wemakeithappen\r\n",
    author: "Explorem",
    published: true,
    createAt: {
      $date: "2024-04-25T15:37:03.907Z",
    },
    updateAt: {
      $date: "2024-04-25T15:37:03.907Z",
    },
  }

  return {
    id: latestBlog._id.$oid,
    base64: latestBlog.base64,
    width: latestBlog.width,
    height: latestBlog.height,
    Url: latestBlog.Url,
    imageKey: latestBlog.imageKey,
    title: latestBlog.title,
    description: latestBlog.description,
    author: latestBlog.author,
    published: latestBlog.published,
    createAt: formatDate(latestBlog.createAt.$date),
    updateAt: formatDate(latestBlog.updateAt.$date),
  };
};
