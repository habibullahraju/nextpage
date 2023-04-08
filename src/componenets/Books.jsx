import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const { books} = useLoaderData();
    return (
        <div>
            <div className='my-container gap-6  grid sm:grid-cols-2 lg:grid-cols-4'>
                {
                    books.map((book,idx)=> <Book 
                        key={idx}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;