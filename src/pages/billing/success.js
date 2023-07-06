import React, { useEffect } from 'react'
import { useCookies } from "react-cookie";
function success() {
  const [cookies, setCookie, removeCookie] = useCookies(['my-cookie']);
  useEffect(()=>{
    fetch('/api/payment/verify?id='+cookies['st-client-id'])
    .then(res=>res.json())
    .then(res=>{
      console.log(res.status);
      if(res.status=='already credited' || res.status == 'credited'){
        window.location.href = "/"
      }
      if(res.status=='not paid'){
        window.location.href = res.url
      }
    })
  },[])
  return (
    <div>success</div>
  )
}

export default success