function Navbar() {
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
    <div className="z-20 navbar-component h-[70px] w-full fixed left-0 top-0 px-5 sm:px-10 bg-[var(--bg-navbar)] shadow flex justify-between items-center border-b-2 border-[var(--accent)] backdrop-blur-xl transition-colors">
      <div className="navbar w-full flex max-w-[1024px] justify-between m-auto lg:px-10 relative">
        <h1 className="font-bold text-[--primary] text-3xl">ME</h1>
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
          <div className=" h-[2px] bg-[var(--primary)]"></div>
          <div className=" h-[2px] bg-[var(--primary)]"></div>
          <div className=" h-[2px] bg-[var(--primary)]"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
