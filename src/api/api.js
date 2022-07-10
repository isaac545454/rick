import axios from "axios";
import {useEffect } from 'react'

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character"
    
})
export default api
