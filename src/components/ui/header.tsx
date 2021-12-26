import Head from "next/head";
import { useTheme } from "next-themes";

const title = "HEX Mobile";
const description = "Track your financial future";

const Header = ({}) => {
  const { theme } = useTheme();
  return (
    <Head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/favicon-apple-touch-icon.png" />
      <link rel="mask-icon" href="/favicon-mask-icon.svg" color="#ff0f6f" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="theme-color" content={theme === "dark" ? "#000" : "#FFF"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@joeblau" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          theme === "dark"
            ? "/images/dark/share-card.png"
            : "/images/light/share-card.png"
        }
      />

      {/* Open Graph */}
      <meta property="og:url" content="https://hexmobile.app" key="ogurl" />
      <meta
        property="og:image"
        content={
          theme === "dark"
            ? "/images/dark/share-card.png"
            : "/images/light/share-card.png"
        }
        key="ogimage"
      />
      <meta property="og:site_name" content="" key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <title>{title}</title>
    </Head>
  );
};

export default Header;
