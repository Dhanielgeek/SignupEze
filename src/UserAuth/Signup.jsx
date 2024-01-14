import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Style.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

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
  const { register,   formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('')
  // const [phoneNumber, setphoneNumber] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  const [Loading, setLoading] = useState(false)

  const initialValues = {
    firstname : "",
    lastname : "",
    email : "",
    phoneNumber : "",
  userPassword : "",
    confirmPassword : "",
  }

const [formValues, setFormValues] = useState(initialValues)


const handleChange = (e)=>{
  const {name,value} = e.target
  setFormValues({...formValues,[name]: value})
}
console.log(formValues);
  
  // const HandleFirstName = (e)=>{
  //   setFirstName(e.target.value)
  // }
  // const HandleLastName = (e)=>{
  //   setLastName(e.target.value)
  // }
  // const HandleEmail = (e)=>{
  //   setEmail(e.target.value)
  // }
  // const HandlePhoneNumber = (e)=>{
  //   setphoneNumber(e.target.value)
  // }
  // const HandlePassword = (e)=>{
  //   setPassword(e.target.value)
  // }
  // const HandleConfirmPassword = (e)=>{
  //   setConfirmPassword(e.target.value)
  // }

  // console.log(firstName,lastName,email,password,phoneNumber,confirmPassword);
  const url = "https://task-management-luay.onrender.com/signup"



  
  const data = {
    firstName: formValues.firstname,
    lastName: formValues.lastname,
    email: formValues.email,
    phoneNumber: formValues.phoneNumber,
    password: formValues.password,
    confirmPassword: formValues.confirmPassword
}  

  const onSubmit = async (e) => {
   e.preventDefault()
   try{
     setLoading(true)
     const Res = await axios.post(url,data)
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${Res.status}`,
      showConfirmButton: false,
      timer: 1500
    });
    // setFirstName('');
    // setLastName('');
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
    // setphoneNumber('');
  
    console.log('Registration Successful', Res.data);
   }
  // alert("hello")
   catch (error){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.message}`,
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
    console.log('Registration Failed',error.error);
   }
   finally{
    setLoading(false)
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
          <input type="text" {...register('FirstName')} onChange={handleChange} />
          <p>{errors.FirstName?.message}</p>
          <label>Last Name:</label>
          <input type="text" {...register('LastName')} onChange={handleChange}    />
          <p>{errors.LastName?.message}</p>
        </div>
        <div className='Emailcontainer'>
          <label>Email:</label>
          <input type="text" {...register('email')} onChange={handleChange}    />
          <p>{errors.email?.message}</p>
        </div>
        <div className='passwordcontainer'>
          <label>Password:</label>
          <input type="password" {...register('password')} onChange={handleChange}   />
          <p>{errors.password?.message}</p>
        </div>
        <div className='statecontainer'>
          <label>Confirm Password:</label>
          <input type="text" {...register('confirmPassword')} onChange={handleChange}   />
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <div className='phonecontainer'>
          <label>PhoneNumber:</label>
          <input type="number" {...register('phoneNumber')} onChange={handleChange}    />
          <p>{errors.phoneNumber?.message}</p>
        </div>
        <button type="submit">
        {Loading === true ? (<div className='loader'>
            <Oval
                height={30}
                width={30}
                color="#fff"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#030303"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>) : (<span>Sign Up</span>)}
        </button>
        <div className="AlreadyAcc">
        <p>Already have an account? <Link to='/logs' style={{textDecoration:"none",color:"orange"}}>Login</Link> </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;