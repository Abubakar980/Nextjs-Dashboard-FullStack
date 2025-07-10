"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(()=>{
    redirect('/dashboard/admin')
  },[])
  return (
    <div className=''>Homepage</div>
  )
}

export default Homepage