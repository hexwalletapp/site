import Link from "next/link";
import Hero from "./Hero";
import Features from "./Features";
import Community from "./Community";
import Beta from "./Beta";

export default function Main() {
  return (
    <main className="text-gray-600 body-font">
      <Hero />
      {/* <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            HEX Mobile
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            Access the first Blockchain Certificate of Deposit High interest,
            with no minimum & decentralized design
          </p>
          <div className="flex justify-center">
            <Link href="https://github.com/r1/nine4-2/">
              <a className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900">
                <span className="justify-center">Find out more</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            src="/images/iPhone-12-Mockup.png"
          ></img>
        </div>
      </div> */}
      <Features />
      <Community />
      <Beta />
    </main>
  );
}
