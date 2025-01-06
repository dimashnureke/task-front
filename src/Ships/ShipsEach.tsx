import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

interface Ships {
    name:string;
    model:string;
    manufacturer:string;
    starship_class:string;
    next:string;
    previous:string;
    url:string;
    results:[]
  }

const ShipsEach = () => {
    const params = useParams();
    const [data, setData] = useState<Ships>();
    const [url] = useState<string>(`https://swapi.py4e.com/api/starships/${params.shipsId}/`)


    useEffect(()=>{
          fetch(url)
           .then(response => response.json())
           .then(d => setData(d))
        },[url])

  return (
    <div>
      {data ? (
            <div key={data.url} className='Card-detailed'>
            <h1>{data.name}</h1>
            <p>model: {data.model}</p>
            <p>manufacturer: {data.manufacturer}</p>
            <p>starship class: {data.starship_class}</p>
            </div>
          ):<p>Loading...</p>}
    </div>
  )
}

export default ShipsEach