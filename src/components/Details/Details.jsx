import React from 'react';
import { PiCalendarSlash } from 'react-icons/pi';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { saveBookRead } from '../../utilites/localStroges';

const Details = () => {
   const books = useLoaderData();
   const {bookId} = useParams();
   const idInt = parseInt(bookId);
   const book = books.find(job => job.bookId === idInt);
   console.log(book)

  const handleRead = () => {
    saveBookRead(idInt);
    toast('You Read It !!!')
  }
  const handleWishlist = () => {
    toast.error('You already read it')
  }

    // const { bookId, bookName, author, image, review, totalPages,
    //     rating, category, tags, publisher, yearOfPublishing,
    //     type, ageGroup
    // } = book;
    return (
        <div className="card gap-6 w-full  lg:card-side bg-base-100 shadow-xl">
        <div className=' w-[450px] h-[500px]   bg-gray-200 rounded-md'>
        <figure className=' w-[330px] mt-3 mx-auto '>
         <img
            src={book.image}
            alt="Album" 
            className='w-[420px] h-[470px]' />
        </figure>
        </div>
        <div className="   w-[500px]  ">
        <h2 className="card-title text-4xl font-italian mb-4">{book.bookName}</h2>
                    <p className='font-semibold  mb-3 text-gray-700'>By: {book.author}</p>
                    <p className='border-t-2 border-b-2 py-2 text-lg font-semibold'>{book.category}</p>
                    <p className='mt-3'><span className='font-bold'>Review: </span>{book.review}</p>
                    <div className='flex gap-2  border-b-2 py-4'>
                      <h5 className='font-bold'>
                        Tag:
                      </h5>
                      <p>{book.ageGroup}</p>
                    </div>
                     <div className='flex gap-6 my-6'>
                     <div className=''>
                     <p className='  text-gray-500'>Number of Pages: </p>
                     <p className='  text-gray-500'>Publisher: </p>
                     <p className='  text-gray-500'>Year pf Publishing: </p>
                     <p className='  text-gray-500'>Rating: </p>
                     </div>
                     <div>
                     <p className='text-black font-bold'>{book.totalPages}</p>
                     <p className='text-black font-bold'>{book.publisher}</p>
                     <p className='text-black font-bold'>{book.yearOfPublishing}</p>
                     <p className='text-black font-bold'>{book.rating}</p>
                     </div>
                     </div>
                  
                    
                    
                    
                    
                    <div className="card-actions justify-start">
                    <button
                    onClick={handleRead}
                    className="btn border bg-white font-bold ">Read</button>
                    <ToastContainer></ToastContainer>
                    <button 
                    onClick={handleWishlist}
                    className="btn text-white font-bold bg-[#59C6D2]">Wishlist</button>
          </div>
        </div>
        
      </div>
    );
};

export default Details;