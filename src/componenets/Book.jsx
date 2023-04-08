import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {isbn13} = book;
    return (
        <Link to={`/book/${isbn13}`}>
             <div className='relative items-center transition duration-200 transform hover:-translate-y-2'>
                     <img className='mx-auto' src={book.image} alt="book cover" />
                      <div className='bg-gray-800 opacity-75 text-white absolute inset-0 opacity-0 hover:opacity-90 rounded-md p-4 flex flex-col justify-around transition-opacity duration-200'>
                                <div>
                                <p className='text-xl font-semibold'>{book.title}</p>
                                <br />
                                <p>{book.subtitle.substring(0,45)}....</p>
                                </div>
                                <br />
                                <p>Price: {book.price}</p>
                            </div>
                        </div>
        </Link>
    );
};

export default Book;