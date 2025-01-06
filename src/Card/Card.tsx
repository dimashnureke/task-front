// import './Card.css'
// import { useEffect, useState } from 'react'

// const Card = (url:any) => {
//   const [data, setData] = useState<any>()
//   useEffect(()=>{
//     fetch('https://swapi.py4e.com/api/people/')
//      .then(response => response.json())
//      .then(d => setData(d))
//   },[])

//   return (
//     <div>
//       <button onClick={()=>console.log(data)}>click</button>
//       {data ? data.results.map((item:any) => (
//         <div key={item.url}>
//         <h1>{item.name}</h1>
//         <p>{item.height}</p>
//         <p>{item.mass}</p>
//         </div>
//       )):<p>noo</p>}
//     </div>
//   )
// }

// export default Card