import React from "react";

const BottomCards = ({ cards }) => {
  const {
    title,
    platformIcon,
    followers,
    arrowIcon,
    followersToday,
    followColors,
  } = cards;

  return (
    <div className="flex flex-col gap-5 bg-[#f0f3fa] dark:bg-[#242a42]  hover:bg-[#e0e2f0] dark:hover:bg-[#333a57] cursor-pointer ease-in-out transition-all p-7 rounded-md">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-[#bdbfcb] dark:text-[#6c7699]">{title}</span>
        <img src={platformIcon} alt={platformIcon} />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-[#1b1e27] dark:text-[#ffffff] font-semibold text-4xl">{followers}</h1>
        <div className="flex items-center gap-1 self-end">
          <img src={arrowIcon} alt={`${arrowIcon}-arrow`} />
          <span
            className={`font-semibold text-[14px] ${
              followColors === "limeGreen"
                ? "text-limeGreen"
                : followColors === "brightRed"
                ? "text-brightRed"
                : ""
            }`}
          >
            {followersToday}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomCards;
