"use client";

import { TypeAnimation } from "react-type-animation";
import Social from "../social";

export default function Home() {
  return (
    <section className="relative flex h-[calc(100vh-56px)] items-center justify-center md:h-auto xl:h-screen xl:snap-start">
      <div className="flex w-full items-center justify-center md:py-52">
        <div className="flex flex-col gap-4 xl:gap-8">
          <h1 className="text-3xl font-bold md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-6xl">
            I&apos;m a Web & Software <br />
            Developer from India.
          </h1>
          <div className="flex flex-col gap-4 xl:gap-8">
            <h1 className="text-base italic md:text-sm lg:text-base 2xl:text-xl">
              Creating, Web Apps with
            </h1>
            <span className="h-14 text-xl font-semibold md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Modern UI/UX.",
                  3000,
                  "Responsive web design.",
                  3000,
                  "Exceptional Performance.",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "rem", display: "block" }}
                repeat={Infinity}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-4 hidden md:flex md:items-center">
        <div className="flex flex-col items-end gap-2 lg:gap-4">
          <Social
            childClass=""
            name="Github"
            textNameClass="text-base lg:text-md xl:text-base 2xl:text-lg"
            iconNameClass="text-lg lg:text-xl xl:text-lg 2xl:text-xl"
          />
          <Social
            childClass=""
            name="LinkedIn"
            textNameClass="text-base lg:text-md xl:text-base 2xl:text-lg"
            iconNameClass="text-lg lg:text-xl xl:text-lg 2xl:text-xl"
          />
          <Social
            childClass=""
            name="Twitter"
            textNameClass="text-base lg:text-md xl:text-base 2xl:text-lg"
            iconNameClass="text-lg lg:text-xl xl:text-lg 2xl:text-xl"
          />
        </div>
      </div>
    </section>
  );
}
