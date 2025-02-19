import { type NavbarMenuItem } from "@/App";

type HamburgerMenuProps = {
  menuItems: NavbarMenuItem[];
  scrollContentIntoView: (sectionId: string) => void;
  setShowHamburgerMenu: Function;
};

function HamburgerMenu({
  menuItems,
  scrollContentIntoView,
  setShowHamburgerMenu,
}: HamburgerMenuProps) {
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

export default HamburgerMenu;
