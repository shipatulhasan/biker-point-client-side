import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/banner/404-error-page-not-found.jpg'

const ErrorPage = () => {
    const error = useRouteError();
  
    return (
       
<section className="flex items-center h-full min-h-screen p-16 dark:bg-gray-900 dark:text-gray-100 bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${img})`}}>
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>{error.status}
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<div className='text-center'>
            <Link to='/' className='text-red-700 bg-red-200 rounded px-8 py-3 hover:cursor-pointer gap-2 font-bold'>Back to homepage</Link>
            </div>
		</div>
	</div>
</section>
    );
};

export default ErrorPage;
