import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [role,setRole] = useState('')
    const [roleLoading,setRoleLoading] = useState(true)

    useEffect(()=>{
        if(email){
            fetch(`${process.env.REACT_APP_api}/user/${email}`)  
            .then(res=>res.json())
            .then(data=>{
                setRole(data?.role)
                setRoleLoading(false)
               
            })
        }
    },[email])
    return [role,roleLoading]
};

export default useRole;