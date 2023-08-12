/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect} from "react";



export const useFetch = (service, artist) => {

const [isLoading, setIsLoading] = useState(true);
const [data, setData] = useState(null);
const [error, setError] = useState(null);


const fetchData = async () => {
  try {
    if(!artist){
      const data = await service()
      setData(data);
    }
    const data= await service(artist)
    setData(data)
   
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false);
  }
};

useEffect(()=> {
    fetchData()
}, [artist])
return {isLoading, data, error, setData}
}