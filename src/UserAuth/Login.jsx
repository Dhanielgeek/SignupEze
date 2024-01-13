import React,{useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Login.css'

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup.string().required('Required'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle login logic here
    console.log('Form submitted:', data);
  };
  const [showPassword, setShowPassword] = useState(false)

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
          {/* {errors.email && <p className="error-message">{errors.email.message}</p>} */}
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
          {/* {errors.password && <p className="error-message">{errors.password.message}</p>} */}
        </div>
        <div className="LoginBtn">
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
