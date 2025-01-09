import React from 'react'


const SearchBlog = ({search, handleSearchChange, handleSearch}) => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
  return (
    <div className='w-full flex'>
        <input type=" text" 
        value={search}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        placeholder="Search Any Blog"
        className='py-2 px-4 mx-10 my-3  w-[300px] rounded-md dark:bg-black bg-[#f3f3f3] focus:outline-none dark:border-white dark:border '
        />
        <button 
        onClick={handleSearch}
        className='text-white  bg-[#2d60ee] rounded-md px-4 py-2 my-3 hover:bg-[#5a86fc]'>Search</button>
    </div>
  )
}

export default SearchBlog