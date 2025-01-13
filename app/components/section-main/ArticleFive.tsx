import React from 'react'
import Image from 'next/image'

export default function ArticleFive(){
  return (
    <section className='flex flex-col lg:flex-row justify-between gap-4 my-28'>
        <article className='relative lg:flex justify-end items-end hidden'>

            <Image src='/assets/img-discounted.webp' width={550} height={550} alt='no image'></Image>
            <Image src='/assets/bg-discounted.svg' width={550} height={550} className='absolute bottom-0 left-0 -z-10' alt='No BG'></Image>
        </article>
        <article className='flex flex-col gap-12 justify-center items-center'>
            <div className='max-w-[400px]'>
            <span className="tracking-[4.6px;] uppercase text-lg text-rosa font-bold block text-center lg:text-left">Travel Point</span>
            <h2 className="text-4xl font-bold text-blackcolor mt-3 text-center lg:text-left">
            We helping you find your dream location
            </h2>
            <p className="text-lg text-graycolor mt-8 text-center lg:text-left">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC.
            </p>
            </div>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"> 
            <div className="p-8 rounded-3xl border flex flex-col justify-center items-center gap-4 bg-white shadow-sm">
                 <span className="font-bold text-3xl text-orange font-poppins">500+</span>
                  <span className="text-lg text-blackcolor capitalize">Holiday Package</span> </div> 
                  <div className="p-8 rounded-3xl border flex flex-col justify-center items-center gap-4 bg-white shadow-sm"> 
                  <span className="font-bold text-3xl text-orange font-poppins">100</span> 
                  <span className="text-lg text-blackcolor capitalize">Luxury Hotel</span> </div> 
                  <div className="p-8 rounded-3xl border flex flex-col justify-center items-center gap-4 bg-white shadow-sm">
                     <span className="font-bold text-3xl text-orange font-poppins">7</span>
                      <span className="text-lg text-blackcolor capitalize">Premium Airlines</span>
                 </div>
                <div className="p-8 rounded-3xl border flex flex-col justify-center items-center gap-4 bg-white shadow-sm">
                         <span className="font-bold text-3xl text-orange font-poppins">2k+</span>
                          <span className="text-lg text-blackcolor capitalize">Happy Customer</span>
                 </div>
             </article>
            
        </article>
    </section>
  )
}

