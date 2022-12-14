import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loader from '../../../../components/Spinner/Loader';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet-async';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);




const Payment = () => {

    
    const {id} = useParams()

    const {data:booking,isLoading} = useQuery({
        queryKey:['booking',id],
        queryFn:()=>fetch(`${process.env.REACT_APP_api}/booking/${id}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('biker-point-token')}`
            }
        })
        .then(res=>res.json())
    })

    
    if(isLoading){
        return <Loader />
    }
    
    const {image,product_title,price} = booking
    return (
        <div className='flex h-full min-h-[80vh] items-center justify-center'>
             <Helmet>
        <title>Checkout - Biker Point</title>
      </Helmet>
             <div className="grid gap-10 lg:grid-cols-2 items-center border border-slate-200 shadow-lg shadow-slate-200 p-5">
            <div>
            
              <img
                className="object-contain w-full h-56 rounded sm:h-96"
                src={image}
                alt=""
              />

            
          </div>
          
          <div className='space-y-5 '>
              <h1 className='text-5xl font-bold text-red-600 leading-snug sm:pr-8'>
                  Checkout
              </h1>
              <div>
              <h3 className='text-xl py-2'>
             Product name: <span className="text-xl font-bold leading-snug sm:pr-8">{product_title}</span> </h3>
            <p className='text-xl py-2'>
                Price: <span className='font-bold'>${price}</span>
            </p>

              </div>
         
            <hr className="my-5 border-gray-300" />

            <div className='w-96 mt-10'>
            <h2 className="text-center text-lg font-semibold mb-10">please provide your credit card information</h2>
        <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking} />
            </Elements> 
            </div> 
          </div>

        </div>
        </div>
    );
};

export default Payment;