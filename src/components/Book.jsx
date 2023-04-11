import React from 'react';

const Book = ({ book }) => {
    return (
        <div>
            <div className="overflow-hidden  relative rounded-xl shadow-2xl transition duration-200 tranform hover: -translate-y-4">
                <div className="relative">
                    <img src={book.image} alt="cover-image" className='w-full' />
                </div>
                <div className='bg-black text-white absolute inset-0 p-4 rounded-xl shadow-2xl opacity-0 hover:opacity-80 transition-opacity duration-800 flex flex-col'>
                    <p>{book.title}</p>
                    <br />
                    <p>{book.subtitle}</p>
                    <br />
                    <p className='mt-auto flex justify-center'>Price: {book.price}</p>

                </div>
            </div>

        </div>
    );
};

export default Book;