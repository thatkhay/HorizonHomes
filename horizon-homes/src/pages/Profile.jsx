import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'

const Profile = () => {
  const [user, setUser] = useState(null)

  const auth = getAuth()
  useEffect(() => {
console.log(auth.currentUser);
setUser(auth.currentUser)
  }, [])
  return (
    user ? <h1>{user.displayName}</h1> :  'Not logged in'
  )
}

export default Profile