import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="text-black">
      <Head>
        <title>HEX Mobile</title>
        <meta name="description" content="HEX Mobile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
