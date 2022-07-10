import './navbar.css'
import {Link, useSearchParams, useNavigate } from 'react-router-dom'
import {useState, useEffect} from "react"

const navbar = ()=>{
    const [search, setSearch] = useState("")
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!search) return
        navigate(`/search?q=${search}`)
        setSearch("")
    }
    
    
    useEffect(()=>{
    
    }, [])

    return(
        <div className="navbar">
            <h1><Link to="/">rick and morty</Link> </h1>
            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="name de personagem" 
            onChange={(e)=>setSearch(e.target.value)}
            value={search} />
            <button type="submit">busca</button>
            </form>
        </div>
    )
}
export default navbar