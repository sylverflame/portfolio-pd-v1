import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import cn from "classnames";

function App() {
  const [theme, setTheme] = useState("theme-violet");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY < 500) {
        setTheme("theme-violet");
      } else if (window.scrollY > 500 && window.scrollY < 800) {
        setTheme("theme-red");
      } else if (window.scrollY > 900) {
        setTheme("theme-blue");
      }
    });
  }, []);

  return (
    <div
      className={cn(
        "app-component p-5 sm:px-10 dark bg-[var(--background)]",
        theme
      )}
    >
      {/* Navbar */}
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
