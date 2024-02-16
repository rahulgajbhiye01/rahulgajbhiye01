"use client";

import Social from "../social";
import SectionBase from "../sectionBase";

export default function LetsConnect() {
  return (
    <SectionBase
      imageSrc="contact"
      imageAlt="contact"
      sectionName="Contact"
      sectionClass="xl:h-screen xl:snap-start"
      divClass="py-20 pb-40 md:flex-row"
      imageDivClass="md:w-5/12"
      dataDivClass="md:w-6/12"
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <Social
          childClass="border border-solid px-4 py-2 rounded-lg hover:bg-primary hover:shadow-lg hover:shadow-primary basis-1/3"
          textNameClass="text-base lg:text-md xl:text-lg 2xl:text-2xl"
          iconNameClass="text-lg lg:text-xl xl:text-xl 2xl:text-4xl"
          name="Github"
        />
        <Social
          childClass="border border-solid px-4 py-2 rounded-lg hover:bg-primary hover:shadow-lg hover:shadow-primary basis-1/3"
          textNameClass="text-base lg:text-md xl:text-lg 2xl:text-2xl"
          iconNameClass="text-lg lg:text-xl xl:text-xl 2xl:text-4xl"
          name="LinkedIn"
        />
        <Social
          childClass="border border-solid px-4 py-2 rounded-lg hover:bg-primary hover:shadow-lg hover:shadow-primary basis-1/2"
          textNameClass="text-base lg:text-md xl:text-lg 2xl:text-2xl"
          iconNameClass="text-lg lg:text-xl xl:text-xl 2xl:text-4xl"
          name="Twitter"
        />
        <Social
          childClass="border border-solid px-4 py-2 rounded-lg basis-1/2 hover:bg-primary hover:shadow-lg hover:shadow-primary"
          textNameClass="text-base lg:text-md xl:text-lg 2xl:text-2xl"
          iconNameClass="text-lg lg:text-xl xl:text-xl 2xl:text-4xl"
          name="Resume"
        />
      </div>
    </SectionBase>
  );
}
