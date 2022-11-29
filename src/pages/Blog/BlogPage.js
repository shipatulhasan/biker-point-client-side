import React from 'react';
import { Helmet } from 'react-helmet-async';
import blog from '../../assets/banner/Blog.jpg'
import PageHeader from '../../components/PageHeader'
import BlogCard from './BlogCard';
import {blogs} from './blogs'

const BlogPage = () => {
    return (
        <div>
            <Helmet>
        <title>Blog - Biker Point</title>
      </Helmet>
            <PageHeader headerInfo={{img:blog,title:'Blogs'}} />
            <div className='py-16 lg:py-20 w-9/12 mx-auto space-y-8'>
                {
                    blogs.map((blog,i)=><BlogCard key={i} blog={blog}  />)
                }
            
            </div>
            
        </div>
    );
};

export default BlogPage;