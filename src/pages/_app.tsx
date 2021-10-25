import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { init } from "../utils/ga";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_MEASUREMENT_ID);
  }, []);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
    >
      <Component {...pageProps} />;
    </GoogleReCaptchaProvider>
  );
}
export default MyApp;
