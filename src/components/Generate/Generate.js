import React, { useEffect, useRef, useState } from "react";
import styles from './generate.module.css'
function Generate() {
  const [dimension, setDimension] = useState(2)
  const [negativePrompt, setNegativePrompt] = useState('')
  const [prompt, setPrompt] = useState('')
  const [inprogress, setInprogress] = useState(false)

  const dimensions = [
    {width:'1152', height:'768'},
    {width:'1088', height:'896'},
    {width:'1024', height:'1024'},
    {width:'896', height:'1088'},
    {width:'768', height:'1152'},
  ]
  const slider1 = useRef('slider')
  if(slider1.current.style){
    const percentage = (100/(dimensions.length-1))*(dimension)
    slider1.current.style.background = `linear-gradient(to right, #373296 0%, #373296 ${percentage}%, #fff ${percentage}%, white 100%)`
  }

  const generateImage = () =>{
    setInprogress(true)
    setPrompt('')
    setNegativePrompt('')
    console.log(prompt);
    setInterval(()=>{
      setInprogress(false)
    },3000)
  }
  return (
    <div className="flex gap-10 w-[90%] m-auto py-10">
      {/* Generate Part  */}
      <div className="w-full">
        <div>
          <div>
            <label className="opacity-60 text-sm" htmlFor="describe">Describe your image</label>
          </div>
          <textarea
            className=" mt-1 mb-4 shadow overflow-y-hidden w-full bg-zinc-700 bg-opacity-60 border border-zinc-700 rounded-xl leading-relaxed text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50 min-h-[130px]"
            id="describe"
            placeholder="A beautiful girl"
            onChange={e=>setPrompt(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label className="opacity-60 text-sm" htmlFor="negative">Negative Prompt (optional)</label>
          </div>
          <textarea
            className="mt-1 shadow overflow-y-hidden w-full bg-zinc-700 bg-opacity-60 border border-zinc-700 rounded-xl leading-relaxed text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50 h-[40px]"
            id="negative"
            placeholder="text, blurry"
            onChange={e=>setPrompt(e.target.value)}
          />
        </div>
        <div>
          <button 
            className="bg-indigo-700 rounded-xl px-5 py-1 text-sm font-semibold mt-3 float-right disabled:bg-slate-400"
            disabled={!(!inprogress && prompt.length>0)}
            onClick={generateImage}
          >
            Generate
          </button>
        </div>
      </div>

      {/* Settings Part  */}
      <div className="w-2/6  ring-1 ring-zinc-700 p-5 rounded-xl mt-7">
        <div className="slidecontainer">
          <label htmlFor="dimensions" className="opacity-60" > Dimensions </label>
          <input id="dimension" ref={slider1} type="range" min="0" max={dimensions.length-1} value={dimension} 
            className={`${styles.slider} `}
            onChange={e=>setDimension(e.target.value)}
          />
          <p className="text-center">{dimensions[dimension].width} x {dimensions[dimension].height}</p>
        </div>
      </div>
    </div>
  );
}

export default Generate;
