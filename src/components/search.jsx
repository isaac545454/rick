import Navbar from './navbar'
import {useEffect, useState} from 'react'
import {useSearchParams, Link} from 'react-router-dom'
import api from '../api/api'


const search = ()=>{
    const [searchParams ] = useSearchParams()
    const  query = searchParams.get("q")
    const [personagens, setPersonagens] = useState([])

    const info = async (url)=>{
        const URL =await fetch(url)
        const data = await URL.json()
        if(URL){
        setPersonagens(data.results)
        console.log(data);
        }
    }

    useEffect(()=>{
        const link = `https://rickandmortyapi.com/api/character/?page=1&name=${query}`       
        info(link)
        
    }, [query])


    return(<div>
        <Navbar />
         
            <div className="container-card">
                {personagens.length === 0 && <p>carregando</p>}
                {personagens.length > 0 && personagens.map((personagen)=>
                <div key={personagen.id} className="card">
                <img src={personagen.image} alt={personagen.name} />
                <p>{personagen.name}</p>
             
             <button><Link to={`/${personagen.id}`} >detalhes </Link></button>

        </div>
        )}

        
            </div>
   
    </div>)
}
export default search