import { collection, getDocs, query, where, orderBy, limit, startAfter, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from '../components/Spinner';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListingItem from "../components/ListingItem";

const Category = () => {
    const [listings, setListinggs] = useState(null);
    const [loading, setLoading] = useState(null);

const params = useParams();
useEffect(() => {
    const fetchListings = async () => {
try {
    //get refrence
    const listingRef = collection(db, 'listings');

    //create a query
    const q = query(listingRef,where('type','==',params.categoryName), orderBy('timestamp', 'desc'), limit(10));

    //execute query
    const querySnap = await getDocs(q)

    const listings = []
    querySnap.forEach((doc) => {
         console.log(doc.data());
        return listings.push({
            id: doc.id,
            data: doc.data(),
        })
    })
    setListinggs(listings)
    setLoading(false)
} catch (error) {
    console.log(error);
    toast.error('Error fetching listings');
  
}
    }

    fetchListings()

}, [params.categoryName])

  


  return (
    <div className="category">
        <header>
        <p className="pageHeader">
        {params.categoryName === 'rent' ? 'Places For Rent' : 'Places For Sale'}
    </p>
    </header>
    {loading ? <Spinner/> : listings && listings.length > 0 ? 
    <>
    <main>
        <ul className="categoryListings">
            {listings.map((listing) => (
                <ListingItem listing={listing.data} id={listing.id} key={listing.id}/>
            ))}
        </ul>
    </main>
    </> 
    : <p>No listings for {params.categoryName}</p>}
    </div>
    
  )
}

export default Category