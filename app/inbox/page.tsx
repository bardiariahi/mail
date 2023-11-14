import React from 'react'
import Headers from '../Headers'

export default function Page() {
  return (
    <>
    <Headers />
    <div className="flex gap-4 w-full rounded-md bg-[#F1F5F9] p-4">
      <div className=" md:w-3/12 lg:w-2/12 ">
        search
      </div>
      <div>
        inbox
      </div>
    </div>
    </>
  )
}
