import React, { useEffect } from 'react'
function success() {
  useEffect(()=>{
    fetch('/api/payment/verify')
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