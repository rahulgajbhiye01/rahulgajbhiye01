import { PicsData } from "@constants";

const Pic = () => {
  return (
    <>
      {PicsData.map((filteredItem, index) => {
        return (
          <img
            key={index}
            className="m-4 h-[100px] rounded-xl md:h-[125px]"
            src={filteredItem.src}
            alt={filteredItem.alt}
          />
        );
      })}
    </>
  );
};

export default Pic;
