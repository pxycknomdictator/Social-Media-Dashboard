import React from "react";

const Head = () => {
  return (
    <header className="flex justify-between items-center ssm:flex-col ssm:items-start ssm:gap-[1.5rem] xl:flex-row">
      <div className="xl:w-[80%]">
        <h1 className="text-[#1b1e27] dark:text-[#ffffff] font-semibold ssm:text-xl md:text-3xl xl:text-4xl">
          Social Media Dashboard
        </h1>
        <span className="text-[#bdbfcb] dark:text-[#6c7699] font-semibold">
          Total Followers: 23,004
        </span>
      </div>
      <div className="ssm:border-t ssm:border-followers ssm:w-full ssm:pt-6 ssm:justify-between ssm:flex ssm:items-center xl:border-none xl:justify-end">
        <span className="text-[#bdbfcb] dark:text-[#6c7699] font-extrabold mr-4">Dark Mode</span>
        <input type="checkbox" id="check" />
        <label className="bg-[#adb3cc] dark:bg-ToggleDark dark:before:bg-[#1e212a]" htmlFor="check">
          ToggleBtn
        </label>
      </div>
    </header>
  );
};

export default Head;
