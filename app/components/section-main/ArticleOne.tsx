import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function ArticleOne() {
  return (
    <article className="flex flex-col-reverse justify-center gap-5 md:flex-row items-center w-full">
      <div className="relative flex flex-col max-w-[430px] justify-center text-center md:text-left md:justify-between items-center md:items-start gap-6 md:basis-1/2 basis-full">
      <Link
          href="/learn-more"
          className="py-2 px-6 text-pink-500 capitalize rounded-full flex gap-2 items-center justify-center hover:text-white hover:bg-purple-700 transition-all duration-500 shadow-md font-semibold"
        >
          Explore the World!
        </Link>
        <h5 className="text-6xl font-bold text-gray-800">Travel 
        <span className='text-pink-500 pl-4 pr-4'>Top Destination</span>
        of the World
        </h5>
        <p className="text-lg text-graycolor max-w-[430px]">
        We always make our customer happy by providing as many choices as possible
        </p>
        <div className='flex gap-x-5'>
        <Link
          href="/learn-more"
          className="bg-purple-500 py-2 px-6 capitalize rounded-full flex gap-2 items-center justify-center hover:text-white hover:bg-purple-700 transition-all duration-500 shadow-md text-white font-semibold"
        >
          Get Started
        </Link>
        <a aria-disabled="true" className="bg-purple py-2 px-6 capitalize  rounded-full font-medium flex gap-2 items-center justify-between max-w-fit hover:text-white hover:bg-rosa transition-all duration-500 hover:-translate-y-[2px] bg-transparent text-blackcolor border" href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"> <path d="M11.9688 2.5C6.44875 2.5 1.96875 6.98 1.96875 12.5C1.96875 18.02 6.44875 22.5 11.9688 22.5C17.4888 22.5 21.9688 18.02 21.9688 12.5C21.9688 6.98 17.4988 2.5 11.9688 2.5ZM14.9688 14.73L12.0687 16.4C11.7087 16.61 11.3088 16.71 10.9187 16.71C10.5188 16.71 10.1287 16.61 9.76875 16.4C9.04875 15.98 8.61875 15.24 8.61875 14.4V11.05C8.61875 10.22 9.04875 9.47 9.76875 9.05C10.4888 8.63 11.3487 8.63 12.0787 9.05L14.9787 10.72C15.6987 11.14 16.1287 11.88 16.1287 12.72C16.1287 13.56 15.6987 14.31 14.9688 14.73Z" fill="#5D50C6"></path> </svg>  
        Watch demo
        </a>
        </div>
        
      </div>

      <div className="flex flex-row items-center justify-center relative pt-20 gap-4 md:basis-1/2 basis-full bggreen-600 w-full">
       <Image src="/assets/layer.svg" alt='No image' width="700" height="500" className='absolute -z-10 top-5 left-0 right-0 mx-auto ml-9'></Image>

        <div className="flex sm:flex-col gap-4">
            <Image src='/assets/img-cover.webp' width={225} height={245} alt='No image'></Image>
            <Image src='/assets/img-cover2.webp' width={225} height={245} alt='No image'></Image>
        </div>
        <div className="block">
            <Image src='/assets/img-cover3.webp' width={289} height={305} alt='No image'></Image>
        </div>
      
      
      </div>
    </article>
  );
}
