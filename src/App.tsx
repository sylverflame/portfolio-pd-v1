import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Home from "@/components/home/Home";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Hamburger from "@/components/ui/Hamburger";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import cn from "classnames";
import { useEffect, useState } from "react";
import "./App.css";
import { NAVBAR_MENU } from "./constants/content";
import Footer from "./components/footer/Footer";

function App() {
  const [theme, setTheme] = useState("theme-violet");
  const [hideNavbar, setHideNavbar] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let theme = "";
      if (window.scrollY < 600) {
        theme = "theme-violet";
      } else if (window.scrollY >= 600 && window.scrollY <= 1200) {
        theme = "theme-blue";
      } else if (window.scrollY > 1200) {
        theme = "theme-violet";
      }
      setTheme(theme);
    });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setHideNavbar(window.scrollY > previousScroll ? true : false);
      Math.floor(window.scrollY / 10) > 0 && setPreviousScroll(window.scrollY);
    });
  }, [previousScroll]);

  const scrollContentIntoView = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === "Home" ? 120 : 100;
      const topPos =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "app-component p-10 pt-24 dark bg-[var(--background)] relative",
        theme
      )}
    >
      <Navbar
        hideNavbar={hideNavbar}
        setShowHamburgerMenu={setShowHamburgerMenu}
        showHamburgerMenu={showHamburgerMenu}
        menuItems={NAVBAR_MENU}
        scrollContentIntoView={scrollContentIntoView}
      />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <div className="fixed right-8 top-8 z-[250]">
        <Hamburger
          onClick={() => setShowHamburgerMenu((prev) => !prev)}
          showHamburgerMenu={showHamburgerMenu}
        />
      </div>
      {showHamburgerMenu && (
        <HamburgerMenu
          menuItems={NAVBAR_MENU}
          scrollContentIntoView={scrollContentIntoView}
          setShowHamburgerMenu={setShowHamburgerMenu}
        />
      )}
    </div>
  );
}

export default App;
