import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Beers(props) {
    
  return (
    <div>
      <Header/>
      {props.beers?.map((beer)=>{
        // console.log(beer)
        return(
            <div>
              
                 <img src={beer.image_url}/>
             <h3>{beer.name}</h3>
             <h3>{beer.tagline}</h3>
             <h3>Contributed by: {beer.contributed_by}</h3>
             <Link to={`/beers/${beer._id}`}>Details</Link>
            </div>
        )
      })}
    </div>
  )
}

export default Beers
