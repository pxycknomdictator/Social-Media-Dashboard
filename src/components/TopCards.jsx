import React from "react";

const TopCards = ({ cards }) => {
  const {
    userName,
    platform,
    followers,
    followTitle,
    followersToday,
    followColors,
    platformIcon,
    arrowIcon,
  } = cards;

  return (
    <div
      className={`pt-2 overflow-hidden rounded-md ${
        platform === "facebook"
          ? "bg-facebook"
          : platform === "twitter"
          ? "bg-twitter"
          : platform === "instagram"
          ? "bg-instagram"
          : platform === "youtube"
          ? "bg-youtube"
          : "null"
      }
    cursor-pointer`}
    >
      <div className="bg-[#f0f3fa] dark:bg-[#242a42] py-6 text-center hover:bg-[#e0e2f0] dark:hover:bg-[#333a57] ease-in-out transition-all">
        <figure className="flex items-center justify-center gap-3">
          <img src={platformIcon} className="inline" alt="facebook" />
          <span className="text-[#bdbfcb] dark:text-[#6c7699] font-semibold">
            {userName}
          </span>
        </figure>
        <h1 className="font-semibold text-[#1b1e27] dark:text-[#ffffff] text-6xl mt-[1.5rem]">
          {followers}
        </h1>
        <span className="inline-block text-[#bdbfcb] dark:text-[#6c7699] font-semibold mt-1 tracking-[4px]">
          {followTitle}
        </span>
        <div className="flex items-center justify-center gap-1 mt-6">
          <img src={arrowIcon} alt="up-arrow" />
          <span
            className={`${
              followColors === "limeGreen" ? "text-limeGreen" : "text-brightRed"
            } font-semibold text-[14px]`}
          >
            {followersToday} Today
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
