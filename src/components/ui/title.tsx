"use client";

import { Bona_Nova } from "next/font/google";
import { cn } from "@/lib/utils";

const bonaNova = Bona_Nova({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  className?: String;
};

const Title = ({ className }: Props) => {
  return (
    <span
      className={cn(
        `${bonaNova.className} ${className} text-2xl font-bold lg:text-3xl`,
      )}
    >
      rahulgajbhiye
    </span>
  );
};

export default Title;
