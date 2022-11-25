export const setProductToDb = async(product)=>{
   const res = await fetch(`${process.env.REACT_APP_api}/product`,{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(product)
   })
   const data = res.json()
   return data
} 