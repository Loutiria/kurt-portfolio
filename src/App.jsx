import { useEffect, useState } from "react";
import { useRecruiterMode } from "./context/RecruiterModeContext";

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
import CustomCursor from "./components/CustomCursor";
import RecruiterModeToggle from "./components/RecruiterModeToggle";
import MobileBottomNav from "./components/MobileBottomNav";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Tools from "./sections/Tools";
import Toolkit from "./sections/Toolkit";
import Workflow from "./sections/Workflow";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import RecruiterTrust, { RecruiterSnapshot } from "./sections/RecruiterTrust";
import Contact from "./sections/Contact";
import WhyHireMe from "./sections/WhyHireMe";
import WorkPhilosophy from "./sections/WorkPhilosophy";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState("home");
  const { recruiterMode } = useRecruiterMode();

  const goToPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.title =
      "Kurt Panolino | Virtual Assistant & Digital Operations Support";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const renderRecruiterMode = () => (
    <>
      <RecruiterSnapshot goToPage={goToPage} />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );

  const renderPage = () => {
    if (recruiterMode) return renderRecruiterMode();

    switch (activePage) {
      case "projects":
        return (
          <>
            <Projects />
            <Tools />
            <Toolkit />
          </>
        );

      case "workflow":
        return (
          <>
            <Workflow />
            <WorkPhilosophy />
            <Services />
          </>
        );

      case "experience":
        return (
          <>
            <Experience />
            <Skills />
            <RecruiterTrust goToPage={goToPage} />
          </>
        );

      case "contact":
        return <Contact />;

      case "home":
      default:
        return (
          <>
            <Hero goToPage={goToPage} />
            <About />
            <WhyHireMe />
            <Services />
          </>
        );
    }
  };

  return (
    <main
      className={`min-h-screen overflow-hidden bg-[#070b12] text-white selection:bg-cyan-300 selection:text-slate-950 ${
        recruiterMode ? "recruiter-mode" : ""
      }`}
    >
      <ScrollProgress />
      <LoadingScreen isLoading={isLoading} />

      {!recruiterMode && <AnimatedBackground />}
      {!recruiterMode && <CursorGlow />}
      <CustomCursor />

      <CommandPalette goToPage={goToPage} />
      <ThemeSwitcher />
      {!recruiterMode && <AudioToggle />}
      <RecruiterModeToggle />

      <Header activePage={activePage} goToPage={goToPage} />

      <div className="relative z-10 min-h-[80vh] pb-28 md:pb-0">
        {renderPage()}
      </div>

      {!recruiterMode && <FloatingDock goToPage={goToPage} />}
      <MobileBottomNav activePage={activePage} goToPage={goToPage} />

      <Footer goToPage={goToPage} />
    </main>
  );
}