import React from "react";

const Head = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-txtcolor font-semibold text-3xl">
          Social Media Dashboard
        </h1>
        <span className="text-followers font-semibold">
          Total Followers: 23,004
        </span>
      </div>
      <div>
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
