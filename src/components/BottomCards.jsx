import React, { useRef, useEffect } from "react";
import anime from "animejs";
const BottomCards = ({ cards }) => {
  const {
    title,
    platformIcon,
    followers,
    arrowIcon,
    followersToday,
    followColors,
    uniqueId,
  } = cards;

  const numberAnimationRef = useRef(null);

  useEffect(() => {
    numberAnimationRef.current = anime({
      targets: ".numbers",
      opacity: [0, 1],
      translateY: [25, 0],
      duration: 3000,
    });
  }, []);

  const launchAnimation = () => {
    switch (uniqueId) {
      case 1:
        numberAnimationRef.current = anime({
          targets: `.numbers-id1`,
          innerHTML: [0, 87],
          easing: "linear",
          round: 1,
        });
        break;
      case 2:
        numberAnimationRef.current = anime({
          targets: `.numbers-id2`,
          innerHTML: [0, 52],
          easing: "linear",
          round: 1,
        });
        break;
      case 3:
        numberAnimationRef.current = anime({
          targets: `.numbers-id3`,
          innerHTML: [0, 5462],
          easing: "linear",
          round: 1,
        });
        break;
      case 4:
        numberAnimationRef.current = anime({
          targets: `.numbers-id4`,
          innerHTML: [0, "52k"],
          easing: "linear",
          round: 1,
        });
        break;
      case 5:
        numberAnimationRef.current = anime({
          targets: `.numbers-id5`,
          innerHTML: [0, 117],
          easing: "linear",
          round: 1,
        });
        break;
      case 6:
        numberAnimationRef.current = anime({
          targets: `.numbers-id6`,
          innerHTML: [0, 507],
          easing: "linear",
          round: 1,
        });
        break;
      case 7:
        numberAnimationRef.current = anime({
          targets: `.numbers-id7`,
          innerHTML: [0, 107],
          easing: "linear",
          round: 1,
        });
        break;
      case 8:
        numberAnimationRef.current = anime({
          targets: `.numbers-id8`,
          innerHTML: [0, 1407],
          easing: "linear",
          round: 1,
        });
        break;

      default:
        break;
    }
  };

  useEffect(launchAnimation, []);

  return (
    <div className="flex flex-col gap-5 bg-[#f0f3fa] dark:bg-[#242a42]  hover:bg-[#e0e2f0] dark:hover:bg-[#333a57] cursor-pointer ease-in-out transition-all p-7 rounded-md">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-[#bdbfcb] dark:text-[#6c7699]">
          {title}
        </span>
        <img src={platformIcon} alt={platformIcon} />
      </div>
      <div className="flex items-center justify-between">
        <h1
          className={`numbers numbers-id${uniqueId} text-[#1b1e27] dark:text-[#ffffff] font-semibold text-4xl`}
        >
          {followers}
        </h1>
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
