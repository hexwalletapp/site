import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { init } from "../utils/ga";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_MEASUREMENT_ID);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
      >
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}
export default MyApp;
