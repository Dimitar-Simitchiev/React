import { useEffect, useState } from "react";
import CarsCard from "./CarsCard"
const url='http://localhost:3030/jsonstore/mercedes'
export default function Morecars() {
  const[cars,setCars]=useState([])
  let result=''
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(x=>Object.values(x))
    .then(result=>{
     setCars(result)
  

    })
    
  },[])
    
     
    
  
    return ( 
    <div className="App">
      
     {cars.map(x=><CarsCard cars={x}/>)}
    
    </div>
    );
  }
 // {cars.map(x=><CarsCard cars={x}/>)}

    
   
  