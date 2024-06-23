import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {Banner} from "./components/Banner"
import { Techstack } from "./components/Techstack";
import { Product } from "./components/Product";
import { Tokenomics } from "./components/Tokenomics";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <div className="upper-container">
      <Header />
      <Hero/>
      <Banner/>
      <Techstack/>
      <Product/>
      <Tokenomics/>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
