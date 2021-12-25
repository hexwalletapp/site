import type { NextPage } from "next";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/ui/header";

const Home: NextPage = () => {
  return (
    <div className="text-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
