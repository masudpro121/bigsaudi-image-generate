import React, { useEffect } from 'react'

function cancel() {
  useEffect(()=>{
    console.log(window);
  },[])
  return (
    <div>cancel</div>
  )
}

export default cancel