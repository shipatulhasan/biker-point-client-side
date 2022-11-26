import { useQuery } from '@tanstack/react-query';

export const useUserData = (role) => {
 

    const {data:users,refetch,isLoading} = useQuery({
        queryKey:['users',role],
        queryFn:async()=>{
            if(role){

                const res= await fetch(`${process.env.REACT_APP_api}/user?role=${role}`,{
                    headers:{
                        authorization:`Bearer ${localStorage.getItem('biker-point-token')}`
                    }
                })
                const data = await res.json()
                return data
        }

            }
               
    })
 
   
    return {users,refetch,isLoading}
};