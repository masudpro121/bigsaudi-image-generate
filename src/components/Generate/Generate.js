import React, { useEffect, useRef, useState } from "react";
import styles from './generate.module.css'
function Generate() {
  const [dimension, setDimension] = useState(3)
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
  return (
    <div>
      {/* Generate Part  */}
      <div>
        <div>
          <div>
            <label htmlFor="describe">Describe your image</label>
          </div>
          <textarea
            className="shadow overflow-y-hidden w-full bg-zinc-700 bg-opacity-60 border border-zinc-700 rounded-xl leading-relaxed text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50"
            id="describe"
            placeholder="A beautiful girl"
          ></textarea>
        </div>
        <div>
          <div>
            <label htmlFor="negative">Negative Prompt (optional)</label>
          </div>
          <textarea
            className="shadow overflow-y-hidden w-full bg-zinc-700 bg-opacity-60 border border-zinc-700 rounded-xl leading-relaxed text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50"
            id="negative"
            placeholder="text,blurry"
          ></textarea>
        </div>
        <div>
          <button className="bg-btn rounded-xl px-5 py-1 text-sm font-semibold">
            Generate
          </button>
        </div>
      </div>

      {/* Settings Part  */}
      <div>
        <div className="slidecontainer">
          <input ref={slider1} type="range" min="0" max={dimensions.length-1} value={dimension} 
            className={styles.slider }
            onChange={e=>setDimension(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Generate;
