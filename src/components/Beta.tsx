import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Beta() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const joinBeta = async (event: any) => {
    event.preventDefault();

    if (executeRecaptcha && !executeRecaptcha("beta_sign_up")) {
      return;
    }

    // const res = await fetch("/api/testflight", {
    //   body: JSON.stringify({
    //     firstName: event.target.firstName.value,
    //     lastName: event.target.lastName.value,
    //     email: event.target.email.value,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    // });

    // const result = await res.json();
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="relative sm:py-16">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 overflow-hidden shadow-xl sm:px-12 sm:py-20 bg-gradient-to-tr from-hex-0 via-hex-1 via-hex-2 via-hex-3 to-hex-4">
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Join the iOS TestFlight private beta.
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-white">
                  This app is only available via Apple Test flight and signing
                  up will send you an invite.
                </p>
              </div>
              <div className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <form
                  onSubmit={joinBeta}
                  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-100"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-100"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-100"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Join Beta
                    </button>
                  </div>
                </form>
              </div>
              <div className="sm:text-center">
                <p className="mt-6 mx-auto max-w-2xl text-lg text-white">
                  For Android or Web try{" "}
                  <Link href="https://stakehex.today">
                    <a className="text-gray-900">stakehex.today</a>
                  </Link>{" "}
                  or{" "}
                  <Link href="https://staker.app">
                    <a className="text-gray-900">staker.app</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
