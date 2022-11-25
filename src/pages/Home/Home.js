import React from 'react';
import CategorySection from '../shared/CategoriesSection/CategorySection';
import Slider from './Slider/Slider'

const Home = () => {
    return (
        <div>
            <Slider/>
            <div className='py-16 lg:py-20'>

            <CategorySection />
            </div>
        </div>
    );
};

export default Home;