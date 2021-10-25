import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-transparent bg-clip-text xl:inline bg-gradient-to-tr from-hex-0 via-hex-1 via-hex-2 via-hex-3 to-hex-4">
                  HEX Mobile
                </span>{" "}
                <span className="block xl:inline">
                  tracks your financial future
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                HEX is the first blockchain certificate of deposit with high
                interest, no minimums &amp; decentralized design.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#join-beta"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Join Beta
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="https://hex.com">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="flex justify-center">
          <div className="max-w-sm">
            <video
              src="videos/hexmobile-hero.mp4"
              poster="
            images/hexmobile-hero.png"
              playsInline={true}
              muted={true}
              autoPlay={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
