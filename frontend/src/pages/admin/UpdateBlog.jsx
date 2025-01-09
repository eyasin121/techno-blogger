import React, { useRef, useState, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import SimpleImage from "@editorjs/simple-image";
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import { useSelector } from 'react-redux';
import { useFetchBlogByidQuery , useUpdateBlogMutation } from '../../redux/features/blogs/blogsApi';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const { id} = useParams();
    const editorRef = useRef(null);
    const [title, setTitle] = useState('');
    const [coverImg, setCoverImg] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [category, setCategory] = useState('');
    const [writer, setWriter] = useState('');
    const { data: blog = {}, isLoading, error, refetch } = useFetchBlogByidQuery(id);
    const [updateBlog] = useUpdateBlogMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (blog.post) {
            setTitle(blog.post.title);
            setCoverImg(blog.post.coverImg);
            setMetaDescription(blog.post.description);
            setCategory(blog.post.category);

            const editor = new EditorJS({
                holder: 'editorjs',
                onReady: () => {
                    editorRef.current = editor;
                },
                autofocus: true,
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: true,
                    },
                    list: {
                        class: EditorjsList,
                        inlineToolbar: true,
                    },
                    image: SimpleImage,
                },
                data: blog.post.content
            });

            return () => {
                editor.destroy();
                editorRef.current = null;
            };
        }
    }, [blog]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const content = await editorRef.current.save();
            const updatedPost = {
                title: title || blog.post.title,
                content,
                coverImg: coverImg || blog.post.coverImg,
                description: metaDescription || blog.post.description,
                category: category || blog.post.category,
              
                writer : writer || blog.post.writer
            };
            const response = await updateBlog({ id, ...updatedPost }).unwrap();
            console.log('Post updated successfully:', response);
            alert('Post updated successfully');
            navigate('/dashboard');
            // Reset form fields after submission
            setTitle('');
            setCoverImg('');
            setMetaDescription('');
            setWriter('');
            setCategory('');
            editorRef.current.clear();
        } catch (error) {
            console.error('Error saving the post:', error);
            alert('Error saving the post. Please try again.');
        }
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error loading blog. Please try again later.</h1>;
    }

    return (
        <div className='bg-slate-100 dark:bg-slate-900 p-2'>
            <h2 className='text-3xl font-semibold text-[#ff4221]'>Update Blog</h2>
            <form className='space-y-5 pt-8' onSubmit={handleSubmit}>
                <div className='space-y-4'>
                    <label className='text-xl font-semibold text-[#ff4221]'>Blog Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder='Blog Title Here'
                        className='w-full inline-block bg-slate-200 dark:bg-slate-600  px-5 py-3 rounded-lg outline-none border-none'
                    />
                </div>
                <div className='flex flex-row justify-between items-start gap-5'>
                    <div className='w-full'>
                        <label className='text-2xl font-semibold mb-5 text-[#ff4221]'>Blog Content</label>
                        <div id='editorjs'></div>
                    </div>
                    <div className='w-full border p-5 space-y-5 rounded'>
                        <p className='font-semibold text-xl text-[#ff4221]'>Choose Blog Format</p>
                        <hr />
                        <div className='space-y-4'>
                            <label className='text-xl font-semibold text-[#ff4221]'>Blog Cover Image Link</label>
                            <input
                                value={coverImg}
                                onChange={(e) => setCoverImg(e.target.value)}
                                type="text"
                                placeholder='Blog Image Link Here'
                                
                                className='w-full inline-block bg-slate-200 dark:bg-slate-600 px-5 py-3 rounded-lg outline-none border-none'
                            />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-semibold text-[#ff4221]'>Blog Meta Description</label>
                            <textarea
                                cols={4}
                                rows={4}
                                value={metaDescription}
                                onChange={(e) => setMetaDescription(e.target.value)}
                                placeholder='Meta Description Here'
                                 
                                className='w-full inline-block bg-slate-200 dark:bg-slate-600 px-5 py-3 rounded-lg outline-none border-none'
                            />
                        </div>
                        <div className='space-y-4'>
                            <label className='text-xl font-semibold text-[#ff4221]'>Blog Category</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type="text"
                                placeholder='Blog Category Here'
                                 
                                className='w-full inline-block bg-slate-200 dark:bg-slate-600 px-5 py-3 rounded-lg outline-none border-none'
                            />
                        </div>
                       
                        <div className='space-y-4'>
                            <label className='text-xl font-semibold text-[#ff4221]'>Writer's Name</label>
                            <input
                                value={writer}
                                onChange={(e) => setWriter(e.target.value)}
                                type="text"
                                placeholder="Writer's Name"
                                 
                                className='w-full inline-block bg-slate-200 dark:bg-slate-600 px-5 py-3 rounded-lg outline-none border-none'
                            />
                        </div>
                    </div>
                </div>
                <button
                    type='submit'
                    className='bg-blue-500 text-white px-5 py-3 w-full rounded'
                >
                    Update Blog
                </button>
            </form>
        </div>
    );
};

export default UpdateBlog;