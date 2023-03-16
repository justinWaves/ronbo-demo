import React from 'react'

function Footer() {
  return (
    <div className='w-screen relative z-10 bg-zinc-200'>
         <div class="w-4/6 border-b border-b-zinc-400 mx-auto mb-32 pt-20"></div>
       <div className='hidden sm:flex mx-auto justify-around pb-64 px-5 md:px-20'>
<div>   
    <h1 className='font-light text-black'>COMPANY</h1>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>ABOUT US</p>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>HOSPITALITY</p>
</div>
<div>   
    <h1 className='font-light text-black'>TRADE PROS</h1>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>SHOWROOMS</p>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>DOWNLOAD THE CATALOG</p>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>CARE & MAINTENANCE</p>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>FAQ</p>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>WARRENTY</p>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>BLOG</p>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>PRIVACY POLICY</p>
</div>
<div>   
    <h1 className='font-light text-black'>SUPPORT</h1>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>CONTACT US</p>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>REQUEST A QUOTE</p>
</div>
<div>   
    <h1 className='font-light text-black'>COMPANY</h1>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>ABOUT US</p>
    <p className='font-thin text-zinc-700 hover:underline cursor-pointer'>HOSPITALITY</p>
</div>

</div>
<div className='flex justify-center pb-40'>
<p className='text-zinc-500 font-light'>created by </p> <a href="https://justinwaves.github.io/jw-portfolio-2021/" target="_blank" rel="no"  className='font-light ml-1 hover:underline'> Justin Weisberg</a></div>
    </div>
  )
}

export default Footer