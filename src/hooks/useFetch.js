import { useState, useEffect } from 'react';

function useFetch(){


  const [url , setUrl] = useState('');
  const [request , setRequest] = useState({});
  const [isLoading , setIsLoading] = useState(false);
  const [error , setError] = useState();
  const [response , setResponse] = useState();


useEffect(() =>{
  async function newFetch(){

    await setUrl(null);
    await setIsLoading(true);
    await setError(true);
    await setResponse();

    let res = await fetch(request.url ? request.url : url, {
      method: request.method || 'GET',
      body: JSON.stringify(request.body) || null,
      headers: {
          ...request.headers,
          'content-type': 'application/json',
          Accept: 'application/json',
      },
  });


    await setIsLoading(false);

    if (res.status >= 300) {
      await setError(res);
      return;
  }
    await setResponse(await res.json());

  }
  if(request)  newFetch();

} , [request , url]);





  return{
         setUrl,
        setRequest,
        isLoading,
        error,
        response,
  };
   


}

export default useFetch;