import React from 'react'
import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
        <div className="flex flex-col items-center gap-1">
        <ClipLoader size={60} color="blue" loading={true} />
        </div>
    </div>
  )
}

export default Loader