import React, { useEffect, useState } from 'react'
import { getAuth , updateProfile} from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { updateDoc , doc} from 'firebase/firestore' 
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'

const Profile = () => {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [emailEdit, setEmailEdit] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
const { name, email } = formData  
const navigate = useNavigate()
  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

 

const onMouseEnter = () => {
  setEmailEdit(true)
  toast.error('Email can not be Edited')
}
  const onSubmit = async () => {
    try{
if (auth.currentUser.displayName !== name) {
  // update display name in fireBase
  await updateProfile(auth.currentUser, {
    displayName: name
  })

  // update in firestore
  const userRef = doc(db, 'users', auth.currentUser.uid)
  await updateDoc(userRef, {
    name
  })
}
    }catch (error){
toast.error('Could not update user Profile')
    }
  }

  const onChange = (e) => {
    setFormData((prev) => ({
    ...prev,
    [e.target.id]: e.target.value,
    }))
  }
  
  return (
<div className='profile'>
<header className="profileHeader">
  <p className="pageHeader">My Profile</p>
  <button type='button' className='logOut' onClick={onLogout}>logout</button>
</header>
<main>
  <div className="profileDetailsHeader">
    <p className="profileDetailsText">Personal Deatails</p>
    <p className="changePersonalDetails" onClick={() => {
      changeDetails && onSubmit()
      setChangeDetails((prev) => !prev)
    }}>
      {changeDetails ? 'done' : 'change'}
    </p>
  </div>
  <div className="profileCard">
    <form action="">
      <input type="text"  id='name' className={!changeDetails ? 'profileName' : 'profileNameActive'} disabled={!changeDetails} value={name} onChange={onChange} style={{ padding: '.2rem' }} />
      <input type="text"  id='email' className={!changeDetails ? 'profileEmail' : 'profileEmailActive'} disabled={!changeDetails} value={email} style={{ cursor: 'pointer', padding: '.2rem' }}  onMouseDown={onMouseEnter}/>
    </form>
  </div>
  <Link to='/createlisting' className='createListing'>
  <img src={homeIcon} alt="home" />
  <p>Sell or rent your home</p>
  <img src={arrowRight} alt="arrow right" />
  </Link>
</main>
</div>
  )
}

export default Profile