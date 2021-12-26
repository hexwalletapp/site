import type { NextPage } from "next";
import Main from "../components/main";
import Footer from "../components/footer";
import Header from "../components/ui/header";

const Home: NextPage = () => {
  return (
    <div className="primary-background">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
