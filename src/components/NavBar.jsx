import {Menu , X} from "lucide-react"
import { useState } from "react"
import React from 'react'
// import { navItems } from '../constants/index.jsx'
import logo from "../assets/logo2.png"


const NavBar = () => {

    const [mobiletoweropen, setmobiletoweropen] = useState(false);

    const toggle=()=>{
        setmobiletoweropen(!mobiletoweropen);
    }

  return (
    <div>
      <nav className="sticky top-0 z-50 p-3 border-b backdrop-blur-lg border-neutral-700/80 ">

      <div className="container mx-auto px-4 relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex itmes-center flex-shrink-0   ">
                <img  className="h-11 w-15 mr-2" src={logo} alt="logo" />
                <span className='text-lg tracking-tight  mt-2 lg:text-xl '>GDG On Campus-GGCT</span>
                
            </div>
            <ul className='hidden lg:flex ml-14 space-x-12'>
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="#about">About Us</a>

                </li>
                <li>
                <a href="#team">Team</a>
                </li>
               
               <li>
               <a href="#contact">Contact Us</a>
               </li>

            </ul>

            <div className="hidden lg:flex justify-center items-center space-x-12">
                {/* <a className="border rounded-md py-2 px-3" href="#">
                    Sign In 
                </a> */}

                <a className=" rounded-md py-2 px-3  bg-gradient-to-r  from-blue-500 to-orange-500 " href="https://gdg.community.dev/gdg-on-campus-gyan-ganga-college-of-technology-jabalpur-india/">
                    Connect Us
                </a>


            </div>

            <div className="hidden md:flex flex-col justify-end">
              {/* <button onClick={toggle}>
              {mobiletoweropen ? <X/> : <Menu/>}
              </button> */}

            </div>

        </div>

        {mobiletoweropen && 
            <div className="fixed right-0 z-20 bg-neutral-900 p-12 flex flex-col justify-center items-center lg:hidden w-full flex-col">
            <ul>
            <li className="py-4">
                <a href="/">Home</a>
                </li>
                <li className="py-4">
                <a href="#about">About Us</a>

                </li>
                <li className="py-4">
                <a href="#team">Team</a>
                </li>
               
               <li className="py-4">
               <a href="#contact">Contact Us</a>
               </li>
            </ul>
               
               {/* <div className="flex justify-between items-center">
               <a className="border rounded-md py-2 px-3 mr-3" href="#">
                    Sign In 
                </a>

                <a className=" rounded-md py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 ml-3" href="#">
                    Create an Account
                </a>

               </div> */}
                <div className=" lg:flex justify-center items-center space-x-12 mt-10">
                {/* <a className="border rounded-md py-2 px-3" href="#">
                    Sign In 
                </a> */}

                <a className=" rounded-md py-2 px-3  bg-gradient-to-r  from-blue-500 to-orange-500 " href="https://gdg.community.dev/gdg-on-campus-gyan-ganga-college-of-technology-jabalpur-india/">
                    Connect Us
                </a>


            </div>

               

            </div>

           
        }

      </div>

      </nav>
    </div>
  )
}

export default NavBar
