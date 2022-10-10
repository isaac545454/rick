import Api from '../api/api'
import { useState, useEffect } from 'react'
import {Link } from "react-router-dom"
import '../App.css'
import {  toast } from 'react-toastify';

const card = ()=>{
    const [personagens, setpersonagens] = useState([])
    const [page, setPage]= useState(1)

    const info = async ()=>{
    const result = await Api.get(`?page=${page}`)
    const data =await result.data.results
    console.log(data)
    setpersonagens(data)
    console.log(personagens)
    }
    const anterior = ()=>{
        if(page === 1){
            toast.warn("essa é a primeira pagina")
        }
        setPage(page - 1)
    }
    
    const proximo = ()=>{
        setPage(page + 1)
    }


    useEffect(()=>{
        info()
    }, [page])

   return(
    <>
    <div className="containerButton">
    <button onClick={anterior}>anterior</button>
    <button onClick={proximo}>proximo</button>
    </div>
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

    </>
   )
}

export default  card
