import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFatchBlogsQuery, useDeleteBlogMutation } from '../../../redux/features/blogs/blogsApi';

const Managepost = () => {
    const [query, setQuery] = useState({ search: '', category: '' });
    const { data: blogs = [], isLoading, isError } = useFatchBlogsQuery(query);



    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error loading blogs. Please try again later.</h1>}
            {!isLoading && !isError && blogs.length === 0 && <h1>No blogs found.</h1>}
            <div>
                <section className="py-1 bg-blueGray-50 w-full">
                    <div className="w-full  mb-5 px-3 mx-auto">
                        <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-slate-900 w-full mb-2 shadow-lg rounded">
                            <div className="rounded-t mb-0 px-3 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-3 max-w-full flex-grow flex-1">
                                        <h3 className="font-semibold text-base text-blueGray-700 text-[#ff4221]">All Blogs</h3>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="block w-full ">
                                <table className="items-center bg-transparent w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-5 text-[#ff4221] bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                No.
                                            </th>
                                            <th className="px-5 text-[#ff4221] bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Blog Title
                                            </th>
                                            <th className="px-5 text-[#ff4221] bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Published Date
                                            </th>
                                            <th className="px-5 text-[#ff4221] bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Edit
                                            </th>
                                            
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {blogs.map((blog, index) => (
                                            <tr key={blog._id}>
                                                <th className="border-t-0 text-[#ff4221] px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                    {index + 1}
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {blog.title}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {new Date(blog.createdAt).toLocaleDateString()}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <Link to={`/dashboard/update-items/${blog._id}`} className="text-[#ff4221] hover:text-[#e87865]">Edit</Link>
                                                </td>
                                                
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        </>
    );
};

export default Managepost;