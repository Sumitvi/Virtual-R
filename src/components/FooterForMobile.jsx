import React from 'react'
import { House } from 'lucide-react';
import { AtSign } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';





const FooterForMobile = () => {
  return (
    <div className='lg:hidden '>
       <div className='w-full h-20 bg-neutral-900 bottom-0 fixed border-t border-neutral-900'>
        <div className='flex justify-center items-center gap-12 md:gap-20 m-5 '>

        
       <a href="/"><House className='text-slate-200 md:w-10 h-10 ' /></a>
       <a href="#about"><AtSign className='text-slate-200 md:w-10 h-10' /></a>
       <a href="#team"><UsersRound className=' text-slate-200 md:w-10 h-10' /></a>
       <a href="#contact"><MessageSquareMore className='text-slate-200 md:w-10 h-10' /></a>

        </div>
     
     
        
         
       </div>
      
    </div>
  )
}

export default FooterForMobile
