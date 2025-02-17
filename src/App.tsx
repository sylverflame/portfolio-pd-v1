import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import cn from "classnames";

function App() {
  const [theme, setTheme] = useState("theme-violet");
  const [hideNavbar, setHideNavbar] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let theme = "";
      if (window.scrollY < 500) {
        theme = "theme-violet";
      } else if (window.scrollY >= 500 && window.scrollY <= 800) {
        theme = "theme-red";
      } else if (window.scrollY > 800) {
        theme = "theme-blue";
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

  return (
    <div
      className={cn("app-component p-10 dark bg-[var(--background)]", theme)}
    >
      {/* Navbar */}
      <Navbar hideNavbar={hideNavbar} />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
