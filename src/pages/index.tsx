import type { NextPage } from "next";
import Main from "../components/main";
import Footer from "../components/footer";
import { useTheme } from "next-themes";
import Head from "next/head";

interface MetaTag {
  image: string;
}

const title = "HEX Mobile";
const description = "Track your financial future";

const Home: NextPage = ({ metaTag }: any) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="primary-background">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon-apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon-mask-icon.svg" color="#ff0f6f" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="theme-color" content={isDark ? "#000" : "#FFF"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joeblau" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaTag.image} />

        {/* Open Graph */}
        <meta property="og:url" content="https://hexmobile.app" key="ogurl" />
        <meta property="og:image" content={metaTag.image} key="ogimage" />
        <meta property="og:site_name" content="" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>{title}</title>
      </Head>
      <Main />
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const date = new Date();
  const hours = date.getHours();
  const isDark = hours > 18 || hours < 6;

  const imagePath = isDark
    ? "/images/dark/share-card.png"
    : "/images/light/share-card.png";

  const metaTag: MetaTag = {
    image: imagePath,
  };

  return {
    props: { metaTag }, // will be passed to the page component as props
  };
}

export default Home;
