import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../component/Footerr";
import Navbar from "../component/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
     <title>Home</title>
    </Head>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Navbar />
        <section className="text-white body-font bg-gray-800">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row space-y-0">
            <div className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:mr-20 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center space-y-2.5">
              <h2 className="mb-1 text-xl font-medium tracking-widest text-white title-font">
                Hello !
              </h2>
              <h1 className="mb-8 text-blue-400 text-center tracking-tighter text-6xl">
                I'm <b>Aryadi</b> Pramarta
              </h1>
              
              <p className="mb-8 text-2xl leading-relaxed text-center lg:text-left lg:text-1xl text-blue-400">
                Mobile Application Developer and Data Scientist
              </p>
                 <p className="mb-8 mt text-base leading-relaxed text-center text-white lg:text-left lg:text-1xl">
                I'm a Mobile Application Developer and Data Scientist based in
                Bandung, Indonesia specializing in building and sometimes
                designing high quality application and analyst data with machine
                learning
              </p>
              <div className="flex justify-center">
                <button class="mt-4 bg-transparent hover:bg-gray-600 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                  See My CV
                </button>
              </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <img
                  className="object-cover object-center rounded-lg shadow-2xl"
                  alt="hero"
                  src="/tesfoto1.png"
                ></img>
              </motion.div>
            </div>
          </div>
        </section>
        <Footer />
      </motion.div>
    </>
  );
}
