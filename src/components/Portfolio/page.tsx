import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

type Props = {};

const Portfolio = (props: Props) => {
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
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black">
            <Image width={1400} height={100} src="/Portfolio.png" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://github.com/ahsanali7893/fitness" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="mr-2" style={{ width: "32px", height: "32px" }} />
              </Link>
              <Link href="https://fitness-w78k.vercel.app">
                <HiExternalLink className="mr-2" style={{ width: "32px", height: "32px" }} />
              </Link>
            </div>
          </div>
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black">
            <Image width={1400} height={100} src="/codeswear.PNG" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://github.com/ahsanali7893/codeswear" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="mr-2" style={{ width: "32px", height: "32px" }} />
              </Link>

              <Link href="https://codeswear-self.vercel.app">
                <HiExternalLink className="mr-2" style={{ width: "32px", height: "32px" }} />
              </Link>
            </div>
          </div>
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black">
            <Image width={1400} height={100} src="/trippy.PNG" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://github.com/ahsanali7893/Travel" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="mr-2" style={{ width: "32px", height: "32px" }} />
              </Link>

              <Link href="https://travel-chi-black.vercel.app">
                <HiExternalLink className="mr-2" style={{ width: "32px", height: "32px" }} />
              </Link>
            </div>
          </div>
          <div className="mx-auto transform transition-all hover:scale-105 md:mx-0 shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-black hover:focus:shadow-black ">
            <Image width={1400} height={100} src="/textutils2.png" alt="" />
            <div className="flex items-center mt-3 justify-end">
              <Link href="https://github.com/ahsanali7893/textutils" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="mr-2" style={{ width: "32px", height: "32px" }} />
              </Link>
              <Link href="https://textutilsby.vercel.app">

                <HiExternalLink className="mr-2" style={{ width: "32px", height: "32px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
