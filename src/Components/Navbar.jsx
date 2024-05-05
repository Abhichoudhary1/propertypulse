'use client'

import Image from "next/image";
import Logo from '../assets/images/logo-white.png';
import Profiledefault from "../assets/images/profile.png"
import {FaGoogle} from 'react-icons/fa'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
   const {data : session} =  useSession()
   const profileImage = session?.user?.image
   const[providers,setProviders] = useState(null)
   const [profileMenuOpen, setProfileMenuOpen] = useState(false)
   const pathName = usePathname()

   console.log(providers)

   useEffect(()=>{
    const setAuthprovider = async () =>{
      const res = await getProviders()
      setProviders(res)
    }
    setAuthprovider()
   },[])

  return (
    <div>
      <nav className="bg-blue-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sronly">Open main menu</span>
          
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <Image className="h-8 w-auto" src={Logo} alt="Your Company"/>
        </div>
        <span className="hidden md:block text-white text-2xl mx-4">Property pulse</span>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            
            <Link href="/" className={
                    pathName === "/"
                      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }>Home</Link>
            <Link  href="/properties" className={
                    pathName === "/properties"
                      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  }>Properties</Link>
      { (
                  <Link
                    href="/properties/add"
                    className={
                      pathName === "/properties/add"
                        ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    }
                  >
                    Add Property
                  </Link>

                  
                )}
 <Link
                    href="/About"
                    className={
                      pathName === "/About"
                        ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    }
                  >
                    AboutUs
                  </Link>

                  <Link
                    href="/Contact"
                    className={
                      pathName === "/Contact"
                        ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    }
                  >
                    ContactUs
                  </Link>

          </div>
        </div>
      </div>
      {!session && (
            <div className="hidden md:block md:ml-6">
              <div className="flex items-center">
                {
                  providers && Object.values(providers).map((provider, index)=>(

                    <button onClick={()=>signIn(provider.id)} key={index} className="flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                    <FaGoogle className="text-white" />
                    <span>Login or Register</span>
                  </button>

                  ) )
                }
                
              </div>
            </div>
          )}
          
       
 {session &&  (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <a href="messages.html" className="relative group">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  2
                  {/* <!-- Replace with the actual number of notifications --> */}
                </span>
              </a>
              {/* <!-- Profile dropdown button --> */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setProfileMenuOpen((prev) => !prev)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      src={profileImage || Profiledefault}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </button>
                </div>

                {/* <!-- Profile dropdown --> */}
                {profileMenuOpen && (
                  <div
                    id="user-menu"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <a
                      href="/profile.html"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="saved-properties.html"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Saved Properties
                    </a>
                    <button
                      onClick={() => {
                        setProfileMenuOpen(false);
                        signOut()
                      }}
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}







 
    </div>




    
  </div>

  
  
</nav>

    </div>
  )
}

export default Navbar
