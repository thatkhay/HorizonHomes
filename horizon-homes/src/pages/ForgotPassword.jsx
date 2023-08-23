import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import {toast} from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

const ForgotePassword = () => {
  const [email, setEmail] = useState('')
  const onChange = (e) => {
    setEmail(e.target.value)
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Mail sent, check Email inbox')
    } catch (error) {
      toast.error('Could not send reset mail')
    }

  }
  return (
    <div>
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
<input type="email"  className="emailInput" placeholder="Emal" id="email" value={email} onChange={onChange}/>
<Link className="forgotPasswordLink" to='/signin'>
  Signin
</Link>
<div className="signInBar">
  <div className="signInText">
    Send Password Reset Link 
  </div>
  <button className="signInButton">
    <ArrowRightIcon fill='white' width='2.125rem' height='2.125rem' />
  </button>
</div>
        </form>
      </main>
    </div>
  )
}

export default ForgotePassword