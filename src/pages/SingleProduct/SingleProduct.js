import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ProductsCard from './ProductsCard';
import {useCategories} from '../../hooks/useCategories'
import { useLoaderData, useLocation } from 'react-router-dom';
import Loader from '../../components/Spinner/Loader';
import CategorySidebar from './CategorySidebar';

import toast from 'react-hot-toast';
import { setReportedProduct } from '../../api/products';


const SingleProduct = () => {
  
  const [categories,catLoading] = useCategories()
  
     const products = useLoaderData()
    const {state} = useLocation()
    const [processing,setProcessing] = useState(false)

 

    const handleReport=(product)=>{
      setProcessing(true)
      setReportedProduct(product)
      .then(data=>{
        if(data.modifiedCount>0){
          toast.success('You reported this product')
          setProcessing(false)     
        }

      })
      .catch(err=>console.error(err.message))
    }
    if(catLoading){
      return <Loader height={'min-h-[60vh]'} />
    }
    return (

        <div>
            <PageHeader headerInfo={ {img:state?.img,title:state?.name} } />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:py-20">
                <div className='grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-5 '>
                    <div className='bg-white border border-slate-200 shadow-lg shadow-slate-300 '>
                    <h2 className='text-2xl font-semibold p-5 '>
                    Other Categories
                </h2>
                        {
                            categories.map((cat,i)=><CategorySidebar key={cat._id} cat={cat} lastItem = {i===categories.length-1} />)
                        }

                    </div>
                    <div className='md:col-span-4 space-y-8 md:space-y-10'>
                      {
                        products.length===0 && <h2 className='text-center text-2xl font-semibold p-5 '>
                        No Products Available
                    </h2>
                      }
                      {
                        products.map(product=><ProductsCard key={product._id} isLoading={processing}  product={product} handleReport={handleReport} />)
                      }
                    
                    </div>

        
                </div>
        
          

        </div>
        </div>

  
            
        
      
    );
};

export default SingleProduct;