import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const [fold,setFold] = useState(true);
    const book = useLoaderData();
    const { image, title, desc, authors, publisher, year, rating, url, price } =book;
    console.log(book);
    return (
       <div className='my-container'>
         <div className='border p-5 m-2 gap-5 lg:flex justify-between items-center'>
            <div className='lg:w-1/2 h-full mx-auto'>
                <img  className='mx-auto object-cover w-full lg:h-full' src={image} alt="" />
            </div>
            <div className=' p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                <p className='badge'>Brand New</p>
                <h2 className='text-4xl font-bold mb-5'>{title}</h2>
                <p className=' text-gray-900'>Authors: {authors.substring(0, 50)}</p>
          <p className=' text-gray-900'>Publisher: {publisher}</p>
          <p className=' text-gray-900'>Year: {year}</p>
          <p className='mb-5 text-gray-900'>Rating: {rating}</p>
            {fold?(
                <p>{desc.substring(0,100)}....<span onClick={()=> setFold(!fold)} className='text-blue-600 cursor-pointer'>Read More</span></p>
            ):(
                <p>{desc}<span onClick={()=> setFold(!fold)} className='text-blue-600 cursor-pointer'>Read Less</span></p>
            )}
          <div className='flex items-center gap-5 mt-5'>
            <Link to={url} className='btn'>Buy Now</Link>
            <p className='font-bold'>Price: {price}</p>
          </div>
                
            </div>
        </div>
       </div>
    );
};

export default BookDetails;