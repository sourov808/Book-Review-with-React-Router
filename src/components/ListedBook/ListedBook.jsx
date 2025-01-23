import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStroedBook } from '../../utilites/localStroges';
import BookList from '../BookList/BookList';

const ListedBook = () => {
    const books = useLoaderData([]);
    const [bookList,setBookList] = useState([]);
    const [displayBooks,setDisplayBooks] = useState([]);


    const handleBookfilter = filter => {
        if(filter === 'rating'){
            setDisplayBooks(bookList)
        }
        else if (filter === 'pages'){
          const bookPages = books.filter(book => book.totalPages
            === 'pages'
          );
          setDisplayBooks(bookPages)
        }
        else if (filter === 'year'){
          const bookYear = bookList.filter(book => book.yearOfPublishing
            === 'year'
          );
          setDisplayBooks(bookYear);
        }
            
    }
    

    useEffect(() => {
        const stroedBookId = getStroedBook();
        if(books.length > 0){
            const listedBooks = books.filter(book => stroedBookId.includes(book.bookId))
       
            setBookList(listedBooks)
            setDisplayBooks(listedBooks)
        }
        
    },[])
    return (
        <div>
            <h2>
                List {bookList.length}
            </h2>
            <details className="dropdown">
                <summary className="btn m-1">Sort By</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleBookfilter('rating')}><a>Rating</a></li>
                    <li onClick={() => handleBookfilter('pages')}><a>Number of pages</a></li>
                    <li onClick={() => handleBookfilter('year')}><a>Publisher year</a></li>
                </ul>
            </details>
            {
                displayBooks.map(book => <BookList book={book}></BookList>)
            }
        </div>
    );
};

export default ListedBook;