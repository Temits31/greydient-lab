import React from 'react'

export default function EmailForm(){
  return (
    <form action="POST" className='flex flex-col md:flex-row justify-between gap-4 mt-20'>
        <input className="pl-14 pr-4 py-4 shadow-sm text-lg text-graycolor capitalize font-medium rounded-xl outline-graycolor h-full" type="text" placeholder=" your email"></input>
        <button className='border bg-purple-500 rounded-xl p-3 text-md font-bold text-white'>Subscribe</button>
    
    </form>
  )
}

