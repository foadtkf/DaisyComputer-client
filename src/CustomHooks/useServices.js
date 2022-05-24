import { useEffect, useState } from "react"

const useServices=(six)=>{
    const [services,setServices]=useState([])
    useEffect( ()=>{
        let url=`http://localhost:5000/products${six}`
        if(!six)
        url=`http://localhost:5000/products`
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return [services,setServices]
}
export default useServices;