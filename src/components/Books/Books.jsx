import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books,setBooks] = useState([]);
    useEffect (() => {
           fetch('book.json')
           .then(res => res.json())
           .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h2 className='text-3xl mb-4 text-center font-bold'>
                Books
            </h2>
            <div className='grid md:grid-cols-3 justify-center  gap-3'>
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;