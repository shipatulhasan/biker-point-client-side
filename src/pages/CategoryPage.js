import React from 'react';
import PageHeader from '../components/PageHeader';
import img from '../assets/banner/motorcycle.jpg'
import CategorySection from './shared/CategoriesSection/CategorySection';

const CategoryPage = () => {
    return (
        <div>
            <PageHeader headerInfo={{img,title:'Choose your own preference'}} />
            <div className='py-16 lg:py-20'>
            <CategorySection slice_range={{}} />
            </div>
        </div>
    );
};

export default CategoryPage;