import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import api from "../api/api"
import '../App.css'
import './person.css'



const person = ()=>{
    const params = useParams()
    const [person, setPerson] = useState(null)


    const info = async ()=>{

     const URL = await api.get(params.id)
     
     setPerson(URL.data)
     
    }
    useEffect(()=>{
        
        info()
    })
    return(
          
        <div>
       
        <div className="detalhes">
        {person != null && (<div className="card">
             <img src={person.image} />
             <h1>{person.name}</h1>
             <h2>species:{person.species}</h2>
             <h2>status: {person.status}</h2>
             <h2>gender: {person.gender}</h2>
           </div>)}
        </div>
    </div>)
}

    
        
export default person
