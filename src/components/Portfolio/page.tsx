"use client";
import { HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="bg-gray-50" id="portfolio">
      <div className="container py-16 md:py-20 max-w-6xl mx-auto px-5">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-cyan sm:text-5xl lg:text-6xl">
          Check Out My Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I have done with the past
        </h3>
        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mx-auto md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black"
          >
            <Image width={1400} height={100} src="/Portfolio.png" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://fitness-w78k.vercel.app" target="_blank">
                <HiExternalLink
                  className="mr-2"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mx-auto md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black"
          >
            <Image width={1400} height={100} src="/codeswear.PNG" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://codeswear-self.vercel.app" target="_blank">
                <HiExternalLink
                  className="mr-2"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mx-auto md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black"
          >
            <Image width={1400} height={100} src="/trippy.PNG" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://travel-chi-black.vercel.app" target="_blank">
                <HiExternalLink
                  className="mr-2"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mx-auto md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black"
          >
            <Image width={1400} height={100} src="/textutils2.png" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://textutilsby.vercel.app" target="_blank">
                <HiExternalLink
                  className="mr-2"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mx-auto md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black"
          >
            <Image width={1400} height={100} src="/tilo.png" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link
                href="https://tiling-services-website.vercel.app/"
                target="_blank"
              >
                <HiExternalLink
                  className="mr-2"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mx-auto md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black"
          >
            <Image width={1400} height={100} src="/nsw.png" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://nsw-government.vercel.app/" target="_blank">
                <HiExternalLink
                  className="mr-2"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mx-auto md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black"
          >
            <Image width={1400} height={100} src="/swiftpay.png" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://www.swifteepay.com/" target="_blank">
                <HiExternalLink
                  className="mr-2"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mx-auto md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black"
          >
            <Image width={1400} height={100} src="/dragsol.png" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://www.dragsolution.com/" target="_blank">
                <HiExternalLink
                  className="mr-2"
                  style={{ width: "32px", height: "32px" }}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
