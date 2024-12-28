import { useForm, type FieldValues } from 'react-hook-form'
import './Login.css'

const Login = () => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    const onSubmit = (data:FieldValues) => {
        console.log(data)
        console.log(data.username)
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