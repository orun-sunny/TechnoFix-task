import "./App.css";
import Brand from "./components/Brand/Brand";
import Collaborate from "./components/Collaborate/Collaborate";
import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";

import ConnectTools from "./components/ConnectTools/ConnectTools";
import Work from "./components/work/work";
import Relation from "./components/Relation/Relation";

function App() {
  return (
    <div className="bg-[#ffffff]">
      <Header />
      <div className="px-4 md:px-15 lg:px-2 py-5 lg:py-10">
        <Hero />
        <Brand />
        <Collaborate />
        <Work />
        <ConnectTools />
        <Relation />
      </div>
    </div>
  );
}

export default App;
