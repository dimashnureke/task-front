import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

interface People {
  name:string;
  height:string;
  mass:string;
  next:string;
  previous:string;
  url:string;
  gender:string;
  skin_color:string;
  results:[]
}

const CharactersEach = () => {
    const params = useParams();
    const [data, setData] = useState<People>();
    const [url] = useState<string>(`https://swapi.py4e.com/api/people/${params.charactersId}/`)


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
            <p>height: {data.height}</p>
            <p>mass: {data.mass}</p>
            <p>gender: {data.gender}</p>
            <p>skin color: {data.skin_color}</p>
            </div>
          ):<p>Loading...</p>}
    </div>
  )
}

export default CharactersEach