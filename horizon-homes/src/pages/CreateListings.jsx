/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'

const CreateListings = () => {
    const [geolocationEnabled, setGeolocationEnabled] = useState()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        type: 'rent',
        name:'',
        bedrooms:'',
        bathrooms:'',
        parking:'',
        furnished:'',
        address:'',
        offer: false,
        regularPrice: '',
        discountedPrice: '',
        images: {},
        latitude:0,
        longitude:0
    })

    const auth = getAuth()
    const navigate = useNavigate()
    const isMounted = useRef(true)

useEffect(() => {
 if (isMounted) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setFormData({...formData, userRef: user.uid})
        }else {
            navigate('/signin')
        }
    })
 }
return () => {
    isMounted.current = false
}
 
}, [isMounted])

if (loading) { return  <Spinner/>}




  return (
    <div>CreateListings</div>
  )
}

export default CreateListings