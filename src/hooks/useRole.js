import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [role,setRole] = useState('')
    const [verification,setVerification] = useState(false)
    const [roleLoading,setRoleLoading] = useState(true)

    useEffect(()=>{
        if(email){
            fetch(`${process.env.REACT_APP_api}/user/${email}`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('biker-point-token')}`
                }
            })  
            .then(res=>res.json())
            .then(data=>{
                setRole(data?.role)
                setVerification(data?.verified)
                setRoleLoading(false)
               
            })
        }
    },[email])
    return {role,roleLoading,verification}
};

export default useRole;