"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('/')
  const pathname = usePathname()

  useEffect(() => {
    setSelectedNav(pathname)
  }, [pathname])

  return (
    <div className="flex flex-row items-center justify-center p-4 bg-MidnightBlack">
      <div className='bg-DeepNightBlack text-LightGray h-16 flex items-center justify-between px-8 rounded-lg shadow-lg space-x-10 w-full max-w-4xl'>
        <Link 
          href="/" 
          className={`hover:text-Green transition-colors duration-300 font-medium py-2 ${
            selectedNav === '/' ? "border-b-2 border-Green pb-1 text-Green" : "text-Snow"
          }`}
        >
          Home
        </Link>
        <Link 
          href="/contact" 
          className={`hover:text-Green transition-colors duration-300 font-medium py-2 ${
            selectedNav === '/contact' ? "border-b-2 border-Green pb-1 text-Green" : "text-Snow"
          }`}
        >
          Contact
        </Link>
        <Link 
          href="/background" 
          className={`hover:text-Green transition-colors duration-300 font-medium py-2 ${
            selectedNav === '/background' ? "border-b-2 border-Green pb-1 text-Green" : "text-Snow"
          }`}
        >
          Background
        </Link>
        <Link 
          href="/portfolio" 
          className={`hover:text-Green transition-colors duration-300 font-medium py-2 ${
            selectedNav === '/portfolio' ? "border-b-2 border-Green pb-1 text-Green" : "text-Snow"
          }`}
        >
          Portfolio
        </Link>
        {/* <Link 
          href="/blog" 
          className={`hover:text-Green transition-colors duration-300 font-medium py-2 ${
            selectedNav === '/blog' ? "border-b-2 border-Green pb-1 text-Green" : "text-Snow"
          }`}
        >
          Blog
        </Link> */}
      </div> 
    </div>
  )
}

export default Header