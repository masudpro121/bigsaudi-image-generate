import React, { useContext } from 'react'
import Logo from '@/assets/img/logo.svg'
import Image from "next/image"
import Link from "next/link"
import { MyContext } from "@/pages/_app"
function Navbar() {
  const {user:{email}, credit} = useContext(MyContext)
  return (
    <div className="bg-dark flex justify-between py-4 px-7">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/generate">Generate</Link>
          <Link href="/billing">Billing</Link>
          <Link href="/history">History</Link>
          <Link href="/likes">Likes</Link>
      </div>
      <div >
        {
          !email && 
          <Link href="/signin">
          <button className="bg-indigo-700 text-sm font-semibold py-1 px-3 rounded-md">Get Started</button>
        </Link>
        }
        {
          email && 
          <Link href="/account">
          <button className="bg-indigo-700 text-sm font-semibold py-1 px-3 rounded-md">
            Credit: {credit}
          </button>
        </Link>
        }
        
        
      </div>
    </div>
  )
}

export default Navbar