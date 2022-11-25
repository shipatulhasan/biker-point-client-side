import React from 'react';
import formatDistanceToNowStrict from'date-fns/formatDistanceToNowStrict'
import Loader from '../../components/Spinner/Loader';

const ProductsCard = ({product}) => {
  const {image,title,originalprice,sellprice,condition,category,location,purchase_year,years_of_uses,description,post_date} = product


  const post_time = formatDistanceToNowStrict( new Date(post_date), {addSuffix: true})
    return (
        <div className="grid gap-10 lg:grid-cols-2 items-center border border-slate-200 shadow-lg shadow-slate-200 p-5">
            <div>
              <img
                className="object-contain w-full h-56 rounded sm:h-96"
                src={product?.image}
                alt=""
              />

            
          </div>

          {/*  */}
          <div className='space-y-5 md:space-y-10'>
          <p className=" text-sm text-right"> posted {post_time}</p>
          <div className='space-y-4 md:space-y-0 md:flex justify-between'>
          <div className="space-y-1">
                <h3 className="text-xl font-bold leading-snug sm:pr-8">{title}</h3>
                <p className="text-sm text-gray-600">Location: {location}</p>
				</div>
                <div className="md:text-right">
							<p className="text-lg font-semibold"> Resale Price: ${sellprice}</p>
							<p className="text-sm">Original price: ${originalprice}</p>
						</div>
          
            
            <hr className="mb-5 border-gray-300" />
          </div>
          <div>
            <h2 className='text-xl font-bold '>
                Description
            </h2>
        <p className="my-3 text-sm text-gray-900">
              {description?.length>250 ? description.slice(0,250) + '...' : description }
            </p>
            <div className='my-8'>

            <button
           
            className="px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer"
          >
            Book now
          </button>
            </div>
        </div>
          </div>

            </div>
    );
};

export default ProductsCard;