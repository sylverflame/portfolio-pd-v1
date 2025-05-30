import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Home from "@/components/home/Home";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Hamburger from "@/components/ui/Hamburger";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import cn from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import END_POINTS from "./api/api-ep";
import "./App.css";
import Footer from "./components/footer/Footer";
import PdLogo from "./components/svg/PdLogo";
import { ENV_BE } from "./configs/api-urls";
import { NAVBAR_MENU } from "./constants/content";
import useAxios from "./utils/hooks/useAxios";

function App() {
  const [theme, setTheme] = useState("theme-violet");
  const [hideNavbar, setHideNavbar] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState<boolean>(true);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const { getData, postData } = useAxios();

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

  useEffect(() => {
    const timer = setTimeout(() => setShowLoadingScreen(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getIp = async (): Promise<string> => {
      const URL: string = "https://api.ipify.org?format=json";
      let response = await getData(URL);
      return response.ip;
    };

    const updateVisitor = async (ipAddress: string) => {
      const URL: string = ENV_BE + END_POINTS.VISIT.updateVisitCount;
      const payload = btoa(ipAddress);
      await postData(URL, { dt: payload });
    };

    const updateAnalytics = async () => {
      const src = searchParams.get("src");
      if (src === "resume") {
        let ip = await getIp();
        updateVisitor(ip);
        navigate("/");
      }
    };
    updateAnalytics();
  }, []);

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
      {showLoadingScreen && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1 }}
          className="fixed top-0 left-0 w-full h-screen bg-[var(--background)] flex justify-center items-center z-[300]"
        >
          <div className="w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center -translate-y-16 md:translate-y-0">
            <PdLogo />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
