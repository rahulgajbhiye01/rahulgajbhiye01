import socialData from "./constants/socialSet";

const Social = () => {
  return (
    <div className="m-4 flex justify-center gap-2 lg:col-start-1 lg:col-end-2 lg:m-0 lg:flex-col lg:justify-start xl:gap-4 xl:py-24 2xl:gap-6 2xl:py-36">
      {socialData.map((item) => {
        return (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 xl:text-lg 2xl:text-2xl"
          >
            {item.icon}
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
