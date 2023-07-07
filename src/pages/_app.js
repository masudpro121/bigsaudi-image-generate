import AppLayout from "@/components/Layouts/AppLayout";
import "@/styles/globals.css";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
export const MyContext = createContext();
export default function App({ Component, pageProps }) {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie']);

  const [generatedImage, setGeneratedImage] = useState({});
  const [inprogress, setInprogress] = useState(false);
  const [dimension, setDimension] = useState(0);
  const [sample, setSample] = useState(4);
  const [user, setUser] = useState({})
  useEffect(()=>{
    setUser({name:cookies.name, email:cookies.email})
  },[])
  const value = {
    generatedImage,
    setGeneratedImage,
    dimension,
    setDimension,
    sample,
    setSample,
    inprogress,
    setInprogress,
    user, setUser
  };
  return (
    <MyContext.Provider value={value}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </MyContext.Provider>
  );
}
