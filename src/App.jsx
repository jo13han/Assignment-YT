import React from "react";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:-grid-cols-1"></section>
      <Search />
      <Hero />
      <Cards title="Cardtitle" />
    </div>
  );
};

export default App;
