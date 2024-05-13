import React from "react";
import Header from "./components/Header";
import Head from "./components/Head";
import TopCards from "./components/TopCards";
import data from "./Data.json";

const App = () => {
  return (
    <main className="w-screen h-screen relative pt-11 bg-mainbody">
      <Header />
      <section id="mainContainer" className="w-[80%] mx-auto">
        <Head />
        <section id="upperCardsBody" className="mt-6 grid grid-cols-4 gap-11">
          {data.map((elements) => {
            return <TopCards key={elements.uniqueId} cards={elements} />;
          })}
        </section>
      </section>
    </main>
  );
};

export default App;
