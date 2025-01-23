import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { GoLocation } from 'react-icons/go';
import { RiPagesLine } from 'react-icons/ri';

const BookList = ({ book }) => {

    const { bookId, bookName, author, image, review, totalPages,
        rating, category, tags, publisher, yearOfPublishing,
        type, ageGroup
    } = book;

    return (
        <div>
            <div className='card '>
                <div className="flex gap-4  rounded-sm border my-4 p-3 card-compact bg-base-100  shadow-xl">
                    <figure className='border-gray-50  w-[200px] rounded-sm bg-gray-200 '>
                        <img className='w-[120px]'
                            src={book.image}
                            alt="Shoes" />
                    </figure>
                    <div className="flex ">
                        <div className='border-b-2'>
                            <h2 className="card-title">{book.bookName}</h2>
                            <p className='mb-3'>By:{book.author}</p>
                            <div className='flex mb-4'>
                                <h2 className='flex mr-4'><GoLocation className='text-xl mr-1'></GoLocation> Year of Publishing: {book.yearOfPublishing}</h2>
                                
                            </div>
                            <div className='flex gap-4 '>
                                <h2 className='flex items-center gap-2'> <CgProfile></CgProfile> Publisher: {book.publisher} </h2>
                                 <h2 className='flex items-center'><RiPagesLine></RiPagesLine> Page: {book.totalPages} </h2>
                            </div>
                        </div>

                    </div>
                    <Link to={`/book/${bookId}`}>
                        <button className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold py-3 px-4 rounded-md">
                            View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookList;