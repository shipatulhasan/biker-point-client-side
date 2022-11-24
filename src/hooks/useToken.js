import { useEffect, useState } from 'react';

export const useToken = (user) => {

    const [token,setToken] = useState('')

    useEffect(()=>{
        if(user){
            fetch(`${process.env.REACT_APP_api}/user/${user?.email}`,{
                method:'put',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.token){
                    localStorage.setItem('biker-point-token',data.token)
                    setToken(data.token)
                }
            })
        }
    },[user,token])
       

    return [token]
};
