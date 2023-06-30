import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar"
import Generate from "@/components/Generate/Generate"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-light text-white min-h-screen">
      <Navbar />
      <Generate />
    </div>
  )
}
