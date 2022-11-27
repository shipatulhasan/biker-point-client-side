import { useEffect, useState } from 'react';

export const useToken = (email) => {

    const [token,setToken] = useState('')

    useEffect(()=>{
        if(email){
            fetch(`${process.env.REACT_APP_api}/jwt?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                if(data?.token){
                    localStorage.setItem('biker-point-token',data.token)
                    setToken(data.token)
                }
            })
        }
    },[email])
       

    return [token]
};
