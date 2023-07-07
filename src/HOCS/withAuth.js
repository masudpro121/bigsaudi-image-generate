import { MyContext } from "@/pages/_app";
import Signin from "@/pages/signin";
import { useContext, useEffect, useState } from "react";

const withAuth = Component => {
  const Auth = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState("null")
    const {user:{ email}} = useContext(MyContext)
    useEffect(()=>{
      if(email){
        setIsLoggedIn(true)
      }
      if(!email){
        setIsLoggedIn(false)
      }
    },[])
    if(isLoggedIn=="null"){
      return ""
    }
    if (!isLoggedIn) {
      return (
        <Signin />
      );
    }
    return (
      <Component {...props}  />
    );
  };
  return Auth;
};

export default withAuth;