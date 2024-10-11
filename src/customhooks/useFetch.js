import { useState, useEffect } from "react";

export const useFetch = (url)=>{

    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(data => setApiData(data)) 
            .catch(error => console.log(`Custom useFetch ERROR: ${error}`))
        }, [url]) 

    return apiData
}