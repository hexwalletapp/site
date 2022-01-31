import Link from "next/link";

const community = [
  {
    name: "HEX.com",
    image: "/images/community/hex-com-logo.svg",
    href: "https://hex.com",
  },
  {
    name: "Pulse Chain",
    image: "/images/community/pulse-chain-logo.svg",
    href: "https://pulsechain.com",
  },
  {
    name: "Look Into HEX",
    image: "/images/community/look-into-hex-logo.svg",
    href: "https://lookintohex.com",
  },
  {
    name: "Staker",
    image: "/images/community/staker-logo.svg",
    href: "https://staker.app",
  },
  {
    name: "HEX Calc",
    image: "/images/community/hex-calc-logo.svg",
    href: "https://hexcalc.net",
  },

  {
    name: "HEX Daily Stats",
    image: "/images/community/hex-daily-stats-logo.svg",
    href: "https://hexdailystats.com",
  },

  {
    name: "Stake HEX Today",
    image: "/images/community/stake-hex-today-logo.svg",
    href: "https://stakehex.today",
  },
];
export default function Community() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <p className="mt-2 text-3xl font-extrabold primary-text tracking-tight sm:text-4xl ">
            Community
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl secondary-text">
            Helpful community resources that were used in helping develop and
            shape the direction of HEX wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-4 mt-12">
          {community.map((item) => (
            <div
              key={item.name}
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 hover:scale-110 transition-all"
            >
              <Link href={item.href}>
                <a className="flex flex-col items-center justify-center">
                  <img className="max-h-sm" src={item.image} alt={item.name} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
