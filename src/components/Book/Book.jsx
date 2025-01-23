import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages,
        rating, category, tags, publisher, yearOfPublishing,
        type, ageGroup
    } = book;
    return (
        <div>
           <Link to={`/book/${bookId}`}>
        
        <div className="card border rounded-2xl bg-base-100 w-[350px] h-[400px] shadow-xl">
       
               <figure className="px-10 pt-10 ">
                   <div className=''>
                   <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-40  " />
                   </div>
                </figure>
            
                <div className="card-body font-italian ">
                   
                    <h2 className="card-title ">{bookName}</h2>
                    <p className='font-semibold border-b-2 border-dotted pb-3 text-gray-600'><small>By: {author}</small></p>
                    <div className='flex justify-between text-gray-600'>
                    <span>{category}</span>
                    <span className='flex items-center gap-2'>{rating} <FaRegStar></FaRegStar> </span>
                    </div>
                </div>
            
               
               
            </div>
        
            </Link>
        </div>
    );
};

export default Book;