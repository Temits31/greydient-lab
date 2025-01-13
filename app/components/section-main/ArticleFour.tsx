import React from 'react'
import Image from 'next/image'

export default function ArticleFour() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full h-auto mt-10">
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 h-auto w-full">
        <article className=" bg-white rounded-3xl  shadow-2xl shadow-slate-500 gap-6">
            <Image src='/assets/img-destinations.webp' width={500} height={500} loading="lazy" className='mb-3' alt='NO Image'></Image>
        <div className='flex flex-col gap-4 p-6'>

            <div className='flex justify-between gap-4'>
                <h2 className='font-bold text-lg'>Paradise Beach, Bantayan Island</h2>
                
                <span className='text-pink-500 font-bold text-lg ml-20'>$20.00</span>

            </div>
            <p className=''>Rome, Italy</p>
            <div className='mt-2 text-orange font-bold text-[24px] flex items-center gap-1'>
              <p className='text-2xl font-bold'>5.0</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            </div>
        </div>
        </article>
        <article className=" bg-white rounded-3xl  shadow-2xl shadow-slate-500 gap-6">
        <Image src='/assets/img-destinations2.webp' width={500} height={500} loading="lazy" className='mb-3' alt='NO Image'></Image>
        <div className='flex flex-col gap-4 p-6'>

            <div className='flex justify-between gap-5'>    
                <h2 className='font-bold text-lg'>Ocean with full of Colors</h2>
                
                <span className='text-pink-500 font-bold text-lg ml-20'>$20.00</span>
   

            </div>
            <p className=''>Maldives</p>
            <div className='mt-2 text-orange font-bold text-[24px] flex items-center gap-1'>
              <p className='text-2xl font-bold'>5.0</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            </div>
        </div>
        </article>
        <article className=" bg-white rounded-3xl shadow-2xl shadow-slate-500 gap-6">
            <Image src='/assets/img-destinations3.webp' width={500} height={500} loading="lazy" className='mb-3' alt='NO Image'></Image>

            <div className='flex flex-col gap-4 p-6'>
        
            <div className='flex justify-between gap-4'>
                <h2 className='font-bold text-lg'>Mountain View, Above the cloud</h2>
                
                <span className='text-pink-500 font-bold text-lg ml-20'>$20.00</span>


            </div>
            <p className='semi-bold' >United Arab Emeries</p>
            <div className='mt-2 text-orange font-bold text-[24px] flex items-center gap-1'>
              <p className='text-2xl font-bold'>5.0</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            </div>
            


            </div>
        </article>
      </article>
    </section>
  )
}
