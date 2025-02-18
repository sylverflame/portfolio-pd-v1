import BlurBgProvider from "../ui/BlurBgProvider";

function About() {
  return (
    <section
      id="About"
      className="about-component max-w-[1024px] m-auto h-screen relative text-[var(--foreground)]"
    >
      <BlurBgProvider>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--accent)] font-bold shadow">
          About Me!
        </h2>
      </BlurBgProvider>
    </section>
  );
}

export default About;
