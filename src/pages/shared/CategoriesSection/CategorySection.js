import React from 'react';

import { useCategories } from '../../../hooks/useCategories';
import Loader from '../../../components/Spinner/Loader'
import CategoryCard from './CategoryCard';

const CategorySection = ({slice_range}) => {
  const [categories,catLoading] = useCategories()
  const {init,rest} = slice_range

    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black md:text-5xl md:mx-auto">
            Categories
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            You can choose your favourite bike from here. Click on category to check that your favorite one is available or not. Don't waste your time.
          </p>
        </div>
        {
          catLoading ? <Loader height={'min-h-[60vh]'} /> : <div className="grid gap-5 py-2 mb-8 md:grid-cols-3">

          {
            categories.slice(init,rest).map(category=><CategoryCard key={category._id} category={category} />)
          }
      
        </div>
        }
        
       
      </div>
    );
};

export default CategorySection;
