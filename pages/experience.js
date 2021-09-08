import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../component/Footerr";
import Navbar from "../component/Navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <Navbar />
      <section className="text-gray-700 body-font bg-gray-800">
        <div className="container px-8 mx-auto py-36 lg:px-4">
          <motion.div
            initial={{
              y: -100,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2 className="mb-1 text-5xl font-medium tracking-widest text-blue-400 title-font text-center">
              EXPERIENCE
            </h2>
          </motion.div>
          <div className="flex flex-wrap text-left divide-x divide-blue-400">
            <div className="px-8 py-6 lg:w-1/3 md:w-full">
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
                <img
                  className="object-cover object-center w-full h-80 mb-6 rounded"
                  src="/cimbniaga.png"
                  alt="content"
                ></img>
                <h2 className="mb-3 text-lg font-semibold text-blue-400 lg:text-2xl title-font text-center">
                  DATA ANALYST
                </h2>
                <p className="mb-4 text-base leading-relaxed text-white text-justify">
                  Helping and exploring data from database to make a decision
                  and campaign that give impact to the company
                </p>
              </motion.div>
            </div>
            <div className="px-8 py-6 lg:w-1/3 md:w-full">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 2,
                }}
              >
                <img
                  className="object-cover object-center w-full h-80 mb-6 rounded"
                  src="/diskominfoslogo.png"
                  alt="content"
                ></img>
                <h2 className="mb-3 text-lg font-semibold text-blue-400 lg:text-2xl title-font text-center">
                  FULL STACK PROGRAMMER
                </h2>
                <p className="mb-4 text-base leading-relaxed text-white text-justify">
                  Help ini creating a System Information Management Asset, Doing
                  an analysis of existing data on database and the business
                  process
                </p>
              </motion.div>
            </div>
            <div className="px-8 py-6 lg:w-1/3 md:w-full">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 2.5,
                }}
              >
                <img
                  className="object-cover object-center w-full h-80 mb-6 rounded"
                  src="/telkomlogo.png"
                  alt="content"
                ></img>
                <h2 className="mb-3 text-lg font-semibold text-blue-400 lg:text-2xl title-font text-center">
                  PRACTICUM ASSISTANT LABORATORY
                </h2>
                <p className="mb-4 text-base leading-relaxed text-white text-justify">
                  Teach students to understand about the operating system, Give
                  an assignment to the student and Help Lecturer to grade
                  student practicum modules
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
