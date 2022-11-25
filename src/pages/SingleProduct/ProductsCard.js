import React from 'react';

const ProductsCard = () => {
    return (
        <div className="grid gap-10 lg:grid-cols-2 items-center border border-slate-200 shadow-xl shadow-slate-300 p-5">
            <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>

          {/*  */}
          <div className='space-y-5 md:space-y-10'>
          <div className='space-y-4 md:space-y-0 md:flex justify-between'>
          <div className="space-y-1">
                <h3 className="text-xl font-bold leading-snug sm:pr-8">Gixxer monotone 150</h3>
                <p className="text-sm text-gray-600">Location: Chittagong, Bangladesh</p>
				</div>
                <div className="md:text-right">
							<p className="text-lg font-semibold"> Resale Price: $59.99</p>
							<p className="text-sm">Original price: $75.50</p>
						</div>
          
            
            <hr className="mb-5 border-gray-300" />
          </div>
          <div>
            <h2 className='text-xl font-bold '>
                Description
            </h2>
        <p className="my-3 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem totam rem aperiam, eaque ipsa quae explicabo.
            </p>
            <div className='my-8'>

            <buton
           
            className="px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer"
          >
            Book now
          </buton>
            </div>
        </div>
          </div>

            </div>
    );
};

export default ProductsCard;