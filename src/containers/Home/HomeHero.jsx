import { Pic, Social } from "@components";

const HomeHero = () => {
  return (
    <section id="home" className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center pb-24">
        <div className="flex flex-col items-center justify-center pb-12">
          <Pic />
          <h1 className="text-5xl font-bold tracking-wide md:text-6xl">
            Rahul Gajbhiye
          </h1>
          <p className="m-1 font-sans text-lg italic text-orange-500">
            a.k.a Manifester
          </p>
          <h2 className="bg-gradient-to-{flow} bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-xl font-extrabold tracking-widest text-transparent md:text-2xl">
            Creative | Designer | Developer
          </h2>
        </div>
        <p className=" p-1 text-center text-2xl md:max-w-lg">
          a full stack developer, who{" "}
          <span className="font-bold text-rose-500">love&apos;s</span> to design
          and create user experiences. In the realms of 2D and 3D.
        </p>
        <div className="mb-6 mt-12">
          <Social />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
