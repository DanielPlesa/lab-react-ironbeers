import {useState, useEffect} from "react"
import axios from 'axios';
import './App.css';

import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Beers from "./components/Beers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {

//  const newBeerArr = [...beers];
//  const [beerElem, setBeerElem]= useState (newBeerArr);

// const createBeer =(newBeer) => {
//   setBeerElem((prevBeerElem)=> {
//     const copyBeer = [newBeer, ...prevBeerElem];
//     return copyBeer
//   })
// }  

const[beersArr, setBeersArr] = useState()
useEffect(()=>{
  fetchBeers()
},[])

const fetchBeers=()=>{
  axios.get("https://ih-beers-api2.herokuapp.com/beers")

  .then(response =>{
    setBeersArr(response.data)
  })
  .catch(e => console.log("error getting beers from API", e))
}

  return (
    <div className="App">
      
  <Routes>

  <Route path ="/" element ={ <Home/>}/>
  <Route path ="/beers" element ={ <Beers beers={beersArr}/>}/>
  <Route path ="/beers/:beerId" element ={ <SingleBeer />}/>
  <Route path ="/random-beer" element ={ <RandomBeer />}/>
  <Route path ="/new-beer" element ={ <NewBeer />}/>
    
  
  </Routes>
    
    
    </div>
  );
}

export default App;
