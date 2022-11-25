import React from 'react';

import ProductForm from './ProductForm';



const AddProduct = () => {
    
    return (
       <div>
           <h1 className='text-3xl font-bold text-gray-800 py-8 text-center'>
        Add Product
      </h1>
      <ProductForm />
       </div>
    );
};

export default AddProduct;