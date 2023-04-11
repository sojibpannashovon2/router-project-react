import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const { books } = useLoaderData()
    console.log(books);
    return (
        <div>
            <div className='grid gap-5 mt-8 mx-[5%] grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    books.map(book =>
                    (
                        <Book key={book.isbn13} book={book}></Book>
                    )


                    )
                }

            </div>
        </div>

    );
};

export default Books;