import React from 'react'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const pathMathesRoute = (route) => {
        if (route === location.pathname) {
            return true  
        }
    }

  return (
    <footer className='navbar'>
        <nav className="navbarNav">
            <ul className="navbarListItems">
                <li className="navbarListItem" onClick={() => navigate ('/')}>
                    <ExploreIcon  fill={pathMathesRoute('/') ? 'green' : 'black'} width='36px' height='36px'/>
                    <p className={pathMathesRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
                </li>
                <li className="navbarListItem" onClick={() => navigate ('/offers')}>
                    <OfferIcon  fill={pathMathesRoute('/offers') ? 'green' : 'black'} width='36px' height='36px'/>
                    <p className={pathMathesRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offer</p>
                </li>
                <li className="navbarListItem" onClick={() => navigate ('/profile')}>
                    <PersonOutlineIcon fill={pathMathesRoute('/profile') ? 'green' : 'black'} width='36px' height='36px'/>
                    <p className={pathMathesRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
                </li>
            </ul>
        </nav>
        
    </footer >
  )
}

export default NavBar