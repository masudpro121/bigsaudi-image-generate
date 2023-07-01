import { MyContext } from "@/pages";
import Image from "next/image";
import React, { useContext, useState } from "react";
// import BlurImg from '@/assets/img/blur.jpg'
import LoadingGif from '@/assets/img/loading.gif'
function ShowImages() {
  const { generatedImage, setGeneratedImage, inprogress, setInprogress } = useContext(MyContext);
  const [variantImages, setVariantImages] = useState({});
  
  const generateVariant = (img) => {
    setInprogress(true);
    const server = window.location.origin;
    const data = {
      image: img,
      meta: generatedImage.meta
    };
    fetch(server + "/api/image-to-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        const { id, meta, output } = result;
        setGeneratedImage({...generatedImage, output: [...generatedImage.output, ...output]});
        setInprogress(false);
      })
      .catch((err) => {
        setInprogress(false);
        console.log(err);
      });
  };

  return (
    <div>
      <div className="px-10 flex gap-5 flex-wrap justify-center">
        {!inprogress && generatedImage.output &&
          generatedImage.output.map((item, i) => {
            return (
              <div key={i}>
                <Image
                  className=" rounded-sm ring-2 ring-gray-400"
                  src={item}
                  width={300}
                  height={200}
                  alt="Picture of the author"
                  onLoad={(e)=>console.log(e)}
                />
                <button
                  onClick={() => generateVariant(item)}
                  className="mt-2 py-1 rounded-sm bg-indigo-500 text-sm font-bold w-full"
                >
                  Variant {i + 1}
                </button>
              </div>
            );
          })}
          {
            inprogress &&
            <div>
              <Image src={LoadingGif} height="200" width="200" />
            </div>
          }
      </div>
     
    </div>
  );
}

export default ShowImages;
