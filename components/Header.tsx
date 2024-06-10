import { BellIcon,  MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10 pl-1">
        <h1 className="text-2xl text-red-500 font-bold ">Cinema Movies</h1>

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink font-bold">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline clickableIcon" />
        <BellIcon className="clickableIcon h-6 w-6" />
      </div>
    </header>
  )
}

export default Header