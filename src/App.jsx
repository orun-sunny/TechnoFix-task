import Brand from "./components/Brand/Brand";
import Collaborate from "./components/Collaborate/Collaborate";
import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";
import ConnectTools from "./components/ConnectTools/ConnectTools";
import Relation from "./components/Relation/Relation";
import BuiltFor from "./components/BuiltFor/BuiltFor";
import BuiltTeam from "./components/BuiltTeam/BuiltTeam";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import WorkForm from "./components/WorkForm/WorkForm";

function App() {
  return (
    <div className="bg-[#ffffff]">
      <Header />
      <div className="px-4 md:px-15 lg:px-2 py-5 lg:py-10">
        <Hero />
        <Brand />
        <Collaborate />
        <WorkForm />
        <ConnectTools />
        <Relation />
        <BuiltFor />
        <BuiltTeam />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
