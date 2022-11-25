import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ProductsCard from './ProductsCard';
import {useCategories} from '../../hooks/useCategories'
import img from '../../assets/banner/motorcycle.jpg'
import { NavLink, useLoaderData, useLocation, useNavigation } from 'react-router-dom';
import Loader from '../../components/Spinner/Loader';
import CategorySidebar from './CategorySidebar';


const SingleProduct = () => {

    const [categories,catLoading] = useCategories()
    const products = useLoaderData()
    const navigation = useNavigation()
    const {state} = useLocation()


    if(navigation.state === "loading" || catLoading){
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
                    <div className='md:col-span-4 space-y-5 md:space-y-10'>
                      {
                        products.length===0 && <h2 className='text-center text-2xl font-semibold p-5 '>
                        No Products Available
                    </h2>
                      }
                      {
                        products.map(product=><ProductsCard key={product._id} product={product}  />)
                      }
                    
                    </div>

        
                </div>
        
          

        </div>
        </div>

  
            
        
      
    );
};

export default SingleProduct;