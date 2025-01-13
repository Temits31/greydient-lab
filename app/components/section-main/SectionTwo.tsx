import React from 'react';
import Image from 'next/image';


export default function Services() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full h-auto mt-40">
      <div className="lg:w-auto mb-8 lg:mb-0 flex flex-col items-center justify-center text-center">
        <span className="text-pink-500 text-2xl">Services</span>
        <h3 className="text-gray-800 text-3xl">Our top value categories for you</h3>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 h-auto w-full">
        <article className="flex flex-col justify-between items-center bg-white rounded-3xl px-14 py-20 shadow-2xl shadow-slate-500 gap-6">
            <Image src='/assets/icon-services1.webp' width={64} height={64} loading="lazy" className='mb-8' alt='NO Image'></Image>
            <h2 className='text-center'>Best Tour Guide</h2>
            <p className='text-center' >What looked like a small patch of purple grass, above five feet.</p> 
        </article>
        <article className="flex flex-col justify-between items-center bg-white rounded-3xl px-14 py-20 shadow-2xl shadow-slate-500 gap-6">
        <Image src='/assets/icon-services2.webp' width={64} height={64} loading="lazy" className='mb-8' alt='NO Image'></Image>
            <h2 className='text-center'>Easy Booking</h2>
          <p className='text-center'>Square, was moving across the sand in their direction.</p>
        </article>
        <article className="flex flex-col justify-between items-center bg-white rounded-3xl px-14 py-20 shadow-2xl shadow-slate-500 gap-6">
            <Image src='/assets/icon-services3.webp' width={64} height={64} loading="lazy" className='mb-8' alt='NO Image'></Image>
            <h2 className='text-center'>Weather Forecast</h2>
            <p className='text-center'>What looked like a small patch of purple grass, above five feet.</p>
        </article>
      </article>
    </section>
  );
}   
