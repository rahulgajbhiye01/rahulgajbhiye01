import Image from "next/image";
import Vector from "@/components/assets/vector.svg";

const title = [
  {
    title: "Full Stack Developer",
  },
  {
    title: "Web Developer",
  },
  {
    title: "Full Stack Developer",
  },
];

export default function Home() {
  return (
    <div className="grid w-11/12 items-center gap-2 justify-self-center text-center lg:col-start-2 lg:col-end-13 xl:grid-flow-col xl:grid-cols-2 xl:gap-4 2xl:gap-8">
      <h1 className="text-center text-3xl font-semibold xl:text-left xl:text-4xl 2xl:text-6xl">
        I&apos;m a Web Developer <br /> from India.
      </h1>
      <Image
        src={Vector}
        alt="boys coding"
        className="w-screen fill-transparent"
      />
    </div>
  );
}
