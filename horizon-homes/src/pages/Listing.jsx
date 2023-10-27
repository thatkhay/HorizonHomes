import { getAuth } from 'firebase/auth'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Listing = () => {
const [listing, setListing] = useState(null)
const [loading, setLoading] = useState(true)
const [shareCopiedLink, setShareCopiedLink] = useState(false)

const navigate = useNavigate()
const params = useParams()
const auth = getAuth()

useEffect(() => {
    const fetchListing = async () => {
        const docRef = doc(db, 'listings', params.listingId)
        const docSnap = await getDoc(docRef)

if(docSnap.exists()) {
    console.log(docSnap.data());
    setListing(docSnap.data())
    setLoading(false)
}


    }
    fetchListing()
}, [navigate, params.listingId])

  return (
    <div>Listing</div>
  )
}

export default Listing