import { useEffect, useState } from "react"

export const useCategories = ()=>{
    const [categories,setCategories] = useState([])
    const [catLoading,setCatLoading] = useState(true)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_api}/categories`)
        .then(res=>res.json())
        .then(data=>{
            setCategories(data)
            setCatLoading(false)
        })
    },[])

    return [categories,catLoading]
}