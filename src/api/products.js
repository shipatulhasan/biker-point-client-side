export const setProductToDb = async(product)=>{
   const res = await fetch(`${process.env.REACT_APP_api}/product`,{
        method:'post',
        headers:{
            'content-type':'application/json',
            authorization:`Bearer ${localStorage.getItem('biker-point-token')}`
        },
        body:JSON.stringify(product)
   })
   const data = res.json()
   return data
} 

export const setReportedProduct = async(product)=>{
    const res = await fetch(`${process.env.REACT_APP_api}/product/${product?._id}`,{
        method:'put',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(product)
   })
   const data = res.json()
   return data
}