import Head from "next/head";
import Image from "next/image";
import { Inter, Lexend } from "next/font/google";
import Navbar from "../components/Navbar";
import Divider from "../components/Divider";
import ContactCard from "../components/ContactCard";

export default function Home() {
    return (
        <div>
            <Head>
                <title> Ad Later </title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-[100vh]">
                <Navbar />
                <div className="flex flex-col justify-center items-center my-12 gap-3 border-0 border-red-500 select-none">
                    <div className="text-[36px] sm:text-[80px] lg:text-[100px] 
                    font-bold tracking-tighter drop-shadow-xl shadow-neutral-950">
                        Ad Later
                    </div>
                    <div
                        className="text-md sm:text-[18px] font-medium text-neutral-400 
                        w-8/12 sm:w-10/12
                        text-center drop-shadow-lg shadow-neutral-950 
                        lg:text-[32px] lg:w-6/12"
                    >
                        One stop platform for on-demand, targeted, affordable brand placement in
                        film and TV.
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 mt-20 mb-20 select-none">
                    <p className="text-xs sm:text-base font-light drop-shadow-sm">Coming Soon</p>
                    <a href="https://forms.gle/bbr2mkbvTcRHP5WD7" target="_blank">
                    <button className="text-sm sm:text-xl px-4 py-2 sm:py-4 sm:px-8 border-t-[1px]
                     border-t-neutral-400 bg-gradient-to-r from-red-500 to-indigo-700 
                     rounded-lg sm:rounded-xl shadow-xl shadow-[rgba(0,0,0,0.2)]">
                        Join our mailing list
                    </button>
                    </a>
                    <p className="border-0 border-red-500 justify-center text-xs md:text-base font-light drop-shadow-sm">
                        to receive updates, news and other information.
                    </p>
                </div>
                <Divider />
                <ContactCard />
            </div>
        </div>
    );
}
