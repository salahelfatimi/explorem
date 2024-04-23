"use server";

export const fetchImageScroll = async () => {
  const Images = [
    {
      _id: {
        $oid: "6617179fc87278aaa0ad1eef",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AKamsMjO1tnh5ePp7vL+//D+/+Lo683S18bIy8rIyACFf4GYaHKdbXW5eXnPgofEcne2i4mGVlWJbni6yMwAZmtvwJtgo3VJgEU9hywziSMlqomDm3hdqYhdq6yYAIVgTMGmevDCiXxdTC0kJHFtZEg/PHNjUbuXZoZkTQCHYEZ6Y1addl50XEopKCg/PTobGhgmHBc+LSApIh0ABwMAHyAdEhQTNS8pWFVOXFlUWFVRS0pJOjs6MC8rdH1SjD+lpSkAAAAASUVORK5CYII=      ",
      width: "563",
      height: "1000",
      imageUrl:
        "https://utfs.io/f/9b2eb7f7-e96a-4824-a724-172287ee147b-jy5hdt.jpeg.jpg",
      imageKey: "9b2eb7f7-e96a-4824-a724-172287ee147b-jy5hdt.jpeg.jpg",
      createdAt: {
        $date: "2024-04-10T22:50:06.456Z",
      },
      updatedAt: {
        $date: "2024-04-10T22:50:06.456Z",
      },
    },
    {
      _id: {
        $oid: "661717a9d18f3fb9d2c8591f",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/ANDq+9nt/+r7/8vo1Iaxa8jix/j/9tvdo4unbbTEkwDl/P/s///c+e5llUlflEh9n025onihlGZsZWM7S2UA4O/25NvbucaSm4RfqqaDk6JsroFjclpZflpFOi8vAMqwm86YfbynjKmHdt3Lt+zj0YtXNodsVAAAFxsYKwDPp4bVkHWUgYqLjZ2loK2GwMCbyLHy//+IpbgAE0sAvbSysn1ggoGTeIywbG+TPmJXRJp6uOf8mbjKHChLmj5sgc4oIrQAAAAASUVORK5CYII=      ",
      width: "1080",
      height: "692",

      imageUrl:
        "https://utfs.io/f/4df69959-7b5f-4971-ab10-5ea0ead23c75-hbzwgj.jpg",
      imageKey: "4df69959-7b5f-4971-ab10-5ea0ead23c75-hbzwgj.jpg",
      createdAt: {
        $date: "2024-04-10T22:50:17.636Z",
      },
      updatedAt: {
        $date: "2024-04-10T22:50:17.636Z",
      },
    },
    {
      _id: {
        $oid: "661717b1d18f3fb9d2c85920",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AMvLys/Py9LUztjX08vKxrW3ttbX08zNy8vNyMbIxgAqKSUwMjEdHyEcIiUlKi0kISMdICQfJCYiKSwZICUAZnd5UV9oEBwkKC00b2ZfbmJbDiEqM05dQF5tNkhXAFxuY2V5dUBHSywVEIJIN7mIfmZbXa2WlHF+izk9RwBGQSYfLiIJAg1qSUWCXWgoFSN9anT/+f+SjI8IFTMAlGtamXhtIRcUWWODeICfFRIcNj1TxNX9n395TSo0AJtnT8eMVsSbccvb9KivxS4dGREjPAAsX3ZiXMSJWUylVCQL+q6ZAAAAAElFTkSuQmCC      ",
      width: "1080",
      height: "810",

      imageUrl:
        "https://utfs.io/f/e39580f8-2860-49c9-aa14-48271a4da236-e6dywi.jpg",
      imageKey: "e39580f8-2860-49c9-aa14-48271a4da236-e6dywi.jpg",
      createdAt: {
        $date: "2024-04-10T22:50:25.529Z",
      },
      updatedAt: {
        $date: "2024-04-10T22:50:25.529Z",
      },
    },
    {
      _id: {
        $oid: "661717c1d18f3fb9d2c85921",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AFJWXFlaXVteYVhcXmlrbGZpal1gYVpbW2ZsbF5jZQAoNjsqFBkfChEcISRgZWeJio1vi4xSjYqfhIiSVVwAWUQtMRwbLiIfJhwaPjMtIxgVMzU2UICAgDlFYAAFAFEzL1EqL3E3QEE7OVVLSHZwbo95dnpxaRsOEgkEDgB7WF7Mm6Lu0tTx7enOzMdzc24wNTMUGhcAAAAABAEA/v7+////ra2qNjgzGB8ZJConOkI7R05HQ0Y8PUE6vn89t60HCZMAAAAASUVORK5CYII=      ",
      width: "1080",
      height: "563",

      imageUrl:
        "https://utfs.io/f/3247c116-3365-4c6b-9f9d-e57af6869560-o2v3e2.jpeg.jpg",
      imageKey: "3247c116-3365-4c6b-9f9d-e57af6869560-o2v3e2.jpeg.jpg",
      createdAt: {
        $date: "2024-04-10T22:50:41.020Z",
      },
      updatedAt: {
        $date: "2024-04-10T22:50:41.020Z",
      },
    },
    {
      _id: {
        $oid: "661717cbd18f3fb9d2c85922",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/ANvQtOXcweLaw97YyOXf1Obi1+nk1Ovk0u3kz+7jzQCDdU2IeFeml3fSxqrQxqrh1sDw48/u3cbr3cTz5tIAX00naFY0n4ps29W64trA7uTM+ezY//3q7+TQ/fXlADo1Ox4YKJJyVY5oX6mtqaefk6qinNe9p41+bYF6cABCTGkXLmQ1Jxl7QUGXk5RYVli+xtXerK8mHCg3KRgAoqSWjJ2jAAUal1JIybSqUElBfIWGjJeqABQkRD82ALKzoYWjrjRGUYJOTY1zbp+XcrO4h2mFklFfXoB8ct2feijOW+22AAAAAElFTkSuQmCC      ",
      width: "1280",
      height: "958",

      imageUrl:
        "https://utfs.io/f/645aa338-101d-4efc-9c3b-9a924598c7b5-j9ayd.jpg",
      imageKey: "645aa338-101d-4efc-9c3b-9a924598c7b5-j9ayd.jpg",
      createdAt: {
        $date: "2024-04-10T22:50:51.285Z",
      },
      updatedAt: {
        $date: "2024-04-10T22:50:51.285Z",
      },
    },
    {
      _id: {
        $oid: "661717ded18f3fb9d2c85923",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AMzN3dnS4N3d8tvV7dnj+9igosc+KbdENdatsf/w+wCqmJzh4PLf1eLl3e/G0ejKoqXXfUq8YUfes7X/+f8Aqo2UjniHuaO9l4WWmZCaxJqctGNJlFRHn3p60ainAGVdbSEjPpCY1xEbQRAKCIw4OWM3QRoGEkssKy8XFAB5aHdMSGJydaI1M1MMAgBIDRxiOD9UP0pMNkUeBwcAlYqeGRIcFRIbR0NTX152FhgvRTpGe2yKrpWzelA6AIaJqDMwOUdJVl5bcJebtE5QaTkyQ76hstK0zsuSfGgmZX5k3blAAAAAAElFTkSuQmCC      ",
      width: "1280",
      height: "853",

      imageUrl:
        "https://utfs.io/f/3263f2ae-66d0-4726-9ea1-338067dd3ecd-6i8wci.20.18.jpeg",
      imageKey: "3263f2ae-66d0-4726-9ea1-338067dd3ecd-6i8wci.20.18.jpeg",
      createdAt: {
        $date: "2024-04-10T22:51:10.688Z",
      },
      updatedAt: {
        $date: "2024-04-10T22:51:10.688Z",
      },
    },
    {
      _id: {
        $oid: "66173a3d4ac2c2eb57e27cf0",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAIAAABPmPnhAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nAH4AAf/AKumrZ+WmpqPkJSIh5iLibKhnrWqp9fU16qkqY+HigC0tr7X1+S+truwr7Kqp6ebl5aVj42gnJ2ysLWpqa4At7e+//7/1726trCu3svJqqqprK6xoKSvrbS8qrC7AKuprqmck7iJiqd9hGJkazo2PZufpK20tnqHkVRZYQCjn6VSS0ZbNTxdNUgcQGJHUmOvtrWyublQYnEECRAAo5yjS0I7AQACBgQFKys3ZWZtp6Sgd3FtLSkqCQsOAJuVm2BWWg0IDjgoJzkrLzgvMl1HQDUnJRYXHhkXGACCcnSOd3l5W1WEYFZ1Vk9jU1JqWVNRNzFdR0RRQDo/dnLL6axuUgAAAABJRU5ErkJggg==      ",
      width: "1600",
      height: "1200",

      imageUrl:
        "https://utfs.io/f/7dfdd615-00b4-4854-a61d-9edc0328ff67-idy0je.jpg",
      imageKey: "7dfdd615-00b4-4854-a61d-9edc0328ff67-idy0je.jpg",
      createdAt: {
        $date: "2024-04-11T01:17:48.561Z",
      },
      updatedAt: {
        $date: "2024-04-11T01:17:48.561Z",
      },
    },
    {
      _id: {
        $oid: "66173a844ac2c2eb57e27cfa",
      },
      base64:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA5ElEQVR4nAHZACb/AMbM4tXb7NfZ5t7d5ePi4+jk4+fj3+Lb1tzW0tHLxQDK0OLY2+jk5Oza2+DNy87GxcXIwsLLx8C5sqyjn5cAr6eo6ebn+/323dbS09DMycS+19fXzce7zMq9zMq9AJWji83Ax31hZnx5g4WHjFhiX6CXjq6dipGKg7GpmwBqeGPs/P90b4AyQlo9QUoAJydiTDuiTEF5KDvb3N0AsrKnn6Occ25nVlZVBgQAJiMcWTUeoTUvlCg9cWtqAIaKgmJZQoKCdmVkWiMjHCUmH45cQlQeBHBoYVVQShUGe72a7ZgBAAAAAElFTkSuQmCC      ",
      width: "1080",
      height: "810",

      imageUrl:
        "https://utfs.io/f/3cb33342-e2ee-43da-9409-ca2b64dc8745-y0dyt4.jpg",
      imageKey: "3cb33342-e2ee-43da-9409-ca2b64dc8745-y0dyt4.jpg",
      createdAt: {
        $date: "2024-04-11T01:19:00.926Z",
      },
      updatedAt: {
        $date: "2024-04-11T01:19:00.926Z",
      },
    },
  ];
  return Images;
};
