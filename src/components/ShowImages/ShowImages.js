import { MyContext } from "@/pages"
import Image from "next/image"
import React, { useContext } from 'react'

function ShowImages() {
  const { generatedImage} = useContext(MyContext)
  return (
    <div className="px-10 flex gap-5">
      {
        generatedImage.output && generatedImage.output.map((item, i)=>{
          return (
            <div key={i}>
              <Image
                className=" rounded-sm ring-2 ring-gray-400"
                src={item}
                width={generatedImage.meta.W}
                height={generatedImage.meta.H}
                alt="Picture of the author"
              />
            </div>
          )
        })
      }
    </div>

  )
}

export default ShowImages