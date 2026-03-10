import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Board from "@/components/Board";
import Teams from "@/components/Teams";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Board />
        <Teams />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
