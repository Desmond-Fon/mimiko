import hero from "../../assets/cat1.png";
import hero2 from "../../assets/cat2.png";
import x from "../../assets/twitter.svg";
import tg from "../../assets/tg.svg";
import dex from "../../assets/dex.svg";
import dax from "../../assets/tools.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Landing() {

  const [copied, setCopied] = useState(false);

  // Sample Contract Address (replace with your actual CA)
  const contractAddress = "xxxxxxxxxxxxxxxxxxxxxxxx";

  // Summarize CA (first 6 and last 4 characters)
  const summarizedCA = `${contractAddress.slice(
    0,
    9
  )}...${contractAddress.slice(-4)}`;

  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };
  
  return (
    <div className="px-6 md:px-16 bg-gray-50 min-h-screen flex flex-col">
      {/* Top Nav Area */}
      <div className="flex justify-between items-center py-6">
        {/* <button className="px-3 py-2 lg:px-6 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
          Get Started
        </button> */}
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 lg:py-3 px-1 lg:px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center">
          <span>Get Started</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>

        <div className="flex items-center gap-4">
          <Link
            to="https://x.com/HOUSE_CAT_SOL?t=TO-T-4DhKsl0HGCWLswZiQ&s=09"
            target="_blank"
            rel="noreferrer"
          >
            <img src={x} alt="X" className="w-8 md:w-10" />
          </Link>
          <Link to="https://dexscreener.com/" target="_blank" rel="noreferrer">
            <img src={dex} alt="Dexscreener" className="w-8 md:w-10" />
          </Link>
          <Link
            to="https://t.me/housecatportal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tg} alt="Telegram" className="w-8 md:w-10" />
          </Link>
          <Link to="/">
            <img src={dax} alt="Dax" className="w-8 md:w-10" />
          </Link>
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-amber-200 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-rose-200 rounded-full opacity-40 blur-xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="order-2 md:order-1 px-4 py-6 relative z-10">
              {/* <div className="mb-4 inline-block">
                <span className="bg-amber-700 text-amber-50 px-4 py-1 rounded-full text-sm font-medium tracking-wider">
                  SOLAMEOW
                </span>
              </div> */}

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-900 leading-tight mb-4">
                HOUSE CAT
              </h1>

              <div className="h-1 w-24 bg-amber-500 mb-6 rounded-full"></div>

              <p className="text-xl sm:text-2xl text-amber-800 font-medium mb-4">
                She's got a house for a head. And you live in it now.
              </p>

              <p className="text-lg text-amber-700 mb-8">
                The coziest house cat on Solameow
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                  <span>Buy Now</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>

                {/* <a href="#learn">
                  <button className="bg-white hover:bg-amber-50 text-amber-700 font-medium py-3 px-8 rounded-full shadow-md border border-amber-200 transform hover:-translate-y-1 transition-all duration-300">
                    Learn More
                  </button>
                </a> */}
              </div>

              {/* New Contract Address Section */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-amber-800 font-mono text-sm sm:text-xl bg-amber-200 px-4 py-2 rounded-md">
                  {summarizedCA}
                </span>
                <button
                  onClick={handleCopy}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-full shadow-md transform hover:-translate-y-1 transition-all duration-300 flex items-center text-sm"
                >
                  {copied ? (
                    <span>Copied!</span>
                  ) : (
                    <>
                      <span>Copy CA</span>
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Paw prints decoration */}
              <div className="absolute bottom-0 left-4 opacity-20 hidden md:block">
                <div className="flex space-x-3">
                  <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
                  <div className="w-3 h-3 bg-amber-900 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right side - Image with house roof decoration */}
            <div className="order-1 md:order-2 relative">
              {/* House roof decoration */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-1/2 h-24 bg-amber-800 opacity-10 rounded-t-3xl"></div>

              {/* Image container with house-shaped frame */}
              <div className="relative bg-gradient-to-b from-amber-300 to-amber-400 rounded-lg shadow-xl p-4 mx-auto max-w-md">
                {/* House chimney */}
                <div className="absolute -top-6 right-1/4 w-8 h-12 bg-amber-700 opacity-30 rounded-t-lg"></div>

                {/* Image placeholder */}
                <div className="bg-amber-100 rounded-lg aspect-square w-full overflow-hidden relative">
                  <img
                    src={hero}
                    alt="House Cat"
                    className="w-full h-full object-cover"
                  />

                  {/* Windows overlay */}
                  <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white opacity-40 rounded-lg"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white opacity-40 rounded-lg"></div>
                </div>

                {/* Stats at the bottom */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded p-2">
                    <div className="text-amber-800 font-bold">0</div>
                    <div className="text-amber-600 text-xs">Holders</div>
                  </div>
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded p-2">
                    <div className="text-amber-800 font-bold">Infinity</div>
                    <div className="text-amber-600 text-xs">Catnips</div>
                  </div>
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded p-2">
                    <div className="text-amber-800 font-bold">91%</div>
                    <div className="text-amber-600 text-xs">Cozy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-br from-amber-100 to-rose-100 py-16 px-4 md:px-8 lg:px-16 rounded-xl shadow-lg max-w-4xl mx-auto my-12">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-12 -left-8 w-16 h-16 bg-amber-300 rounded-full opacity-40 hidden md:block"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-rose-300 rounded-full opacity-30 hidden md:block"></div>
          <div className="absolute top-1/3 right-12 w-8 h-8 bg-amber-400 rounded-full opacity-40 hidden md:block"></div>

          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-2 tracking-tight">
              Meet Mimi
            </h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-lg text-amber-900 leading-relaxed mb-4">
                Just a regular house cat:{" "}
                <span className="font-semibold">lazy, fluffy, chaotic.</span>
              </p>
              <p className="text-lg text-amber-900 leading-relaxed mb-4">
                Except her head is shaped like a house. And when you bought that
                first bag, you moved in.
              </p>
            </div>

            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-lg text-amber-900 leading-relaxed">
                She naps all day, trades shitcoins at night, and runs a secret
                second life full of mischief and microwave noise.
              </p>

              <div className="mt-6 flex justify-center">
                <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full font-medium transform hover:scale-105 transition-transform duration-300 flex items-center">
                  <span>Join Mimi's World</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Paw prints */}
          <div className="hidden md:block absolute -bottom-8 left-1/4 transform rotate-12">
            <div className="w-4 h-4 bg-amber-800 rounded-full opacity-30"></div>
            <div className="w-3 h-3 bg-amber-800 rounded-full opacity-30 ml-6 -mt-1"></div>
            <div className="w-3 h-3 bg-amber-800 rounded-full opacity-30 ml-12 mt-2"></div>
          </div>
        </div>
      </section>

      <section
        id="learn"
        className="bg-gradient-to-br from-rose-100 to-amber-100 py-16 px-4 md:px-8 lg:px-16 rounded-xl shadow-lg max-w-4xl mx-auto my-12"
      >
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-8 w-16 h-16 bg-rose-300 rounded-full opacity-40 hidden md:block"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-300 rounded-full opacity-30 hidden md:block"></div>
          <div className="absolute top-1/3 left-12 w-8 h-8 bg-rose-400 rounded-full opacity-40 hidden md:block"></div>

          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-2 tracking-tight">
              What is Mimoko?
            </h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <ul className="list-none space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span className="text-lg text-amber-900">
                    A memecoin with zero utility
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span className="text-lg text-amber-900">
                    No staking. No NFTs. No whitepaper
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  <span className="text-lg text-amber-900">
                    Just vibes & meows
                  </span>
                </li>
              </ul>

              <p className="text-xl text-amber-800 font-medium mt-6">
                She is the house. The house always wins.
              </p>

              <div className="mt-6 flex justify-center">
                <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full font-medium transform hover:scale-105 transition-transform duration-300 flex items-center">
                  <span>Join Mimoko</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Image container with house-shaped frame */}
            <div className="relative bg-gradient-to-b from-rose-300 to-rose-400 rounded-lg shadow-xl p-4 mx-auto max-w-md transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* House chimney */}
              <div className="absolute -top-6 right-1/4 w-8 h-12 bg-rose-700 opacity-30 rounded-t-lg"></div>

              {/* Image placeholder */}
              <div className="bg-rose-100 rounded-lg aspect-square w-full overflow-hidden relative">
                <img
                  src={hero2}
                  alt="Mimoko"
                  className="w-full h-full object-cover"
                />

                {/* Windows overlay */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white opacity-40 rounded-lg"></div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white opacity-40 rounded-lg"></div>
              </div>

              {/* Stats at the bottom */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded p-2">
                  <div className="text-rose-800 font-bold">0</div>
                  <div className="text-rose-600 text-xs">Utility</div>
                </div>
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded p-2">
                  <div className="text-rose-800 font-bold">100%</div>
                  <div className="text-rose-600 text-xs">Vibes</div>
                </div>
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded p-2">
                  <div className="text-rose-800 font-bold">∞</div>
                  <div className="text-rose-600 text-xs">Meows</div>
                </div>
              </div>
            </div>
          </div>

          {/* Paw prints */}
          <div className="hidden md:block absolute -bottom-8 right-1/4 transform -rotate-12">
            <div className="w-4 h-4 bg-amber-800 rounded-full opacity-30"></div>
            <div className="w-3 h-3 bg-amber-800 rounded-full opacity-30 ml-6 -mt-1"></div>
            <div className="w-3 h-3 bg-amber-800 rounded-full opacity-30 ml-12 mt-2"></div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50 to-rose-50 py-16 px-4 md:px-8 lg:px-16 rounded-xl shadow-lg max-w-4xl mx-auto my-12">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-6 w-20 h-20 bg-amber-200 rounded-full opacity-40 hidden md:block"></div>
          <div className="absolute bottom-10 right-4 w-16 h-16 bg-rose-200 rounded-full opacity-30 hidden md:block"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-amber-300 rounded-full opacity-40 hidden md:block"></div>

          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-2 tracking-tight">
              Why you ask?
            </h2>
            <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Text content - centered without image */}
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md transform hover:rotate-1 transition-transform duration-300">
              <div className="space-y-6">
                <p className="text-2xl text-amber-900 leading-relaxed text-center">
                  Because life is hard. You deserve fluff.
                </p>

                <p className="text-2xl text-amber-900 leading-relaxed text-center">
                  Because your bags are down. But Mimi's belly is full.
                </p>

                <p className="text-2xl text-amber-900 leading-relaxed text-center">
                  Because the only thing real anymore is the cat sleeping on
                  your keyboard.
                </p>
              </div>

              <div className="mt-10 flex justify-center">
                <button className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-8 rounded-full font-medium transform hover:scale-105 transition-transform duration-300 flex items-center shadow-md">
                  <span>Get Comfy</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Paw prints */}
          <div className="hidden md:block absolute -bottom-6 left-1/3 transform rotate-45">
            <div className="w-4 h-4 bg-amber-800 rounded-full opacity-30"></div>
            <div className="w-3 h-3 bg-amber-800 rounded-full opacity-30 ml-5 mt-2"></div>
            <div className="w-3 h-3 bg-amber-800 rounded-full opacity-30 ml-3 mt-4"></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background with subtle paw patterns */}
        <div className="relative bg-gradient-to-br from-amber-100 to-rose-100 rounded-3xl shadow-lg overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            {/* SVG paw pattern overlay */}
            <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-amber-200 opacity-40 blur-md"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-rose-200 opacity-40 blur-md"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-amber-300 opacity-30 blur-md"></div>
          </div>

          <div className="relative z-10 py-14 px-6 sm:px-10 md:px-16">
            <div className="text-center mb-10">
              {/* <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-3 tracking-tight">
                Vibe Buttons
              </h2> */}
              {/* <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-6"></div> */}
              <p className="text-xl text-amber-700 max-w-xl mx-auto">
                All the ways to bring more Mimoko into your life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* BUY Button */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-rose-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <button
                  className="relative flex items-center justify-center w-full py-5 bg-white rounded-xl shadow-md border border-amber-200 transition duration-300 hover:shadow-lg"
                  disabled
                >
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs rounded-bl-lg rounded-tr-lg py-1 px-2 font-medium">
                    COMING SOON
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 text-transparent bg-clip-text mr-3">
                    BUY
                  </span>
                  <svg
                    className="w-6 h-6 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* JOIN THE NEIGHBORHOOD Button */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-rose-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <a
                  href="#"
                  className="relative flex items-center justify-center w-full py-5 bg-white rounded-xl shadow-md border border-amber-200 transition duration-300 hover:shadow-lg"
                >
                  <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 text-transparent bg-clip-text ">
                    JOIN THE NEIGHBORHOOD
                  </span>
                </a>
              </div>

              {/* MEME GALLERY Button */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-rose-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <a
                  href="#"
                  className="relative flex items-center justify-center w-full py-5 bg-white rounded-xl shadow-md border border-amber-200 transition duration-300 hover:shadow-lg"
                >
                  <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 text-transparent bg-clip-text mr-3">
                    MEME GALLERY
                  </span>
                  <svg
                    className="w-6 h-6 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden md:block absolute -bottom-4 left-10 transform rotate-12">
              <div className="w-4 h-4 bg-amber-800 rounded-full opacity-30"></div>
              <div className="w-3 h-3 bg-amber-800 rounded-full opacity-30 ml-6 mt-2"></div>
              <div className="w-3 h-3 bg-amber-800 rounded-full opacity-30 ml-10 mt-1"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-amber-50 to-amber-100 pt-12 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="relative pb-10 text-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-30 blur-md"></div>
            <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-rose-200 rounded-full opacity-30 blur-md"></div>

            {/* Tagline */}
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6 tracking-tight relative inline-block">
              "Meow is temporary. Mimoko is forever."
              <div className="h-1 w-1/2 bg-amber-400 mx-auto rounded-full mt-2"></div>
            </h2>

            {/* Cat Silhouette */}
            <div className="w-24 h-24 mx-auto relative my-6">
              <div className="absolute inset-0 bg-amber-800 opacity-20 rounded-full blur-sm"></div>
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 w-3 h-3 bg-amber-800 opacity-30 rounded-full"></div>
              <div className="absolute left-1/4 top-0 w-3 h-3 bg-amber-800 opacity-30 rounded-full"></div>
              <div className="absolute right-1/4 top-0 w-3 h-3 bg-amber-800 opacity-30 rounded-full"></div>
            </div>
          </div>

          {/* Footer Links & Info */}
          <div className="border-t border-amber-200 pt-6 flex flex-col md:flex-row justify-center items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-amber-700 text-sm">
                © 2025 Mimoko. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
