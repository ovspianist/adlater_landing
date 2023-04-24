import React from 'react'

function ContactCard() {
  return (
    <div className="flex flex-col items-center w-full py-10">
      {/* <div className=" p-[1px] rounded-2xl bg-gradient-to-b from-zinc-500 to-transparent"> */}
        <div className="flex flex-col min-w-[280px] w-9/12 lg:w-full items-center justify-center 
        gap-2 sm:w-8/12 p-4 sm:p-8 max-w-xl bg-[rgba(50,50,50,0.3)] backdrop-blur-lg rounded-2xl
        border-t-[1px] border-t-neutral-600 shadow-xl shadow-[rgba(0,0,0,0.15)]">
          <div className="text-lg sm:text-2xl font-medium pb-1 sm:pb-4 text-neutral-300 select-none">Contact</div>
            <div className="flex flex-row items-center gap-8">
              <div className="text-xs sm:text-lg font-medium opacity-40 w-24 sm:w-48 text-right select-none"> General Inquiry </div>
              <div className="text-xs sm:text-lg font-thin w-24 sm:w-48 text-left"> info@adlater.co.uk </div>
            </div>
            <div className="flex flex-row items-center gap-8">
              <div className="text-xs sm:text-lg font-medium opacity-40 w-24 sm:w-48 text-right select-none"> Investor </div>
              <div className="text-xs sm:text-lg font-thin w-24 sm:w-48 text-left"> invest@adlater.co.uk </div>
            </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default ContactCard