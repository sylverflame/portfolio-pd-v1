import cn from "classnames";
import "./Navbar.css";
import { NavbarMenuItem } from "@/types";
import PdLogo from "../svg/PdLogo";

type NavbarProps = {
  hideNavbar: boolean;
  setShowHamburgerMenu: Function;
  showHamburgerMenu: boolean;
  menuItems: NavbarMenuItem[];
  scrollContentIntoView: (sectionId: string) => void;
};

function Navbar({ hideNavbar, menuItems, scrollContentIntoView }: NavbarProps) {
  return (
    <header
      className={cn(
        "navbar-component z-[180] h-[80px] w-full fixed left-0 top-0 px-10 bg-[var(--bg-navbar)] shadow flex items-center border-b-2 border-[var(--accent)] backdrop-blur-xl transition-colors",
        { "hide-navbar": hideNavbar }
      )}
    >
      <div className="navbar w-full flex max-w-[1024px] justify-between m-auto relative">
        <div className="font-bold text-[--foreground] text-2xl md:text-3xl">
          <PdLogo width={35} height={35} fill="#fff" />
        </div>
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="hidden md:flex gap-10 text-[var(--foreground)]">
            {menuItems.map((navItem) => {
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
      </div>
    </header>
  );
}

export default Navbar;
