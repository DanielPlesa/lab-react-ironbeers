import React from 'react'
import { NavLink } from 'react-router-dom'

function Home(props) {
  return (
    <div>
  
     <li> <NavLink to="/beers">Beers</NavLink></li>
     
     <li> <NavLink to="/random-beer">Random Beer</NavLink></li>
   
     <li>  <NavLink to="/new-beer">New Beer</NavLink>  </li>
    </div>
  )
}

export default Home
