import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 p-6">

      <div className="relative sm:mt-40 lg:mt-50 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/adlater.svg"
          alt="AdLater Logo"
          width={300}
          height={37}
          priority
        />
      </div>
      <div>
        <p className="font-serif text-2xl relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:text-gray-200 ">Coming soon ... </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Showreel{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            If you are given a password, please click here to watch.
          </p>
        </a>


      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
        className="relative dark:invert"
          src="/icon.png"
          alt="AdLater Logo"
          width={50}
          height={37}
        />        
        <p
            className={`${inter.className} mt-5 max-w-[30ch] text-sm opacity-50`}
          >
            General Inquiry: info@adlater.co.uk
          </p>

      </div>
    </main>
  )
}
