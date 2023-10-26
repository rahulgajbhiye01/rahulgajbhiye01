import { SocialsData } from "@constants";

const Social = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-sm text-slate-400 md:text-base lg:text-lg">
        For chat & collaboration, DM over or drop a{" "}
        <a
          href="mailto:work@rahulgajbhiye.com"
          className="border-b-2 border-solid border-orange-500 font-bold text-white"
        >
          Mail
        </a>{" "}
        to me
      </p>
      <div className="flex flex-wrap items-center justify-center text-4xl">
        {SocialsData.map((Social) => {
          return (
            <a
              href={Social.href}
              key={Social.id}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 transition ease-in-out hover:scale-125"
            >
              {Social.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Social;
