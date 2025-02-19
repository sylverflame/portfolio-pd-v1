import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import cn from "classnames";
import Hamburger from "./components/ui/Hamburger";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";

export type NavbarMenuItem = { label: string };

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
        theme = "theme-red";
      } else if (window.scrollY > 1200) {
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

  const NAVBAR_MENU: NavbarMenuItem[] = [
    {
      label: "Home",
    },
    {
      label: "About",
    },
    {
      label: "Experience",
    },
    {
      label: "Skills",
    },
    {
      label: "Projects",
    },
    {
      label: "Contact",
    },
  ];

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
        "app-component p-10 pt-24 dark bg-[var(--background)]",
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
      </main>
      <footer></footer>
      <div className="fixed right-8 top-8 z-50">
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

type NavMenuHambergurProps = {
  menuItems: NavbarMenuItem[];
  scrollContentIntoView: (sectionId: string) => void;
  setShowHamburgerMenu: Function;
};

function HamburgerMenu({
  menuItems,
  scrollContentIntoView,
  setShowHamburgerMenu,
}: NavMenuHambergurProps) {
  return (
    <div className="animate-hamburgerFadeIn fixed left-0 top-0 w-full h-screen z-40 bg-[var(--bg-navbar)] backdrop-blur-lg">
      <ul className="flex flex-col gap-8 text-[var(--foreground)] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        {menuItems.map((navItem) => {
          return (
            <li
              key={navItem.label}
              className="hover:text-[var(--accent)] transition-colors text-2xl"
              onClick={(event) => {
                event.preventDefault();
                scrollContentIntoView(navItem.label);
                setShowHamburgerMenu(false);
              }}
            >
              <a href="">{navItem.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
