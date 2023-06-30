import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar"
import Generate from "@/components/Generate/Generate"
import { createContext, useState } from "react"
import ShowImages from "@/components/ShowImages/ShowImages"

const inter = Inter({ subsets: ['latin'] })
export const MyContext = createContext()

export default function Home() {
  const [generatedImage, setGeneratedImage] = useState({})
  const [dimension, setDimension] = useState(2)
  const [sample, setSample] = useState(4)
  const value = {
   generatedImage, setGeneratedImage,
   dimension, setDimension, 
   sample, setSample
  }
  return (
    <MyContext.Provider value={value}>
      <div className="bg-light text-white min-h-screen">
      <Navbar />
      <Generate />
      <ShowImages />
    </div>
    </MyContext.Provider>
  )
}
