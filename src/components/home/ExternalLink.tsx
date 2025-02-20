import { type ExternalLink as ExternalLinkType } from "@/types";

type ExternalLinkProps = {
  linkItem: ExternalLinkType;
};
const ExternalLink = ({ linkItem }: ExternalLinkProps) => {
  return (
    <a
      href={linkItem.link}
      target="_blank"
      rel="noopener noreferrer"
      className="resume p-2 px-3 cursor-pointer relative flex items-center gap-3"
      aria-label={linkItem.title}
      title={linkItem.showTitle ? "" : linkItem.title}
    >
      <linkItem.icon className="text-2xl" />
      {linkItem.showTitle ? linkItem.title : ""}
    </a>
  );
};

export default ExternalLink;
