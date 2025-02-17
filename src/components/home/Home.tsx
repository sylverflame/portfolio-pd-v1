import BlurBgProvider from "../ui/BlurBgProvider";
import "./Home.css";

function Home() {
  return (
    <section
      id="Home"
      className="home-component h-[calc(100vh-100px)] mt-[60px] text-[var(--foreground)] max-w-[1024px] m-auto relative"
    >
      <BlurBgProvider>
        <div className="relative z-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 xl:col-span-8  flex flex-col justify-center">
            <div className="text-2xl lg:text-3xl">Hello!</div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl mt-2">
              <span>I'm </span>
              <span className="text-[var(--accent)] font-bold shadow">
                Pratik Desai
              </span>
            </h1>
            <div className="pratik-picture col-span-12 sm:col-span-6 xl:col-span-4 m-auto w-[200px] md:w-[300px] xl:w-[335px] mt-4 sm:hidden" />
            <div className="md:text-xl mt-4">
              A Software Developer passionate about building fast, interactive,
              and user-friendly web applications. With experience in React.js,
              TypeScript, Firebase, and Redux, I love solving problems and
              creating seamless digital experiences.
            </div>
          </div>
          <div className="pratik-picture col-span-12 sm:col-span-6 xl:col-span-4 m-auto w-[200px] md:w-[300px] xl:w-[335px] hidden sm:block" />
          <div className="col-span-12">Github</div>
        </div>
      </BlurBgProvider>
    </section>
  );
}

export default Home;
