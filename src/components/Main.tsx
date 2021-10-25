import Hero from "./Hero";
import Features from "./Features";
import Community from "./Community";
import Beta from "./Beta";

export default function Main() {
  return (
    <main className="text-gray-600 body-font">
      <Hero />
      <Features />
      <Community />
      <Beta />
    </main>
  );
}
