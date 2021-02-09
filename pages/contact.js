import Link from "next/link";
import Footer from "../component/Footerr";
import Navbar from "../component/Navbar";
import { motion } from "framer-motion";

function contact() {
  return (
    <>
      <Navbar />
      <section className="text-gray-700 body-font bg-gray-800">
        <div className="container px-8 mx-auto pt-36 lg:px-4 h-96">
          <div className="flex flex-col w-full mx-auto mb-2 text-left lg:w-2/3 lg:text-center">
            <motion.div
              initial={{
                y: -80,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <h2 className="mb-1 text-5xl font-medium tracking-widest text-blue-400 title-font text-center">
                CONTACT
              </h2>
            </motion.div>
            <motion.div
              initial={{
                y: -80,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <p className="mx-auto text-base font-medium leading-relaxed text-white lg:w-2/3">
                Get in touch with me If you want to know more about me
              </p>
            </motion.div>
          </div>
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
          <div className="flex justify-center">
            <a href="">
              <button class="mt-3 py-3 px-3 text-white transition duration-500 ease-in-out bg-blue-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 rounded">
                Email : aryadipramarta9@gmail.com
              </button>
            </a>
          </div>
          <div className="flex justify-center mt-3">
            <a href="www.facebook.com">
              <button class="py-3 px-3 text-white transition duration-500 ease-in-out bg-blue-400 hover:bg-gray-400 transform hover:-translate-y-1 hover:scale-110 rounded">
                Github : aryadipramarta
              </button>
            </a>
          </div>
          <div className="flex justify-center mt-3">
            <a href="">
              <button class="py-3 px-3 text-white transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110 rounded">
                Linkedin : I Komang Gede Aryadi Pramarta
              </button>
            </a>
          </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default contact;
