import React from 'react'

function ContactCard() {
  return (
    <div className="flex flex-col items-center w-full py-10">
      {/* <div className=" p-[1px] rounded-2xl bg-gradient-to-b from-zinc-500 to-transparent"> */}
        <div className="flex flex-col min-w-[450px] w-10/12 lg:w-full items-center justify-center gap-2 w-8/12 p-8 max-w-xl bg-[rgba(50,50,50,0.3)] backdrop-blur-lg rounded-2xl
        border-t-[1px] border-t-neutral-600 shadow-xl shadow-[rgba(0,0,0,0.15)]">
          <div className="text-2xl font-medium pb-4 text-neutral-300 ">Contact</div>
            <div className="flex flex-row items-center gap-8">
              <div className="text-lg font-medium opacity-40 w-48 text-right"> General Inquiry </div>
              <div className="text-lg font-thin w-48 text-left"> info@adlater.co.uk </div>
            </div>
            <div className="flex flex-row items-center gap-8">
              <div className="text-lg font-medium opacity-40 w-48 text-right"> Investor </div>
              <div className="text-lg font-thin w-48 text-left"> invest@adlater.co.uk </div>
            </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default ContactCard