import BlurBgProvider from "@/components/ui/BlurBgProvider";
import "./Home.css";
import { HOME_CONTENT, HOME_LINKS } from "@/constants/content";
import ExternalLink from "./ExternalLink";

function Home() {
  return (
    <section
      id="Home"
      className="home-component h-[calc(100vh-100px)] text-[var(--foreground)] max-w-[1024px] m-auto flex items-center"
    >
      <BlurBgProvider>
        <div className="relative z-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 xl:col-span-8 flex flex-col justify-center">
            <div className="text-2xl lg:text-3xl">Hello!</div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl">
              <span>I'm </span>
              <span className="text-[var(--accent)] font-bold shadow">
                {HOME_CONTENT.name}
              </span>
            </h1>
            <div className="pratik-picture col-span-12 sm:col-span-6 xl:col-span-4 m-auto w-[200px] md:w-[300px] xl:w-[335px] mt-6 sm:hidden relative aspect-square bg-center bg-no-repeat bg-contain" />
            <div className="md:text-xl mt-6">{HOME_CONTENT.description}</div>
          </div>
          <div className="pratik-picture col-span-12 sm:col-span-6 xl:col-span-4 m-auto w-[200px] md:w-[300px] xl:w-[335px] hidden sm:block relative rounded-full aspect-square bg-center bg-no-repeat bg-contain" />
          <div className="links col-span-12 flex flex-wrap gap-2 md:gap-4">
            {HOME_LINKS.map((link) => {
              return <ExternalLink linkItem={link} key={link.link} />;
            })}
          </div>
        </div>
      </BlurBgProvider>
    </section>
  );
}

export default Home;
