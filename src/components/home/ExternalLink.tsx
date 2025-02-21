import { type ExternalLink as ExternalLinkType } from "@/types";
import cn from "classnames";

type ExternalLinkProps = {
  linkItem: ExternalLinkType;
  noBackground?: boolean;
};
const ExternalLink = ({ linkItem, noBackground }: ExternalLinkProps) => {
  return (
    <a
      href={linkItem.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "link p-2 px-3 cursor-pointer relative flex items-center gap-3  rounded-lg hover:scale-[1.05] hover:backdrop-opacity-50 transition-all",
        { "bg-none": noBackground },
        { "bg-[var(--accent)]": !noBackground }
      )}
      aria-label={linkItem.title}
      title={linkItem.showTitle ? "" : linkItem.title}
    >
      <linkItem.icon className="text-xl md:text-2xl" />
      {linkItem.showTitle ? linkItem.title : ""}
    </a>
  );
};

export default ExternalLink;
