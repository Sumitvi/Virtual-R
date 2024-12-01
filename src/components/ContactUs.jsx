import React from 'react'
import ContactForm from './ConatctForm'


const ContactUs = () => {


    
  return (
    <div className="relative mt-20  border-b border-neutral-800 min-h-[700px]  " id='contact'>
    <div className='text-center'>
        <span className='rounded-full text-sm font-medium  uppercase px-2 py-1 bg-neutral-900 text-orange-500 h-6'>
          Contact Us
        </span>
        <h1 className='mt-5 text-3xl lg:text-4xl tracking-wide'>Contact <span className='bg-gradient-to-r  from-blue-500 to-orange-500 bg-clip-text text-transparent'>With Us</span></h1>

      </div>


      {/* Contact form */}

       <ContactForm/>



      
      </div>
  )
}

export default ContactUs
