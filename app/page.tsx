import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import SwipeFile from "@/components/SwipeFile";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Process />
        <CaseStudies />
        <SwipeFile />
        <Skills />
        <Experience />
        <Education />
        <BookCall />
      </main>
      <Footer />
    </>
  );
}
