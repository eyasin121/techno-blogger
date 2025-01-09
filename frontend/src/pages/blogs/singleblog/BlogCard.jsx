import React from 'react';
import EditorJSHTML from "editorjs-html";
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const editorJSHTML = EditorJSHTML();

const BlogCard = ({ blog }) => {
    const { title, description, coverImg, category, writer, createdAt, content} = blog || {};

    const htmlContent = editorJSHTML.parse(content).join('');
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>{title} | 1 BTC News</title>
                    <meta name="description" content= {content}/>
                    <meta name="keywords" content={description} />
                </Helmet>
                <div className='bg-slate-100 dark:bg-slate-950 p-9 m-5 shadow-lg'>
                    <h1 className='lg:text-5xl text-3xl font-bold mb-2 text-black dark:text-white'>{title}</h1>
                    <hr className='my-5 py-1 bg-[#1a1e3a] dark:bg-[#ffffff]' />
                    <div className='lg:flex flex-row mb-4'>
                        <p className='text-[#2d60ee] text-lg mr-12'>Written By <span className='text-[#000000] text-xl hover:text-[#ff4848]'>{writer}</span> - On: {formatDate(createdAt)}</p>
                        <p className='text-[#2d60ee] text-lg mr-12'>Category: {category}</p>
                    </div>
                    <img src={coverImg} alt='cover' className='h-96 w-full  rounded mr-4 mb-8' />
                    <hr className='my-5 py-1 bg-[#0a0b15] dark:bg-[#ffffff]' />
                    <div className='mt-9 space-y-4 text-black dark:text-white'>
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='space-y-3 editorjsdiv' />
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default BlogCard;
