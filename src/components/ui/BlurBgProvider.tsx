type BlurBgProviderProps = {
  children: React.ReactNode;
};

function BlurBgProvider({ children }: BlurBgProviderProps) {
  return (
    <>
      <div className="animate-fadeIn blur-[150px] w-[200px] h-[200px] absolute left-0 -top-44 bg-[--accent] rounded-full" />
      {children}
      <div className="animate-fadeOut blur-[250px] w-[300px] h-[300px] absolute right-0 bottom-24 bg-[--accent] rounded-full" />
    </>
  );
}

export default BlurBgProvider;
