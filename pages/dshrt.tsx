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
                <title> Showreel </title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-[100vh]">
              <Navbar />

              <div className="flex flex-col w-full h-[450px] md:h-[550px] lg:h-[600px] px-8 items-center">
                <h1 className="text-2xl lg:text-[32px] pt-8 md:pt-4 lg:pt-0 pb-8">Showreel ﹒ Investor</h1>
                <iframe
                    src="https://player.vimeo.com/video/689902544?h=1c8590a277"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                ></iframe>
              </div>
              <div className="flex flex-col w-full items-center">
                <p className="text-md font-light lg:text-lg py-5 text-neutral-400 ">Password is provided with pitch deck or available upon request.</p>
              </div>
              <Divider />
              <div className="flex flex-col items-center gap-2 pt-0 pb-10">
                <a href="https://forms.gle/bbr2mkbvTcRHP5WD7" target="_blank">
                <button className="text-xl py-4 px-8 border-t-[1px] border-t-neutral-400 bg-gradient-to-r from-red-500 to-indigo-700 rounded-xl shadow-xl shadow-[rgba(0,0,0,0.2)]">Join our mailing list</button>
                </a>
                <p className="font-light drop-shadow-sm">to receive updates, news and other information.</p>
              </div>
            </div>
        </div>
    );
}

export default showreel;
