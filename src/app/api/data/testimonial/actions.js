"use server";
export const fetchTestimonial = async () => {
  const testimonial = [
    {
      _id: {
        $oid: "6617183bb2c32fb2c43e73fe",
      },
      image: "man",
      author: "Jamal Bamou",
      fileUrl:
        "https://utfs.io/f/619ed8da-f5f4-431c-b516-10e33998f537-rlti49.mp4",
      fileKey: "619ed8da-f5f4-431c-b516-10e33998f537-rlti49.mp4",
      createdAt: {
        $date: "2024-04-10T22:52:43.622Z",
      },
      updatedAt: {
        $date: "2024-04-10T22:52:43.622Z",
      },
    },
    {
      _id: {
        $oid: "6617d186e4a47aeaaa42c0bf",
      },
      image: "man",
      author: "Ayoub Benchrifa",
      fileUrl:
        "https://utfs.io/f/022c5d24-16c4-4b3b-8338-b9b7c96db9c7-731j5e.mp4",
      fileKey: "022c5d24-16c4-4b3b-8338-b9b7c96db9c7-731j5e.mp4",
      createdAt: {
        $date: "2024-04-11T12:03:18.102Z",
      },
      updatedAt: {
        $date: "2024-04-11T12:03:18.102Z",
      },
    },
    {
      _id: {
        $oid: "6617ff766465fd2bdb319461",
      },
      image: "women",
      author: "Nada Fajri",
      fileUrl:
        "https://utfs.io/f/6585ef48-7d72-4709-9bbd-b17b34f73e81-j8wgcf.pdf",
      fileKey: "6585ef48-7d72-4709-9bbd-b17b34f73e81-j8wgcf.pdf",
      createdAt: {
        $date: "2024-04-11T15:19:18.196Z",
      },
      updatedAt: {
        $date: "2024-04-11T15:19:18.196Z",
      },
    },
    {
      _id: {
        $oid: "6617ffd639aa177c851bf592",
      },
      image: "women",
      author: "Hajar Toumzine",
      fileUrl:
        "https://utfs.io/f/2224e3f5-880e-46d3-982b-0717e143c047-5zv7m8.pdf",
      fileKey: "2224e3f5-880e-46d3-982b-0717e143c047-5zv7m8.pdf",
      createdAt: {
        $date: "2024-04-11T15:20:53.519Z",
      },
      updatedAt: {
        $date: "2024-04-11T15:20:53.519Z",
      },
    },
    {
      _id: {
        $oid: "66180012bbe3baeeb5ec8511",
      },
      image: "man",
      author: "Schirmergut",
      fileUrl:
        "https://utfs.io/f/fad80f34-7df4-4540-b9a3-a1bfe0e53da7-j4gx15.pdf",
      fileKey: "fad80f34-7df4-4540-b9a3-a1bfe0e53da7-j4gx15.pdf",
      createdAt: {
        $date: "2024-04-11T15:21:53.955Z",
      },
      updatedAt: {
        $date: "2024-04-11T15:21:53.955Z",
      },
    },
    {
      _id: {
        $oid: "6618003a43e05984e2d70d6f",
      },
      image: "women",
      author: "ProSo",
      fileUrl:
        "https://utfs.io/f/7eabdb14-9bcd-4cda-b440-88cf34703b8c-fazkdw.png",
      fileKey: "7eabdb14-9bcd-4cda-b440-88cf34703b8c-fazkdw.png",
      createdAt: {
        $date: "2024-04-11T15:22:34.076Z",
      },
      updatedAt: {
        $date: "2024-04-11T15:22:34.076Z",
      },
    },
    {
      _id: {
        $oid: "6618007a9cfe9d8259479b8b",
      },
      image: "man",
      author: "Marburg",
      fileUrl:
        "https://utfs.io/f/d6f1340c-437e-4ba3-b4d1-82b734cf5c18-ewj9oz.pdf",
      fileKey: "d6f1340c-437e-4ba3-b4d1-82b734cf5c18-ewj9oz.pdf",
      createdAt: {
        $date: "2024-04-11T15:23:37.821Z",
      },
      updatedAt: {
        $date: "2024-04-11T15:23:37.821Z",
      },
    },
    {
      _id: {
        $oid: "661800c139aa177c851bf593",
      },
      image: "man",
      author: "Glucksburg",
      fileUrl:
        "https://utfs.io/f/47cfc5c7-3d3b-4a53-934c-bcc8a536022e-oy44je.png",
      fileKey: "47cfc5c7-3d3b-4a53-934c-bcc8a536022e-oy44je.png",
      createdAt: {
        $date: "2024-04-11T15:24:48.981Z",
      },
      updatedAt: {
        $date: "2024-04-11T15:24:48.981Z",
      },
    },
  ];

  return testimonial.map((item) => {
    return {
      _id: item._id.$oid,
      image: item.image,
      author: item.author,
      fileUrl: item.fileUrl,
      fileKey: item.fileKey,
      createdAt: formatDate(item.createdAt.$date),
      updatedAt: formatDate(item.updatedAt.$date),
    };
  });
};

export const fetchTestimonialLatest = async () => {
  const testimonial = [
    {
      _id: {
        $oid: "6617183bb2c32fb2c43e73fe",
      },
      image: "man",
      author: "Jamal Bamou",
      fileUrl:
        "https://utfs.io/f/619ed8da-f5f4-431c-b516-10e33998f537-rlti49.mp4",
      fileKey: "619ed8da-f5f4-431c-b516-10e33998f537-rlti49.mp4",
      createdAt: {
        $date: "2024-04-10T22:52:43.622Z",
      },
      updatedAt: {
        $date: "2024-04-10T22:52:43.622Z",
      },
    },
    {
      _id: {
        $oid: "6617d186e4a47aeaaa42c0bf",
      },
      image: "man",
      author: "Ayoub Benchrifa",
      fileUrl:
        "https://utfs.io/f/022c5d24-16c4-4b3b-8338-b9b7c96db9c7-731j5e.mp4",
      fileKey: "022c5d24-16c4-4b3b-8338-b9b7c96db9c7-731j5e.mp4",
      createdAt: {
        $date: "2024-04-11T12:03:18.102Z",
      },
      updatedAt: {
        $date: "2024-04-11T12:03:18.102Z",
      },
    },

    {
      _id: {
        $oid: "6618003a43e05984e2d70d6f",
      },
      image: "women",
      author: "ProSo",
      fileUrl:
        "https://utfs.io/f/7eabdb14-9bcd-4cda-b440-88cf34703b8c-fazkdw.png",
      fileKey: "7eabdb14-9bcd-4cda-b440-88cf34703b8c-fazkdw.png",
      createdAt: {
        $date: "2024-04-11T15:22:34.076Z",
      },
      updatedAt: {
        $date: "2024-04-11T15:22:34.076Z",
      },
    },
  ];

  return testimonial.map((item) => {
    return {
      _id: item._id.$oid,
      image: item.image,
      author: item.author,
      fileUrl: item.fileUrl,
      fileKey: item.fileKey,
      createdAt: formatDate(item.createdAt.$date),
      updatedAt: formatDate(item.updatedAt.$date),
    };
  });
};

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};
