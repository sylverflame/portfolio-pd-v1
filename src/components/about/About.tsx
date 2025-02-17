import BlurBgProvider from "../ui/BlurBgProvider";

function About() {
  return (
    <section
      id="About"
      className="about-component border rounded max-w-[1024px] m-auto h-screen relative text-[var(--foreground)]"
    >
      <BlurBgProvider>
        <div className="relative z-10 ">About Component</div>
      </BlurBgProvider>
    </section>
  );
}

export default About;
