import Header from './Header/Header'
import Login from './Login/Login'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='main-page'>
      <Header /> 
      <Outlet />
    </div>
  )
}

export default App