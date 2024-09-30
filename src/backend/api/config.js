import axios from "axios";


const blogFetch = axios.create({
    baseURL: 'https://contato-kabum-cktcykm6m-akcios-projects.vercel.app', // configurando URL global
    headers:{
        'Content-Type': 'application/json' // configurando header padrão
    }
})

export default blogFetch