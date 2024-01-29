import { FaGithub, FaLink } from "react-icons/fa6";
import Image from "next/image";

type cardProps = {
  icon: string;
  name: string;
  description: string;
  github: string;
  link: string;
};

const Card: React.FC<cardProps> = (props) => {
  const { icon, name, github, link, description } = props;

  return (
    <div className="animate-border bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] pb-px pr-px transition-all 2xl:pb-0.5 2xl:pr-0.5">
      <div className="flex flex-col gap-2 border border-solid border-zinc-500 bg-background p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="relative size-12 lg:size-14 2xl:size-16">
            <Image fill src={`/${icon}`} alt={name} />
          </div>
          <div className="flex flex-row items-center gap-4 text-xl xl:text-xl 2xl:text-2xl">
            <a href={github}>
              <FaGithub />
            </a>
            <a
              href={link}
              className="flex flex-row items-center justify-center gap-4 rounded-md border border-solid border-slate-500 px-2"
            >
              Visit <FaLink />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold xl:text-lg 2xl:text-2xl">{name}</h1>
          <p className="text-base xl:text-sm 2xl:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
