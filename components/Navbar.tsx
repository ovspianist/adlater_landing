import React from 'react'
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-col w-full items-center py-3 lg:py-12 bg-gradient-to-b from-neutral-900 to-transparent">
      <div className="flex flex-row w-full lg:w-[1200px] max-w-[90vw] justify-between items-center px-1 py-2 border-0 border-red-500 ">
        <div>
          <Link href="/" className="flex flex-row gap-3 items-center text-xl font-bold">
            <img src="/icon.png" className="w-12 h-12 invert"></img>
            </Link>
        </div>
        <div>
          <Link href="/" className="text-lg font-medium hover:font-bold hover:bg-gradient-to-r from-red-500 to-indigo-700 px-3 py-2 rounded-lg " >Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar