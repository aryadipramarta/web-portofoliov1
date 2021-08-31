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
                Data Enthusiast
              </p>
              <p className="mb-8 mt text-base leading-relaxed text-center text-white lg:text-left lg:text-1xl">
                Insightful <b> Computer Science </b> student who have a strong
                knowledge at <b> Python </b> and <b> Machine Learning </b>. Have
                a good skill in <b> problem solving </b> and{" "}
                <b> critical thinking </b>. Great at <b> time management </b>,
                every task has been scheduled properly. Experienced using{" "}
                <b> google analytics </b> session data, gaining insights using
                <b> SQL </b> and <b> Python </b>, and self-service automation
                using <b> Tableau </b>. Seeking to leverage data analytical
                skills to improve corporate performance as a data analyst.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://drive.google.com/file/d/1-XFqNFFr7lFluWkimm7e3qBq0k22TiP2/view?usp=sharing"
                  passHref={true}
                >
                  <button class="mt-4 bg-transparent hover:bg-gray-600 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                    See My CV
                  </button>
                </Link>
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
