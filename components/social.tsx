"use client";

import socialData from "../constants/socialData";
import { cn } from "@/lib/utils";

type social = {
  name: string;
  childClass: string;
  textNameClass: string;
  iconNameClass: string;
};

const Social: React.FC<social> = (props) => {
  const { name, childClass, textNameClass, iconNameClass } = props;
  const filteredSocial = socialData.filter((item) => item.name === name);

  return (
    <>
      {filteredSocial.map((item) => {
        return (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("flex items-center justify-center gap-2", childClass)}
          >
            <span className={cn(textNameClass)}>{item.name}</span>
            <span className={cn(iconNameClass)}>{item.icon}</span>
          </a>
        );
      })}
    </>
  );
};

export default Social;
