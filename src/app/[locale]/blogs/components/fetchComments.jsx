"use server"
export const fetchComments = async () => {
    
  try {

      const res = await fetch(`http://localhost:3000/api/comments/fetchComments`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          cache: 'no-cache' // to revalidate the cache or realtime see the blogs after you add
      })

      if(res.ok) {
          const rawData = await res.json();
          const comments = rawData.data;
          return comments
      }
      
  } catch (error) {
      console.log('error', error);
  }

}