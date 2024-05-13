import React from "react";

const Head = () => {
  return (
    <header className="flex justify-between items-center ssm:flex-col ssm:items-start ssm:gap-[1.5rem] xl:flex-row">
      <div className="xl:w-[80%]">
        <h1 className="text-txtcolor font-semibold ssm:text-xl md:text-3xl xl:text-4xl">
          Social Media Dashboard
        </h1>
        <span className="text-followers font-semibold">
          Total Followers: 23,004
        </span>
      </div>
      <div className="ssm:border-t ssm:border-followers ssm:w-full ssm:pt-6 ssm:justify-between ssm:flex ssm:items-center xl:border-none xl:justify-end">
        <span className="text-followers font-extrabold mr-4">Dark Mode</span>
        <input type="checkbox" id="check" />
        <label className="bg-ToggleDark" htmlFor="check">
          ToggleBtn
        </label>
      </div>
    </header>
  );
};

export default Head;
