import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav className='bg-black text-white px-6 py-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Latest<span className='text-red-700'>News</span></h1>

        <ul className='flex sm:gap-3 md:gap-4 lg:gap-6 '>
            <li onClick={()=> setCategory('general')} className='cursor-pointer duration-250 hover:scale-105 hover:text-gray-400'>General</li>
            <li onClick={()=> setCategory('science')} className='cursor-pointer duration-250 hover:scale-105 hover:text-gray-400'>Science</li>
            <li onClick={()=> setCategory('sports')} className='cursor-pointer duration-250 hover:scale-105 hover:text-gray-400'>Sports</li>
            <li onClick={()=> setCategory('technology')} className='cursor-pointer duration-250 hover:scale-105 hover:text-gray-400'>Technology</li>
            <li onClick={()=> setCategory('entertainment')} className='cursor-pointer duration-250 hover:scale-105 hover:text-gray-400'>Entertainment</li>
            <li onClick={()=> setCategory('health')} className='cursor-pointer duration-250 hover:scale-105 hover:text-gray-400'>Health</li>
            <li onClick={()=> setCategory('business')} className='cursor-pointer duration-250 hover:scale-105 hover:text-gray-400'>Business</li>
        </ul>
    </nav>
  )
}

export default Navbar
