import cn from "classnames";

type HamburgerProps = {
  onClick: () => void;
  showHamburgerMenu: boolean;
};

function Hamburger({
  onClick,
  showHamburgerMenu,
}: HamburgerProps): React.ReactNode {
  return (
    <div
      className="hamburger-menu md:hidden flex flex-col justify-center gap-1 w-[25px]"
      onClick={onClick}
    >
      <div
        className={cn(
          "line h-[2px] bg-[var(--foreground)] transition-transform",
          {
            "translate-y-[3px] rotate-[45deg]": showHamburgerMenu,
          }
        )}
      ></div>
      {!showHamburgerMenu && (
        <div className="line h-[2px] bg-[var(--foreground)]"></div>
      )}
      <div
        className={cn(
          "line h-[2px] bg-[var(--foreground)] transition-transform",
          {
            "-translate-y-[3px] -rotate-[45deg]": showHamburgerMenu,
          }
        )}
      ></div>
    </div>
  );
}

export default Hamburger;
