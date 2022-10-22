import axios from 'axios';
import React from 'react'
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';
import Header from './Header';

function SingleBeer() {
    const {beerId}= useParams();
    const [details, setDetails]= useState({});

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)

            .then(response => {
                setDetails(response.data)
            })
            .catch(e => console.log("err getting beers", e))
    }, [])

  return (
    <div>

      <Header/>
     
       <img src={details.image_url}/>
             <h3>{details.name}</h3>
             <h4>{details.tagline}</h4>
             <p>First brewed: {details.first_brewed}</p>
             <p>Attenuation level: {details.attenuation_level}</p>
             <p>{details.description}</p>
             <p>Contributed by: {details.contributed_by}</p>
    </div>
  )
}

export default SingleBeer
