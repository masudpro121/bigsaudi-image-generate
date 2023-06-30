import { MyContext } from "@/pages";
import Image from "next/image";
import React, { useContext, useState } from "react";

function ShowImages() {
  const { generatedImage, setGeneratedImage, dimension, sample } = useContext(MyContext);
  const [variantImages, setVariantImages] = useState({});
  const [inProgress, setInprogress] = useState(false);
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
      <div className="px-10 flex gap-5 flex-wrap">
        {generatedImage.output &&
          generatedImage.output.map((item, i) => {
            return (
              <div key={i}>
                <Image
                  className=" rounded-sm ring-2 ring-gray-400"
                  src={item}
                  width={300}
                  height={200}
                  alt="Picture of the author"
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
      </div>
      {/* Variant images  */}
      {/* <div className="px-10 flex gap-5 mt-10">
        {variantImages.output &&
          variantImages.output.map((item, i) => {
            return (
              <div key={i}>
                <Image
                  className=" rounded-sm ring-2 ring-gray-400"
                  src={item}
                  width={variantImages.meta.W || 640}
                  height={variantImages.meta.H || 480}
                  alt="Picture of the author"
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
      </div> */}
    </div>
  );
}

export default ShowImages;
