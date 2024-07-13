import TextAnimation from "@/components/ui/text-animation";

const Home = () => {
  return (
    <div className="flex flex-col items-center pt-32">
      <div className="flex flex-col gap-6 md:gap-10">
        <h1 className="text-3xl font-bold md:text-4xl xl:text-6xl">
          a Web & Software <br />
          Developer from India.
        </h1>
        <div className="flex flex-col gap-2 lg:gap-4">
          <span className="text-base italic lg:text-base 2xl:text-xl">
            Crafting, Web Apps with
          </span>
          <span className="h-14 text-xl font-semibold lg:text-2xl 2xl:text-4xl">
            <TextAnimation />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
