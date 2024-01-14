import React,{useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Login.css'
import { Link } from 'react-router-dom';
import {Oval} from 'react-loader-spinner'

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is Required'),
    password: yup.string().required('Password is Required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false)
  const [Loading, setLoading] = useState(false)
  
  const onSubmit = (data) => {
    // Handle login logic here
    console.log('Form submitted:', data);
  };
 

  const handleShowPassword = ()=>{
    console.log("show");
    setShowPassword(!showPassword)
  }

  return (
    <div className="login-form">
     <div className="Header">
     <h2>Login</h2>
     </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" {...register('email')} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input  id="password" name="password" {...register('password')}  type={showPassword? "text" : "password"} />
          <div
                    className="SignUpContentDownFormPwdEyes"
                >

                   {
                    showPassword ?  (<AiOutlineEye onClick={handleShowPassword} className='AiOutlineEye'/>) :( <AiOutlineEyeInvisible className='AiOutlineEyeInvisible' onClick={handleShowPassword}/>) 
                   }
                </div>
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        <div className="LoginBtn">
        <button type="submit">
        {Loading === true ? (<div className='loader'>
            <Oval
                height={40}
                width={40}
                color="#fff"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#030303"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>) : <span>Login</span>}
        </button>
        </div>
        <div className="AlreadyAcc">
        <p>Already have an account? <Link to='/sign-ups' style={{textDecoration:"none",color:"orange"}}>Sign Up</Link> </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
