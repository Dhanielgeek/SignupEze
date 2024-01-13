import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Style.css'
import axios from 'axios'
import Swal from 'sweetalert2'

const schema = yup.object().shape({
  FirstName: yup.string().required('FirstName is required'),
  LastName: yup.string().required('LastName is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  confirmEmail: yup.string().oneOf([yup.ref('email'), null], 'Emails must match').required('Confirm Email is required'),
  password: yup.string().min(9, 'Password must be at least 9 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  phoneNumber : yup.string().min(11, 'phone Number must be at least 11 digit').required('Phone Number is REQUIRED')
});

const Signup = () => {
  const { register,  formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const [fullName, setfullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [Loading, setLoading] = useState(false)

  const data = {fullName,email,phoneNumber,password}
  const Url = 'https://chowfinder.onrender.com/api/sign-up'

const HandlFullName = (e)=>{
const NewName = e.target.value
setfullName(NewName)
}
const HandleEmail = (e)=>{
  const NewEmail = e.target.value
  setEmail(NewEmail)
  }
  const HandlPhoneNumber = (e)=>{
    const NewPhone = e.target.value
    setphoneNumber(NewPhone)
    }
    const HandlePassword = (e)=>{
      const NewPassword = e.target.value
      setPassword(NewPassword)
      }



  const onSubmit = async(e) => {
    e.preventDefault()
    try{
      const res = await axios.post(Url,data)
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Welcome ${fullName }`,
        showConfirmButton: false,
        timer: 1500
      })
      console.log(res.data);
    }
    catch (error){
      Swal.fire({
        icon: "error",
        title: `${error.message}`,
        text: "Something went wrong!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }

    
  
  };

  return (
    <div className='BodyRegister'>
      <form onSubmit={onSubmit}>
      <header >
     <h2>Sign Up</h2>
     </header>
        <div className='Namecontainer'>
          <label>First Name:</label>
          <input type="text" {...register('FullName')} onChange={HandlFullName} />
          <p>{errors.FullName?.message}</p>
          <label>Last Name:</label>
          <input type="text" {...register('FullName')} onChange={HandlFullName} />
          <p>{errors.FullName?.message}</p>
        </div>
        <div className='Emailcontainer'>
          <label>Email:</label>
          <input type="text" {...register('email')} onChange={HandleEmail} />
          <p>{errors.email?.message}</p>
        </div>
        {/* <div className='countrycontainer'>
          <label>Confirm Email:</label>
          <input type="text" {...register('confirmEmail')} />
          <p>{errors.confirmEmail?.message}</p>
        </div> */}
        <div className='passwordcontainer'>
          <label>Password:</label>
          <input type="password" {...register('password')} onChange={HandlePassword} />
          <p>{errors.password?.message}</p>
        </div>
        <div className='statecontainer'>
          <label>Confirm Password:</label>
          <input type="text" {...register('confirmPassword')} />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <div className='phonecontainer'>
          <label>PhoneNumber:</label>
          <input type="number" {...register('phoneNumber')} onChange={HandlPhoneNumber} />
          <p>{errors.phoneNumber?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;