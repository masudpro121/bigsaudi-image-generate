import React from 'react'
import Logo from '@/assets/img/logo.svg'
import Image from "next/image"
import Link from "next/link"
function Navbar() {
  return (
    <div className="bg-dark flex justify-between py-4 px-7">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <div>History</div>
          <div>likes</div>
          <div>Account</div>
      </div>
      <div >
        <button className="bg-indigo-700 text-sm font-semibold py-1 px-3 rounded-md">Get Started</button>
      </div>
    </div>
  )
}

export default Navbar