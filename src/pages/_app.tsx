import "../styles/globals.css";
import type { AppProps } from "next/app";
import { init } from "../utils/ga";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_MEASUREMENT_ID);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
