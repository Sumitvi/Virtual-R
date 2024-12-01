import React from 'react';
import { Link } from 'react-router-dom';  
import { motion } from "framer-motion";


import user1 from "../assets/user1.jpg"
// import user2 from "../assets/user2.jpg"
// import user3 from "../assets/user3.jpg"
// import user4 from "../assets/user4.jpg"
// import user5 from "../assets/user5.jpg"
// import user6 from "../assets/user6.jpg"
// import sumit from "../assets/core-team/sumit.png"
// import sudhir from "../assets/core-team/sudhir.png"
// import umar from "../assets/core-team/umar.png"
// import sejal from "../assets/core-team/sejal.png"
// import siddharth from "../assets/core-team/siddharth.png"
// import khushi from "../assets/core-team/khushi.png"
// import manendra from "../assets/core-team/manendra.png"
// import ayush from "../assets/core-team/ayush.png"






const Team = () => {
  return (
   <div className="relative mt-20 border-b border-neutral-800 min-h-[1300px] " id='team'>
    <div className='text-center'>
        <span className='rounded-full text-sm font-medium  uppercase px-2 py-1 bg-neutral-900 text-orange-500 h-6'>
          Team Members
        </span>
        <h1 className='mt-5 text-3xl lg:text-4xl tracking-wide'>Our Dedicated <span className='bg-gradient-to-r  from-blue-500 to-orange-500 bg-clip-text text-transparent'>Team</span></h1>

      </div>





        <div className='flex justify-center items-center mt-5 mx-5 my-3 flex-col lg:flex-row lg:1/3 flex-wrap gap-10'>
        <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">

        <motion.div
          className="flex w-[300px] h-[350px] rounded-sm bg-neutral-900 flex-col text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
            <div className="flex flex-col mx-auto mt-5">
            <img src="/core-team/sumit.jpg" alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>Sumit Vishwakarma</h1>
            <p className='mx-auto text-orange-400'>GDG on Campus Lead</p>

            </div>
            </motion.div>
        </div>


        <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">
            

        <motion.div
          className="flex w-[300px] h-[350px] rounded-sm bg-neutral-900 flex-col text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
            <div className="flex flex-col mx-auto mt-5">
            <img src="/core-team/umar.png.png" alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>Umar Iqbal Haqqani</h1>
            <p className='mx-auto text-orange-400'>GDG on Campus Co-Lead</p>

            </div>
          </motion.div>
        </div>


        <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">
        <motion.div
          className="flex w-[300px] h-[350px] rounded-sm bg-neutral-900 flex-col text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
            
            <div className="flex flex-col mx-auto mt-5">
            <img src="/core-team/sudhir.png.png" alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>Sudhir Tiwari</h1>
            <p className='mx-auto text-orange-400'>Technical & Project Lead</p>
            {/* <div><a href="/technical-team" className='underline'>Our Technical Team</a></div> */}
            <Link to="/technical-team" className="underline text-neutral-400 ">
                Our Team
              </Link>
           


            </div>
            </motion.div>
            
        </div>


        <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">
            

        <motion.div
          className="flex w-[300px] h-[350px] rounded-sm bg-neutral-900 flex-col text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
           <div className='flex flex-col mx-auto mt-5'>
           <img src="/core-team/sejal.png.png" alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>Sejal Dhamecha</h1>
            <p className='mx-auto text-orange-400'>Design Lead</p>
            <Link to="/design-team" className="underline text-neutral-400">
                Our Design Team
              </Link>
           </div>
           </motion.div>
        </div>



        <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">
        <motion.div
          className="flex w-[300px] h-[350px] rounded-sm bg-neutral-900 flex-col text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
           
           <div className="flex flex-col mx-auto mt-5">
           <img src="/core-team/ayush.png.png" alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>Ayush Sahu</h1>
            <p className='mx-auto text-orange-400'>PR Content Lead</p>
            <Link to="/content-team" className="underline text-neutral-400">
                Our Content Team
              </Link>
           </div>
           </motion.div>
        </div>



        <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">
        <motion.div
          className="flex w-[300px] h-[350px] rounded-sm bg-neutral-900 flex-col text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
           
           <div className='flex flex-col mx-auto mt-5'>
           <img src="/core-team/siddharth.png.png" alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>Siddharth Singh</h1>
            <p className='mx-auto text-orange-400'>Operational Lead</p>
            <Link to="/operational-team" className="underline text-neutral-400">
                Our Operational Team
              </Link>
           </div>
           </motion.div>
        </div>


        <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">
        <motion.div
          className="flex w-[300px] h-[350px] rounded-sm bg-neutral-900 flex-col text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
           
           <div className='flex flex-col mx-auto mt-5'>
           <img src="/core-team/khushi.png.png" alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>Khushi Khullar</h1>
            <p className='mx-auto text-orange-400'>Outreach Lead</p>
            <Link to="/outreach-team" className="underline text-neutral-400">
                Our Outreach Team
              </Link>
           </div>
           </motion.div>
        </div>


        <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">
           
        <motion.div
          className="flex w-[300px] h-[350px] rounded-sm bg-neutral-900 flex-col text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
           
           <div className='flex flex-col mx-auto mt-5'>
           <img src="/core-team/vinay.jpg" alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>Vinay Bhade</h1>
            <p className='mx-auto text-orange-400'>Marketing Lead</p>
            <Link to="/marketing-team" className="underline text-neutral-400">
                Our Marketing Team
              </Link>           
              </div>
              </motion.div>
        </div>


        <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">
        <motion.div
          className="flex w-[300px] h-[350px] rounded-sm bg-neutral-900 flex-col text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
           
           <div className='flex flex-col mx-auto mt-5'>
           <img src="/core-team/manendra.png.png" alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>Manendra Singh</h1>
            <p className='mx-auto text-orange-400'>Event Lead</p>
            <Link to="/event-team" className="underline text-neutral-400">
                Our Event Team
              </Link>           </div>

              </motion.div>
        </div>
        </div>
     


   </div>
  )
}

export default Team
