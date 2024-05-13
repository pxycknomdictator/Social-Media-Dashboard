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
    <div className={`pt-[5px] rounded-md bg-${platform} cursor-pointer`}>
      <div id="card" className="bg-cardbg py-6 text-center">
        <figure className="flex items-center justify-center gap-3">
          <img src={platformIcon} className="inline" alt="facebook" />
          <span className="text-followers font-semibold">{userName}</span>
        </figure>
        <h1 className="font-semibold text-txtcolor text-6xl mt-[1.5rem]">
          {followers}
        </h1>
        <span className="inline-block text-followers font-semibold mt-1 tracking-[4px]">
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