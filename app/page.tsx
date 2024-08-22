import About from "@/components/about";
import Hero from "@/components/hero";
import News from "@/components/news";
import Statistics from "@/components/statistics";
import UsefulLinkns from "@/components/usefulLinkns";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <News />
      <Statistics />
      <UsefulLinkns />
    </main>
  );
}
