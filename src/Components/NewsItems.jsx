import React from 'react'

const NewsItems = ({title, urlToImage, url}) => {
  return (
    <div>
      <img className='w-full rounded-xl shadow shadow-gray-600 hover:cursor-pointer h-48 hover:scale-105 duration-250 object-cover' src={urlToImage} alt="no image found" />

      <div className='p-4'>
        <h3 className='font-semibold text-lg mb-2'>{title}</h3>

        {/* <p className='text-gray-600 text-sm mb-3'>{description}</p> */}

        <a className='text-blue-600 hover:text-blue-900 text-sm' href={url}>Read More</a>
      </div>
    </div>
  )
}

export default NewsItems
