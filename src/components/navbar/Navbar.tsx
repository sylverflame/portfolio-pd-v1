import cn from "classnames";
import "./Navbar.css";

type NavbarProps = {
  hideNavbar: boolean;
};

function Navbar({ hideNavbar }: NavbarProps) {
  const NAVBAR_MENU = [
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

  const scrollContentIntoView = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const topPos =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "navbar-component z-20 h-[80px] w-full fixed left-0 top-0 px-10 bg-[var(--bg-navbar)] shadow flex items-center border-b-2 border-[var(--accent)] backdrop-blur-xl transition-colors",
        { "hide-navbar": hideNavbar }
      )}
    >
      <div className="navbar w-full flex max-w-[1024px] justify-between m-auto relative">
        <div className="font-bold text-[--foreground] text-2xl md:text-3xl">
          ME
        </div>
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="hidden md:flex gap-10 text-[var(--foreground)]">
            {NAVBAR_MENU.map((navItem) => {
              return (
                <li
                  key={navItem.label}
                  className="hover:text-[var(--accent)] transition-colors"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollContentIntoView(navItem.label);
                  }}
                >
                  <a href="">{navItem.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hamburger-menu md:hidden flex flex-col justify-center gap-1 w-[25px]">
          <div className=" h-[2px] bg-[var(--foreground)]"></div>
          <div className=" h-[2px] bg-[var(--foreground)]"></div>
          <div className=" h-[2px] bg-[var(--foreground)]"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
