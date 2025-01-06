import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

interface Planets {
    name:string;
    climate:string;
    terrain:string;
    population:string;
    next:string;
    previous:string;
    url:string;
    results:[]
  }

const PlanetsEach = () => {
    const params = useParams();
    const [data, setData] = useState<Planets>();
    const [url] = useState<string>(`https://swapi.py4e.com/api/planets/${params.planetsId}/`)


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
            <p>climate: {data.climate}</p>
            <p>terrain: {data.terrain}</p>
            <p>population: {data.population}</p>
            </div>
          ):<p>Loading...</p>}
    </div>
  )
}

export default PlanetsEach