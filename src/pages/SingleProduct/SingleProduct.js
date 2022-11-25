import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ProductsCard from './ProductsCard';
import {useCategories} from '../../hooks/useCategories'
import img from '../../assets/banner/motorcycle.jpg'
import { NavLink, useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../components/Spinner/Loader';


const SingleProduct = () => {

    const [categories,catLoading] = useCategories()
    const products = useLoaderData()
    const navigation = useNavigation()
    if(navigation.state === "loading" || catLoading){
      return <Loader height={'min-h-[60vh]'} />
    }

    return (

        <div>
            <PageHeader headerInfo={{img:img,title:'category'}} />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:py-20">
                <div className='grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-5 '>
                    <div className='bg-white border border-slate-200 shadow-lg shadow-slate-300 '>
                    <h2 className='text-2xl font-semibold p-5 '>
                    Other Categories
                </h2>
                        {
                            categories.map((cat,i)=><NavLink key={cat._id} to ={`/category/${cat._id}`}>
                            {({ isActive }) => (
                              <li
                                className={`${
                                  isActive ? "bg-red-500 text-white" : "text-black"
                                } w-full hover:bg-red-500 text-lg hover:text-white py-4 transition-colors duration-150 ease-linear font-semibold list-none  px-5 ${i===categories.length-1 ? 'border-b-0' :'border-b border-red-500'} uppercase tracking-wide`}
                              >{cat?.name}
                                    
                                
                              </li>
                            )}
                          </NavLink>)
                        }

                    </div>
                    <div className='md:col-span-4 space-y-5 md:space-y-10'>
                      {
                        products.map(product=><ProductsCard key={product._id} product={product} />)
                      }
                    
                    </div>

        
                </div>
        
          

        </div>
        </div>

  
            
        
      
    );
};

export default SingleProduct;