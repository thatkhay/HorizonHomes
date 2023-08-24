import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import {doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore'
import { db } from "../firebase.config"
import {toast} from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'
import { useLocation, useNavigate } from "react-router-dom"

function Oauth() {
const navigate = useNavigate()
const location = useLocation()

const onGoogleIconClick = async () => {
try {
   const auth = getAuth()
   const provider = new GoogleAuthProvider()
   const result = await signInWithPopup(auth, provider) 
   const user = result.user

//check if user exist
   const docRef = doc(db, 'users', user.uid)
   const docSnap = await getDoc(docRef)

   //if user dont exist , create new user
   if (!docSnap.exists()) {
    await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        timestamp: serverTimestamp()
    })
   }
   navigate('/')
} catch (error) {
   console.log(error);
    toast.error('Somthing went wrong, could not autorize with Google')

}
}

  return (
    <div className="socialLogin">
        <p> Sign {location.pathname === '/signup' ? 'up' : 'in'} with</p>
        <button className="socialIconDiv" onClick={onGoogleIconClick}>
            <img className="socialIconImg" src={googleIcon} alt="google" />
        </button>
    </div>
  )
}

export default Oauth