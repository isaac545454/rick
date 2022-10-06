import Api from '../api/api'
import { useState, useEffect } from 'react'
import {Link } from "react-router-dom"
import '../App.css'

const card = ()=>{
    const [personagens, setpersonagens] = useState([])

    const info = async ()=>{
    const result = await Api.get("")
    const data =await result.data.results
    console.log(data)
    setpersonagens(data)
    console.log(personagens)
    }
    const person= (personagen)=>{
        
    }


    useEffect(()=>{
        info()
    }, [])

   return(
    <div className="container-card">
        {personagens.length === 0 && <p>carregando</p>}
        {personagens.length > 0 && personagens.map((personagen)=>
        <div key={personagen.id} className="card">
             <img src={personagen.image} alt={personagen.name} />
             <p>{personagen.name}</p>
             
             <button><Link to={`${personagen.id}`} >detalhes </Link></button>

        </div>
        )}

        
    </div>
   )
}

export default  card
