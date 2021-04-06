import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../component/Footerr";
import Navbar from "../component/Navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <section className="text-white body-font  bg-gray-800">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
              <img
                className="object-cover object-center rounded shadow-2xl"
                alt="hero"
                src="/tesfoto1.png"
              ></img>
            </div>
          </motion.div>
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left space-y-2">
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <h2 className="mb-1 text-5xl font-medium tracking-widest text-blue-400 title-font">
                ABOUT ME
              </h2>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              <p className="mb-8 text-base leading-relaxed text-center text-white lg:text-left lg:text-1xl">
                Hello, I'm Aryadi , a <i>Machine Learning Enthusiast </i> and{" "}
                <i>Data Enthusiast </i> based in Bandung , Indonesia I like to
                analyst data , visualisation data , finding insight from data
                and implemented machine learning to solve problem and predict
                from the data
              </p>
              <p className="mb-8 text-base leading-relaxed text-center text-white lg:text-left lg:text-1xl">
                Im from <i>Telkom University</i>. I have good skill in critical
                thinking and problem solving. I love to learn something new. I'm
                an adaptable person. I'm person that Intellectual curiosity and
                have a good business acumen
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
