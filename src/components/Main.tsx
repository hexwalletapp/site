import Hero from "./hero";
import Features from "./Features";
import Community from "./Community";
import Beta from "./Beta";
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
