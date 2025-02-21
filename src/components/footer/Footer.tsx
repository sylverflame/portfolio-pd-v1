import { HOME_LINKS } from "@/constants/content";
import ExternalLink from "../home/ExternalLink";

function Footer() {
  return (
    <footer className="w-full h-32 mt-10 border-t-2 border-[var(--accent)] absolute bottom-0 left-0 bg-[var(--bg-navbar)]">
      <div className="max-w-[1024px] m-auto flex flex-col items-center">
        <p className="text-white mt-4">
          {`© ${new Date().getFullYear()} `}
          <a
            href="http://www.mepratikdesai.work"
            className="text-[var(--accent)]"
          >
            Pratik Desai
          </a>
        </p>
        <div className="flex text-white gap-2 mt-2">
          {HOME_LINKS.map((link) => {
            return (
              <ExternalLink
                linkItem={link}
                key={link.link}
                noBackground={true}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
