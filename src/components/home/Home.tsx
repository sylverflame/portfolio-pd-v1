import BlurBgProvider from "../ui/BlurBgProvider";

function Home() {
  return (
    <section
      id="Home"
      className="home-component border rounded h-screen mt-[60px] text-[var(--primary)] max-w-[1024px] m-auto relative"
    >
      <BlurBgProvider>
        <div className="relative z-10">Home Component</div>
      </BlurBgProvider>
    </section>
  );
}

export default Home;
