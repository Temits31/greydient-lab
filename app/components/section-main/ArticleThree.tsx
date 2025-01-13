'use client';


import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';


export default function ArticleTwo(){
  return (
    <div className=''>
        <header >
            <div className='flex justify-between items-center gap-6'>
              <div>
              <h1 className='text-pink-500 text-2xl'>Top Destination</h1>
              <p className='text-black text-5xl font-bold'>Explore top destination</p>

              </div>

              <div className='flex justify-center items-center gap-4'>
              <ArrowLeftIcon height={80} width={80} className='bg-white rounded-full text-violet-600 border p-6'/>
                <ArrowRightIcon height={80} width={80} className='bg-violet-600 rounded-full text-white border p-6'/>
              </div>

                
            </div>
            
              
                




        </header>
        <article>

        </article>
    </div>
    
  )
}

