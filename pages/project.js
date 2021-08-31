import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../component/Footerr";
import Navbar from "../component/Navbar";
import Head from "next/head";

function project() {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <Navbar />
      <section className="body-font bg-gray-800">
        <div className="container px-8 mx-auto py-36 lg:px-4">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h2 className="mb-1 text-5xl font-medium tracking-widest text-blue-400 title-font text-center">
              PROJECT
            </h2>
          </motion.div>
          <div className="flex flex-wrap text-center">
            <div className="px-8 py-6 lg:w-1/3 md:w-full">
              <motion.div
                initial={{
                  y: 100,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded shadow-2xl"
                  src="/knn.png"
                  alt="content"
                ></img>
                <h2 className="mb-3 text-lg font-semibold text-blue-400 lg:text-2xl title-font">
                  {" "}
                  Sentiment Analysis Tweet For COVID19 Vaccine
                </h2>
                <p className="mb-4 text-base leading-relaxed text-white">
                  Create an analysis classify for a tweet that talking about the
                  COVID19 Vaccine in Indonesia
                </p>
                <div className="flex justify-center">
                  <Link
                    href="https://github.com/aryadipramarta/Sentiment-Analysis-Twitter-Classification"
                    passHref={true}
                  >
                    <button className="flex items-center px-4 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
                      Link Github
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="px-8 py-6 lg:w-1/3 md:w-full">
              <motion.div
                initial={{
                  y: 90,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
              >
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded shadow-2xl"
                  src="/cvd19simulation.png"
                  alt="content"
                ></img>
                <h2 className="mb-3 text-lg font-semibold text-blue-400 lg:text-2xl title-font">
                  {" "}
                  Image Classification for Rock , Paper , Scissors
                </h2>
                <p className="mb-4 text-base leading-relaxed text-white">
                  Classification images from uploading image with implementation
                  CNN algorithm
                </p>
                <div className="flex justify-center">
                  <Link
                    href="https://github.com/aryadipramarta/Image-Classification-using-CNN-"
                    passHref={true}
                  >
                    <button className="flex items-center px-4 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
                      Link Github
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="px-8 py-6 lg:w-1/3 md:w-full">
              <motion.div
                initial={{
                  y: 80,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
              >
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded shadow-2xl"
                  src="/elearning.png"
                  alt="content"
                ></img>
                <h2 className="mb-3 text-lg font-semibold text-blue-400 lg:text-2xl title-font">
                  {" "}
                  Amazon Top 50 Bestselling Books 2009 - 2019
                </h2>
                <p className="mb-4 text-base leading-relaxed text-white">
                  Create data visualisation from dataset Amazon Top 50
                  Bestselling Books 2009 - 2019
                </p>
                <div className="flex justify-center">
                  <Link
                    href="https://github.com/aryadipramarta/Data-Visualisation-Amazon-Top-50-Bestselling-Books-2009---2019"
                    passHref={true}
                  >
                    <button className="flex items-center px-4 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none">
                      Link Github
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default project;
