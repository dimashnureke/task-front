import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Header from './Header/Header.tsx'
import Login from './Login/Login.tsx'
import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Characters from './Characters/Characters.tsx'
import Planets from './Planets/Planets.tsx'
import Ships from './Ships/Ships.tsx'
import CharactersEach from './Characters/CharactersEach.tsx'
import PlanetsEach from './Planets/PlanetsEach.tsx'
import ShipsEach from './Ships/ShipsEach.tsx'


const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<div>404 Not Found</div>,
  children:[{
    path:'/login',
    element:<Login/>,
  },{
    path:'/planets',
    element:<Planets/>,
  },{
    path:'/characters',
    element:<Characters/>,
  },{
    path:'/ships',
    element:<Ships/>,
  },{
    path:'/characters/:charactersId',
    element:<CharactersEach/>,
  },{
    path:'/planets/:planetsId',
    element:<PlanetsEach/>,
  },{
    path:'/ships/:shipsId',
    element:<ShipsEach/>,
  }]
},]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
