import Image from "next/image";
export default async function FetchImageScroll() {
  const images = [{
    "base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AKamsMjO1tnh5ePp7vL+//D+/+Lo683S18bIy8rIyACFf4GYaHKdbXW5eXnPgofEcne2i4mGVlWJbni6yMwAZmtvwJtgo3VJgEU9hywziSMlqomDm3hdqYhdq6yYAIVgTMGmevDCiXxdTC0kJHFtZEg/PHNjUbuXZoZkTQCHYEZ6Y1addl50XEopKCg/PTobGhgmHBc+LSApIh0ABwMAHyAdEhQTNS8pWFVOXFlUWFVRS0pJOjs6MC8rdH1SjD+lpSkAAAAASUVORK5CYII=      ",
    "width":"563",
    "height":"1000",
    "imageUrl": "slide4.jpeg"
   
  },
  {
  
    "base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/ANDq+9nt/+r7/8vo1Iaxa8jix/j/9tvdo4unbbTEkwDl/P/s///c+e5llUlflEh9n025onihlGZsZWM7S2UA4O/25NvbucaSm4RfqqaDk6JsroFjclpZflpFOi8vAMqwm86YfbynjKmHdt3Lt+zj0YtXNodsVAAAFxsYKwDPp4bVkHWUgYqLjZ2loK2GwMCbyLHy//+IpbgAE0sAvbSysn1ggoGTeIywbG+TPmJXRJp6uOf8mbjKHChLmj5sgc4oIrQAAAAASUVORK5CYII=      ",
    "width":"1080",
    "height":"692",
    "imageUrl": "slide2.jpeg"
 
  },
  {
   
    "base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/AMvLys/Py9LUztjX08vKxrW3ttbX08zNy8vNyMbIxgAqKSUwMjEdHyEcIiUlKi0kISMdICQfJCYiKSwZICUAZnd5UV9oEBwkKC00b2ZfbmJbDiEqM05dQF5tNkhXAFxuY2V5dUBHSywVEIJIN7mIfmZbXa2WlHF+izk9RwBGQSYfLiIJAg1qSUWCXWgoFSN9anT/+f+SjI8IFTMAlGtamXhtIRcUWWODeICfFRIcNj1TxNX9n395TSo0AJtnT8eMVsSbccvb9KivxS4dGREjPAAsX3ZiXMSJWUylVCQL+q6ZAAAAAElFTkSuQmCC      ",
    "width":"1080",
    "height":"810",
    "imageUrl": "slide7.jpeg"
    },
  {
    
    "base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nAG6AEX/AFJWXFlaXVteYVhcXmlrbGZpal1gYVpbW2ZsbF5jZQAoNjsqFBkfChEcISRgZWeJio1vi4xSjYqfhIiSVVwAWUQtMRwbLiIfJhwaPjMtIxgVMzU2UICAgDlFYAAFAFEzL1EqL3E3QEE7OVVLSHZwbo95dnpxaRsOEgkEDgB7WF7Mm6Lu0tTx7enOzMdzc24wNTMUGhcAAAAABAEA/v7+////ra2qNjgzGB8ZJConOkI7R05HQ0Y8PUE6vn89t60HCZMAAAAASUVORK5CYII=      ",
    "width":"1000",
    "height":"563",
   
    "imageUrl": "slide6.jpeg"
  },
  {
   
    "base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nAHZACb/ANvQtOXcweLaw97YyOXf1Obi1+nk1Ovk0u3kz+7jzQCDdU2IeFeml3fSxqrQxqrh1sDw48/u3cbr3cTz5tIAX00naFY0n4ps29W64trA7uTM+ezY//3q7+TQ/fXlADo1Ox4YKJJyVY5oX6mtqaefk6qinNe9p41+bYF6cABCTGkXLmQ1Jxl7QUGXk5RYVli+xtXerK8mHCg3KRgAoqSWjJ2jAAUal1JIybSqUElBfIWGjJeqABQkRD82ALKzoYWjrjRGUYJOTY1zbp+XcrO4h2mFklFfXoB8ct2feijOW+22AAAAAElFTkSuQmCC      ",
    "width":"1280",
    "height":"958",
   
    "imageUrl": "slide5.jpeg"
  },
  {
    
    "base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAIAAABPmPnhAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nAH4AAf/AKumrZ+WmpqPkJSIh5iLibKhnrWqp9fU16qkqY+HigC0tr7X1+S+truwr7Kqp6ebl5aVj42gnJ2ysLWpqa4At7e+//7/1726trCu3svJqqqprK6xoKSvrbS8qrC7AKuprqmck7iJiqd9hGJkazo2PZufpK20tnqHkVRZYQCjn6VSS0ZbNTxdNUgcQGJHUmOvtrWyublQYnEECRAAo5yjS0I7AQACBgQFKys3ZWZtp6Sgd3FtLSkqCQsOAJuVm2BWWg0IDjgoJzkrLzgvMl1HQDUnJRYXHhkXGACCcnSOd3l5W1WEYFZ1Vk9jU1JqWVNRNzFdR0RRQDo/dnLL6axuUgAAAABJRU5ErkJggg==      ",
    "width":"1600",
    "height":"1200",
   
    "imageUrl": "slide3.jpeg"
  },
  {
   
    "base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA5ElEQVR4nAHZACb/AMbM4tXb7NfZ5t7d5ePi4+jk4+fj3+Lb1tzW0tHLxQDK0OLY2+jk5Oza2+DNy87GxcXIwsLLx8C5sqyjn5cAr6eo6ebn+/323dbS09DMycS+19fXzce7zMq9zMq9AJWji83Ax31hZnx5g4WHjFhiX6CXjq6dipGKg7GpmwBqeGPs/P90b4AyQlo9QUoAJydiTDuiTEF5KDvb3N0AsrKnn6Occ25nVlZVBgQAJiMcWTUeoTUvlCg9cWtqAIaKgmJZQoKCdmVkWiMjHCUmH45cQlQeBHBoYVVQShUGe72a7ZgBAAAAAElFTkSuQmCC      ",
    "width":"1080",
    "height":"810",
   
    "imageUrl": "slide1.jpeg"
  }]
  return (
    <>
      {images?.map((src, index) => (
        <div className=" space-x-4 bg-white p-2" key={index}>
          <Image
            title="Explorem"
            blurDataURL={`${src.base64}`}
            placeholder="blur"
            quality={50}
            width={src.width}
            height={src.height}
            src={`/image/slide/${src.imageUrl}`}
            className="max-w-none min-w-80   rounded-sm h-52 w-auto"
            alt="Explorem "
          />
        </div>
      ))}
    </>
  );
}
