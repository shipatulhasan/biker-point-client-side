import React from 'react';

const BlogCard = ({blog}) => {
    const {question,ans} = blog
    return (
        <div className='border border-slate-200 shadow-lg shadow-slate-200 p-5'>
             <div className="space-y-2">
                <h3 className="text-xl font-bold leading-snug text-red-600 sm:pr-8">{question}</h3>
                <hr className='h-2 w-10  border-1 border-black' />
                <p className="text-sm text-gray-600">Answer: {ans}</p>
				</div>
            
        </div>
    );
};

export default BlogCard;