import React, { useState } from 'react'
import { ReactComponent as ArrowRightIcon  } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { Link, useNavigate } from 'react-router-dom'



const Signup = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ 
    name: '',
    email: '',
    password: '',
  })


  const {name,email, password} = formData

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
    <input type="text" className="nameInput" placeholder='Name'  id='name' value={name} onChange={onInputChange}/>
    <input type="email" className="emailInput" placeholder='Email'  id='email' value={email} onChange={onInputChange}/>
    <div className="passwordInputDiv">
    <input type={showPassword ? 'text' : 'password'} className="passwordInput" placeholder='Password'  id='password' value={password} onChange={onInputChange} />
    <img className='showPassword' src={visibilityIcon} alt="showpassword"  onClick={() => setShowPassword((prev) => !prev)}/>
    </div>
    <Link to='/forgotpassword' className='forgotPasswordLink'>
      Forgot Password
    </Link>
    <div className="signUpBar">
      <p className="signUpText">
        Sign Up
      </p>
      <button className="signUpButton">
        <ArrowRightIcon fill='white' width='2.15rem' height='2.15rem'/>
      </button>
    </div>
  </form>
  {/* goggle oaut */}
  <Link to='/signin' className='registerLink'>
    Sign In Instead
  </Link>
  </main>
</div>
    </>
  )
}

export default Signup