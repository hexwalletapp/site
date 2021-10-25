/* This example requires Tailwind CSS v2.0+ */
import {
  BellIcon,
  CashIcon,
  ChartBarIcon,
  ChartPieIcon,
  CollectionIcon,
  CurrencyDollarIcon,
  IdentificationIcon,
  LinkIcon,
  MoonIcon,
  ReceiptTaxIcon,
  SwitchVerticalIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Daily Payout",
    icon: CashIcon,
    description:
      "Real-time view of how much HEX you are getting paid out per day",
  },
  {
    name: "Stakes",
    icon: CollectionIcon,
    description:
      "See a list of your future stakes and stake progress at a high level",
  },
  {
    name: "Accounts",
    icon: IdentificationIcon,
    description:
      "Add, sort, remove, and switch between multiple accounts using a public key",
  },
  {
    name: "Pulse Chain",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 23" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 12.4115C24 12.5254 23.9736 12.6337 23.9236 12.7277L18.7767 21.6424C18.5584 22.0204 18.1551 22.2533 17.7185 22.2533H6.28151C5.84495 22.2533 5.44155 22.0204 5.22327 21.6424L0.0759155 12.7269C0.026041 12.633 0 12.5252 0 12.4115C0 12.0425 0.299116 11.7434 0.668094 11.7434H6.31519L7.74631 14.1742L7.7551 14.1887C7.94608 14.4954 8.34791 14.5953 8.66098 14.411L8.67719 14.4012C8.82154 14.3106 8.92604 14.168 8.96884 14.0026L10.7924 6.95308L12.3582 18.3024L12.3606 18.3182C12.4184 18.6752 12.7511 18.9226 13.1113 18.8729L13.1277 18.8704C13.3885 18.8279 13.6004 18.6352 13.6668 18.3784L15.8649 9.88123L16.7674 11.4142L16.7763 11.429C16.8981 11.6242 17.1122 11.7434 17.3431 11.7434H23.3319C23.7009 11.7434 24 12.0425 24 12.4115ZM17.7185 0C18.1551 0 18.5584 0.232901 18.7767 0.610971L23.9239 9.52602C23.9737 9.61992 24 9.72817 24 9.84187C24 10.2108 23.7009 10.51 23.3319 10.51H17.6663L16.2352 8.07911L16.2253 8.06291C16.1348 7.91855 15.9922 7.81405 15.8268 7.77125L15.8112 7.76743C15.4591 7.6851 15.1037 7.8987 15.0127 8.25074L13.1891 15.3002L11.6233 3.95095L11.6208 3.93458C11.5783 3.67378 11.3856 3.46189 11.1288 3.39545C10.7716 3.30304 10.4071 3.51772 10.3147 3.87494L8.11658 12.372L7.21413 10.8391L7.20516 10.8243C7.08336 10.6291 6.86928 10.51 6.63839 10.51H0.668094C0.299116 10.51 0 10.2108 0 9.84187C0 9.72905 0.025342 9.62234 0.0742976 9.52907L5.22327 0.610971C5.44155 0.232901 5.84495 0 6.28151 0H17.7185Z"
        />
      </svg>
    ),
    description:
      "Track your stakes on Pulse using the HEX price set buy the Pulse Chain DEX",
  },
  {
    name: "Speculate",
    icon: CurrencyDollarIcon,
    description:
      "Set the price of HEX to any dollar amount visualize your current portfolio",
  },
  {
    name: "Price Chart",
    icon: ChartBarIcon,
    description: "View the HEX price chart with data provided by Trading View",
  },
  {
    name: "Totals",
    icon: ChartPieIcon,
    description: "See your total shares and your total account balance",
  },
  {
    name: "Breakdown",
    icon: ReceiptTaxIcon,
    description: "See each stake Principal, Interest, BPD, EES, ROI and APY",
  },
  {
    name: "Light/Dark",
    icon: MoonIcon,
    description: "Interface designed for to work in light mode and dark mode",
  },
  {
    name: "On-Chain",
    icon: LinkIcon,
    description:
      "This app has no backend, all data is pulled directly from the blockchain",
  },
  {
    name: "Sorting",
    icon: SwitchVerticalIcon,
    description: "Sort and group stakes by multiple stake parameters",
  },
  {
    name: "Notifications",
    icon: BellIcon,
    description:
      "Know when your get paid daily and when your stakes have ended",
  },
];

export default function Example() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          HEX Insights On The Go
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          HEX has a lot of complex game theory and the goal of this app is to
          unwraps and expose a lot of the mystery behind the app by surfacing
          the most important information.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gray-700 rounded-md shadow-lg ">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
