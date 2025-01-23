import React from 'react';

const Banner = () => {
    return (
        <div className='my-5'>
            <div className=" bg-gray-100 h-[400px]  rounded-xl">
  <div className="flex flex-col-reverse  md:flex-row h-[400px] items-center justify-around  ">
    <div className=''>
      <h1 className="text-4xl mb-7 text-black font-bold">Books to freshen up <br /> your bookshelf</h1>
      <button className="font-bold text-white py-3 px-4 rounded-lg bg-[#23BE0A]">View The List</button>
    </div>
    <img
      src="https://i.ibb.co.com/TL8FHVt/3d-thug-og.webp"
      className="max-w-sm h-[200px] md:h-[290px] rounded-lg " />
  </div>
</div>
        </div>
    );
};

export default Banner;