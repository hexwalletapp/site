import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import CompletionModal from "./CompletionModal";
import { useState } from "react";

export default function Beta() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const joinBeta = async (event: any) => {
  //   event.preventDefault();

  //   if (executeRecaptcha && !executeRecaptcha("beta_sign_up")) {
  //     return;
  //   }

  //   try {
  //     const res = await fetch("/api/testflight", {
  //       body: JSON.stringify({
  //         firstName: event.target.firstName.value,
  //         lastName: event.target.lastName.value,
  //         email: event.target.email.value,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     });
  //     setSubmitted(true);
  //     setOpen(true);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <div className="bg-white py-16 sm:py-24">
      <CompletionModal open={open} setOpen={setOpen} />
      <div className="relative sm:py-16">
        <div
          id="join-beta"
          className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <div className="relative rounded-2xl px-6 py-10 overflow-hidden shadow-xl sm:px-12 sm:py-20 bg-gradient-to-tr from-hex-0 via-hex-1 via-hex-2 via-hex-3 to-hex-4">
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Join the iOS TestFlight private beta
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-white">
                  This app is only available via Apple Test flight and signing
                  up will send you an invite.
                </p>
              </div>
              <div className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <Link href="https://testflight.apple.com/join/iLl3I9g4">
                  <a className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
                    Join Beta
                  </a>
                </Link>
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
