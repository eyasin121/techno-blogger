import React, { useState } from 'react';
import SearchBlog from './SearchBlog';
import { Link } from 'react-router-dom';
import { useFatchBlogsQuery } from '../../redux/features/blogs/blogsApi';

// Function to generate SEO-friendly URL
const generateSeoFriendlyUrl = (title) => {
  return encodeURIComponent(title.replace(/\s+/g, '-'));
};

const Blogs = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState({ search: '', category: '' });

  // Get data from API
  const { data: blogs = [], error, isLoading } = useFatchBlogsQuery(query);
  console.log(blogs);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => setQuery({ search, category });

  return (
    <div className='mt-5 container mx-auto'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>

        {blogs.map((blog) => {
          // Generate SEO-friendly URL for the blog title
          const seoFriendlyUrl = generateSeoFriendlyUrl(blog.title);
          return (
            <Link
              to={`/blog/${seoFriendlyUrl}`}  // Use the SEO-friendly URL
              key={blog._id}
              className=' dark:shadow-slate-400 lg:shadow-md shadow-sm flex lg:flex-col sm:flex-row bg-slate-50 dark:bg-slate-950 '
            >
              <div className='size-24 lg:size-80 ' >
                <img src={blog.coverImg} alt="" className=' lg:m-3 w-full h-full rounded-md' />
              </div>
              <div className='lg:m-3 sm:m-2 '>
                <h4 className='font-medium text-lg lg:text-3xl px-2 py- text-black dark:text-white'>{blog.title}</h4>

              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
