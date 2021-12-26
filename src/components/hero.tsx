import Image from "next/image";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl primary-text">
                <span className="block text-transparent bg-clip-text xl:inline bg-gradient-to-tr from-hex-0 via-hex-1 via-hex-2 via-hex-3 to-hex-4">
                  HEX Mobile
                </span>
                <span className="block ">tracks your financial future</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl secondary-text">
                HEX is the first blockchain certificate of deposit with high
                interest, no minimums &amp; decentralized design.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gradient-to-tr from-hex-0 via-hex-1 via-hex-2 via-hex-3 to-hex-4" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative">
              {darkMode ? (
                <Image
                  src="/images/dark/hero.png"
                  alt="Hero"
                  width={1459}
                  height={958}
                />
              ) : (
                <Image
                  src="/images/light/hero.png"
                  alt="Hero"
                  width={1459}
                  height={958}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
