import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import ProductsCard from './ProductsCard';
import {useCategories} from '../../hooks/useCategories'
import img from '../../assets/banner/motorcycle.jpg'
import { NavLink } from 'react-router-dom';


const SingleProduct = () => {

    const [categories,catLoading] = useCategories()

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
                            categories.map((cat,i)=><NavLink key={cat._id} to="/category/_id">
                            {({ isActive }) => (
                              <li
                                className={`${
                                  isActive ? "bg-red-500" : "text-black"
                                } w-full hover:bg-red-500 text-lg hover:text-white py-4 transition-colors duration-150 ease-linear font-semibold list-none  px-5 ${i===categories.length-1 ? 'border-b-0' :'border-b border-red-500'} uppercase tracking-wide`}
                              >{cat?.name}
                                    
                                
                              </li>
                            )}
                          </NavLink>)
                        }

                    </div>
                    <div className='md:col-span-4'>
                    <ProductsCard />
                    </div>

        
                </div>
        
          

        </div>
        </div>

  
            
        
      
    );
};

export default SingleProduct;