import BlurBgProvider from "../ui/BlurBgProvider";
import "./Home.css";

function Home() {
  return (
    <section
      id="Home"
      className="home-component h-[calc(100vh-100px)] mt-[80px] text-[var(--foreground)] max-w-[1024px] m-auto relative"
    >
      <BlurBgProvider>
        <div className="relative z-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 xl:col-span-8 flex flex-col justify-center">
            <div className="text-2xl lg:text-3xl">Hello!</div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl">
              <span>I'm </span>
              <span className="text-[var(--accent)] font-bold shadow">
                Pratik Desai
              </span>
            </h1>
            <div className="pratik-picture col-span-12 sm:col-span-6 xl:col-span-4 m-auto w-[200px] md:w-[300px] xl:w-[335px] mt-6 sm:hidden relative aspect-square bg-center bg-no-repeat bg-contain" />
            <div className="md:text-xl mt-6 text-justify">
              A Software Developer passionate about building fast, interactive,
              and user-friendly web applications. With experience in React.js,
              TypeScript, Firebase, and Redux, I love solving problems and
              creating seamless digital experiences.
            </div>
          </div>
          <div className="pratik-picture col-span-12 sm:col-span-6 xl:col-span-4 m-auto w-[200px] md:w-[300px] xl:w-[335px] hidden sm:block relative rounded-full aspect-square bg-center bg-no-repeat bg-contain" />
          <div className="links col-span-12 flex flex-wrap gap-4">
            <div className="resume p-2 cursor-pointer relative">Resume</div>
            <a
              className="github-logo w-10 aspect-square bg-center bg-no-repeat bg-contain relative cursor-pointer"
              href="https://github.com/sylverflame/"
            ></a>
            <a className="gitlab-logo w-10 aspect-square bg-center bg-no-repeat bg-contain relative cursor-pointer"></a>
          </div>
        </div>
      </BlurBgProvider>
    </section>
  );
}

export default Home;
