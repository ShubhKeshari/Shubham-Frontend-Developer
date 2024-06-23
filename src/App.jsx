import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {Banner} from "./components/Banner"
import { Techstack } from "./components/Techstack";
import { Product } from "./components/Product";
import { Tokenomics } from "./components/Tokenomics";
import { RoadmapPhase1 } from "./components/RoadmapPhase1";
import { RoadmapPhase2 } from "./components/RoadmapPhase2";
import { RoadmapPhase3 } from "./components/RoadmapPhase3";
import { GetStarted } from "./components/Getstarted";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <div className="major-container">
      <Header />
      <Hero/>
      <Banner/>
      <Techstack/>
      <Product/>
      <Tokenomics/>
      <div className="roadmap-container">
        <RoadmapPhase1/>
        <RoadmapPhase2/>
        <RoadmapPhase3/>
      </div>
      <GetStarted/>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
