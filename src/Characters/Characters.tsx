import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

interface People {
  name:string;
  height:string;
  mass:string;
  next:string;
  previous:string;
  url:string;
  results:[]
}
const Characters = () => {
  const [data, setData] = useState<People>()
  const [url, setUrl] = useState<string>('https://swapi.py4e.com/api/people/')
  const [count, setCount] = useState(1)
  const navigate = useNavigate()

  const prevPage = () => {
    if(data)
      setUrl(data.previous)
    setCount(count-1)
  }

  const nextPage = () => {
    if(data)
      setUrl(data.next)
    setCount(count+1)
  }

  const clickLink = (url:string) => {
    let b = url.split('/')
    navigate(`/characters/${b[b.length-2]}`)
  }
    
    useEffect(()=>{
      fetch(url)
       .then(response => response.json())
       .then(d => setData(d))
    },[url])
  
    return (
      <div className='card-container-big'>
        <div className='card-container'>
          {data ? data.results.map((item:any) => (
            <div key={item.url} className='Card' onClick={() => {clickLink(item.url)}}>
            <h1>{item.name}</h1>
            <p>height: {item.height}</p>
            <p>mass: {item.mass}</p>
            </div>
          )):<p>Loading...</p>}
        </div>
        {
          data?(<div className='page-container'>
            {data?.previous ? (<button onClick={prevPage}>Prev page</button>) : <></>}
            <h2>{count}</h2>
            {data?.next ? (<button onClick={nextPage}>Next page</button>) : <></>}
            </div>):<></>
        }
      </div>
    )
}

export default Characters