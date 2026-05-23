import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedBackground from "./components/AnimatedBackground";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import FloatingDock from "./components/FloatingDock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AudioToggle from "./components/AudioToggle";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Tools from "./sections/Tools";
import Workflow from "./sections/Workflow";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import RecruiterTrust from "./sections/RecruiterTrust";
import Contact from "./sections/Contact";
import WhyHireMe from "./sections/WhyHireMe";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.title =
      "Kurt Panolino | Virtual Assistant & Digital Operations Support";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-white selection:bg-cyan-300 selection:text-slate-950">
      <ScrollProgress />
      <CommandPalette scrollTo={scrollTo} />
      <FloatingDock scrollTo={scrollTo} />
      <ThemeSwitcher />
      <AudioToggle />
      <CursorGlow />
      <LoadingScreen isLoading={isLoading} />
      <AnimatedBackground />

      <Header scrollTo={scrollTo} />

      <Hero scrollTo={scrollTo} />
      <About />
      <Services />
      <Tools />
      <Workflow />
      <Skills />
      <Projects />
      <Experience />
      <WhyHireMe />
      <RecruiterTrust scrollTo={scrollTo} />
      <Contact />

      <Footer scrollTo={scrollTo} />
    </main>
  );
}