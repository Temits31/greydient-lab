import React from 'react'
import Image from 'next/image'


export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-10 py-10'>
        <article className='max-w-[300px] flex flex-col items-center justify-center md:justify-between md:items-start'>
            <Image src = "/assets/logo.svg" width={140} height={40} className='max-w-[141px] min-w-[100px]' alt="No logo"></Image>
            <p className="mt-8 text-center md:text-left text-pretty">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC.
            </p>
        </article>
        <article className='text-graycolor text-center md:text-left'>
        <h3 className="text-black font-bold text-xl" >Company</h3>
        <ul className="mt-8 flex flex-col gap-4"> 
            <li >
             <a title="about" href="#" >about</a>
            </li> 
            <li >
                 <a title="career" href="#" >career</a>
            </li>
            <li >
                <a title="mobile" href="#" >mobile</a>
            </li> 
            </ul>

        </article>
        <article className='text-graycolor text-center md:text-left'>
        <h3 className="text-black font-bold text-xl" >Contact
        </h3>
        <ul className="mt-8 flex flex-col gap-4"> 
            <li >
             <a title="about" href="#" >Why Travlog?</a>
            </li> 
            <li >
                 <a title="career" href="#" >Partner with us</a>
            </li>
            <li >
                <a title="mobile" href="#" >FAQ`s</a>
            </li> 
            <li>
            <a title="mobile" href="#" >Blog</a>


            </li>
            </ul>

        </article>
        <article className='text-graycolor text-center md:text-left'>
        <h3 className="text-black font-bold text-xl" >Meet Us</h3>
        <ul className="mt-8 flex flex-col gap-4"> 
            <li >
             <a title="about" href="#" >+00 92 1234 56789</a>
            </li> 
            <li >
                 <a title="career" href="#" >info@travlog.com</a>
            </li>
            <li >
                <a title="mobile" href="#" >205. R Street, New York</a>
            </li> 
            </ul>

        </article>
    </div>


  )
}
