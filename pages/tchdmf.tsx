import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Divider from "../components/Divider";

function showreel() {
    return (
        <div>
            <Head>
                <title> Ad Later - Showreel </title>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <div className="min-h-[100vh]">
                <Navbar />

                <div className="flex flex-col w-full h-[450px] md:h-[550px] lg:h-[600px] px-8 items-center select-none">
                    <h1 className="text-lg sm:text-2xl lg:text-[32px] pt-8 md:pt-4 lg:pt-0 pb-8">
                        Showreel ﹒ Investor
                    </h1>

                    <iframe
                        src="https://player.vimeo.com/video/820330843?h=15b4cbc65c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        width="100%"
                        height="100%"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Ad Later Technical Showreel"
                    ></iframe>
                </div>
                <div className="flex flex-col w-full items-center select-none">
                    <p className="text-xs sm:text-md font-light lg:text-lg py-5 text-neutral-400 ">
                        Password is provided with pitch deck or available upon request.
                    </p>
                </div>
                <Divider />
                <div className="flex flex-col items-center gap-2 pt-0 pb-10 select-none">
                    <a href="https://forms.gle/bbr2mkbvTcRHP5WD7" target="_blank">
                        <button className="text-sm sm:text-xl px-4 py-2 sm:py-4 sm:px-8
                         border-t-[1px] border-t-neutral-400 bg-gradient-to-r from-red-500 to-indigo-700 
                         rounded-lg sm:rounded-xl shadow-xl shadow-[rgba(0,0,0,0.2)]">
                            Join our mailing list
                        </button>
                    </a>
                    <p className="text-xs md:text-base font-light drop-shadow-sm">
                        to receive updates, news and other information.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default showreel;
