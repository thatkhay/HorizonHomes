import React, { useState } from 'react'
import { ReactComponent as ArrowRightIcon  } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { Link, useNavigate } from 'react-router-dom'



const Signin = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ 
    email: '',
    password: '',
  })


  const {email, password} = formData

  const navigate = useNavigate()

  const onInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <>
<div className="pageContainer" >
  <header>
    <p className="pageHeader">Welcome Back !</p>
  </header>
  <main>
  <form action="">
    <input type="email" className="emailInput" placeholder='Email'  id='email' value={email} onChange={onInputChange}/>
    <div className="passwordInputDiv">
    <input type={showPassword ? 'text' : 'password'} className="passwordInput" placeholder='Password'  id='password' value={password} onChange={onInputChange} />
    <img className='showPassword' src={visibilityIcon} alt="showpassword"  onClick={() => setShowPassword((prev) => !prev)}/>
    </div>
    <Link to='/forgotpassword' className='forgotPasswordLink'>
      Forgot Password
    </Link>
    <div className="signInBar">
      <p className="signInText">
        Sign In
      </p>
      <button className="signInButton">
        <ArrowRightIcon fill='white' width='2.15rem' height='2.15rem'/>
      </button>
    </div>
  </form>
  {/* goggle oaut */}
  <Link to='/signup' className='registerLink'>
    Sign Up Instead
  </Link>
  </main>
</div>
    </>
  )
}

export default Signin