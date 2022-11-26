import React, {useContext} from 'react';
import Loader from '../../../../components/Spinner/Loader';
import { useQuery } from '@tanstack/react-query'
import {AuthContext} from '../../../../contexts/AuthProvider'
import TableRow from './TableRow';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const {user} = useContext(AuthContext)
    const { isLoading, data:products,refetch } = useQuery({
        queryKey: ['product',user?.email],
        queryFn: async()=>{
            const res = await fetch(`${process.env.REACT_APP_api}/product?email=${user?.email}`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('biker-point-token')}`
                }
            })
            const data = await res.json()
            return data
        }
      })


      const handleDelete = (product)=>{

        const confirmDelete = window.confirm(`would you like to delete ${product.name}`)
        if(confirmDelete){

          fetch(`${process.env.REACT_APP_api}/product/${product?._id}`,{
            method:'delete'

          })
          .then(res=>res.json())
          .then(data=>{
            toast.success('product deleted successfully')
            refetch()
            console.log(data)
          })

        }

      }



    return (
        <div className='container mx-auto px-4 sm:px-8 py-8'>
          
            <div className='px-4 sm:px-8 py-4 overflow-x-auto'>
              {
                products?.length===0 ? <p className='text-black text-2xl font-bold'>No product added yet. wanna add new product? <Link to='/dashboard/add-product' className='text-red-600 font-semibold '>Click here</Link></p>
                 :
                 <div className='min-w-full shadow rounded-lg overflow-x-auto'>
                 {
                   isLoading ? <Loader /> : <>
                    <table className='min-w-full leading-normal'>
                   <thead className='bg-red-200'>
                     <tr>
                     <th className='px-5 py-3 border-b border-gray-200 text-left'>No</th>
                       <th className='px-5 py-3 border-b border-gray-200 '></th>
                       <th
                         scope='col'
                         className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                       >
                         Title
                       </th>
                       
                       <th
                         scope='col'
                         className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                       >
                         Price
                       </th>
                       <th
                         scope='col'
                         className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                       >
                         Category
                       </th>
                       <th
                         scope='col'
                         className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                       >
                         Condition
                       </th>
                       <th
                         scope='col'
                         className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                       >
                         Status
                       </th>
                       <th
                         scope='col'
                         className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                       >
                         Action
                       </th>
                     </tr>
                   </thead>
                  
                   <tbody>
                       {
                         products.map((product,i)=><TableRow key={product._id} product={product} index={i} handleDelete={handleDelete} />)
                       }
                  
                   </tbody>
                 </table>
                   </>
                 }
                
               </div>
              }
             
            </div>
          </div>
     
    );
};

export default ManageProducts;