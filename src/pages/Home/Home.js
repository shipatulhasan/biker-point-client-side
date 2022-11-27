import React from 'react';
import { Link } from 'react-router-dom';
import CategorySection from '../shared/CategoriesSection/CategorySection';
import Slider from './Slider/Slider'

const Home = () => {
    return (
        <div>
            <Slider/>
            <div className='py-16 lg:py-20'>

            <CategorySection slice_range={{init:0,rest:3}} />
            <div className="text-center">
          <Link
            to="/categories"
            className=" px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none"
          >
            View All
          </Link>
        </div>
            </div>
        </div>
    );
};

export default Home;