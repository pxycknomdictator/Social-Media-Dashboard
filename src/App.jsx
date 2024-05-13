import React from "react";
import Header from "./components/Header";
import Head from "./components/Head";
import TopCards from "./components/TopCards";
import data from "./cardsData/Data.json";
import secondData from "./cardsData/SecondData.json";
import BottomCards from "./components/BottomCards";

const App = () => {
  return (
    <main className="w-screen h-screen relative bg-[#ffffff] dark:bg-[#1e212a] overflow-auto">
      <Header />
      <section id="mainContainer" className="w-[80%] mx-auto absolute">
        <Head />
        <section className="mt-6 grid ssm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-11">
          {data.map((elements) => (
            <TopCards key={elements.uniqueId} cards={elements} />
          ))}
        </section>
        <section className="mt-10">
          <h1 className="font-semibold  text-[#1b1e27] dark:text-[#ffffff] text-3xl">
            Overview - Today
          </h1>
          <div className="grid ssm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-11 mt-4 xl:grid-cols-4">
            {secondData.map((elements) => (
              <BottomCards key={elements.uniqueId} cards={elements} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default App;
