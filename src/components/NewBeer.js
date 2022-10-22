import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from "react"

function NewBeer(props) {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState("")
    const [contributed_by, setContributedBy] = useState("")


    const navigate= useNavigate();

    const createBeer = (e) => {
        e.preventDefault();
    

  
    const newBeer= {
name:name,
tagline: tagline,
description:description,
first_brewed: first_brewed,
brewers_tips: brewers_tips,
attenuation_level: attenuation_level,
contributed_by: contributed_by,
    }
    // callbackToCreate(newBeer)
    // setName("")
    // setTagline("")
    // setDescription("")
    // setFirstBrewed("")
    // setBrewersTips("")
    // setAttenuationLevel("")
    // setContributedBy("")

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {newBeer})
    .then(response=> {
        console.log(response)
        // props.callbackToFetchBeers();
        // navigate("/beers")
    })
    .catch(e => console.log("err getting beers", e))
    }
  return (
    <div>
      <form onSubmit={createBeer}>
        <p>Add New Beer</p>

<label>Name:</label>
      <input value={name} type ="text" onChange = {(e)=>{
    setName(e.target.value)}}/>

<label>Tagline:</label>
      <input value={tagline} type ="text" onChange = {(e)=>{
    setName(e.target.value)
  }     }
      />

<label>Description:</label>
      <input value={description} type ="text" onChange = {(e)=>{
    setName(e.target.value)
  }     }
      />

<label>First brewed:</label>
      <input value={first_brewed} type ="text" onChange = {(e)=>{
    setName(e.target.value)
  }     }
      />

<label>Brewers tips:</label>
      <input value={brewers_tips} type ="text" onChange = {(e)=>{
    setName(e.target.value)
  }     }
      />

<label>Attenuation_level:</label>
      <input value={attenuation_level} type ="number" onChange = {(e)=>{
    setName(e.target.value)
  }     }
      />

<label>Contributed_by:</label>
      <input value={contributed_by} type ="text" onChange = {(e)=>{
    setName(e.target.value)
  }     }
      />

<button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewBeer
