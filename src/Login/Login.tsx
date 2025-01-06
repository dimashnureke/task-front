import { useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { onLine } from '../app/features/autherizedSlice';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    interface FormData {
        username:string,
        password:string,
    }

    const count = useSelector((state:any) => state.isOnline.value)
    const dispatch = useDispatch();
    const {register, handleSubmit, reset, formState:{errors}} = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (data:FormData) => {
        console.log(data);
        (data.username==="admin"&&data.password==="password") ?
        (dispatch(onLine()),navigate('/characters')) : alert('Incorrect credentials')
        reset()
    }

    

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
            <input {...register("username", {required:"Username is required",})} type="text" placeholder='Username'/>
            {errors.username && (
                <p style={{color:"tomato"}}>{errors.username.message}</p>
            )}
            <input {...register("password", {required:"Password is required",})} type="password" placeholder='Password'/>
            {errors.password && (
                <p style={{color:"tomato"}}>{errors.password.message}</p>
            )}
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login