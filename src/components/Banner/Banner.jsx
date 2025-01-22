import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className=" bg-gray-100 h-[400px]  rounded-xl">
  <div className="flex flex-col-reverse md:flex-row h-[400px] items-center justify-around  ">
    <div className=''>
      <h1 className="text-4xl mb-7 text-black font-bold">Books to freshen up <br /> your bookshelf</h1>
      <button className="font-bold text-white py-3 px-4 rounded-lg bg-[#23BE0A]">View The List</button>
    </div>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm h-[290px] rounded-lg shadow-2xl" />
  </div>
</div>
        </div>
    );
};

export default Banner;