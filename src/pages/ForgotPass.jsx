import { useState,  } from "react"
import { Link } from "react-router-dom"
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRight } from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPass() {
  const [email, setEmail] = useState('')

  const onChange = (e)=>{
    setEmail(e.target.value)
  }

  const onSubmit = async (e)=>{
    e.preventDefault()
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent');
    } catch (error) {
      toast.error('Could not send reset email');
      
    }
  }


  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input type="email" id="email" value={email} className="emailInput" onChange={onChange} placeholder="Email"/>
          <Link className="forgotPasswordLink" to="/signin">Sign In</Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button type='submit' className="signInButton">
              <ArrowRight fill='#fff' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>

    </div>

  )
}

export default ForgotPass