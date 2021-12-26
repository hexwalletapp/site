import Hero from "./hero";
import Features from "./features";
import Community from "./community";
import Beta from "./beta";
import Navbar from "./ui/navbar";

export default function Main() {
  return (
    <main className="text-gray-600 body-font">
      <Navbar />
      <Hero />
      <Features />
      <Community />
      <Beta />
    </main>
  );
}
