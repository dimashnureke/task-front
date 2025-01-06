import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { offLine } from '../app/features/autherizedSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const count = useSelector((state:any) => state.isOnline.value);
  const dispatch = useDispatch();
  if(count){
    return (
      <header className='header-container'>
          <div>LOGO</div>
          <Link to='/planets' className='link'>Planets</Link>
          <Link to='/characters' className='link'>Characters</Link>
          <Link to='/ships' className='link'>Ships</Link>
          <Link to='/login' className='link' onClick={() => dispatch(offLine())}>Log out</Link>
      </header>
    )
  }else{
    return (
      <header className='header-container'>
          <div>LOGO</div>
          <Link to='/login' className='link'>Login</Link>
      </header>
    )
  }
}

export default Header