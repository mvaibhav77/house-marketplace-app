import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import OAuth from "../components/OAuth";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const {email,password} = formData;

  const navigate = useNavigate();


  const onChangeHandle = (e)=>{
    setFormData(prevState=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      if(userCredential.user){
        navigate('/');
      }

    } catch (error) {
      toast.error('Bad user credentials')
    }


  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={handleSubmit}>
          <input type="email" className="emailInput" placeholder="Email" id="email" value={email} onChange={onChangeHandle}/>

          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder="Password" id='password' value={password} onChange={onChangeHandle}/>

            <img src={visibilityIcon} alt="show password" className="showPassword"  onClick={()=>  showPassword ? setShowPassword(false) : setShowPassword(true)}/>
          </div>

          <Link to='/forgotPassword' className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signInBar">
            <p className="signInText">
              Sign In
            </p>
            <button className="signInButton">
              <ArrowRightIcon fill='#fff' width='34px' height='34px'/>
            </button>
          </div>
        </form>

        {/* Google oAuth */}
        <OAuth />


        <Link to='/signup' className="registerLink">
          Sign Up Instead
        </Link>

      </div>
    </>
  )
}

export default SignIn