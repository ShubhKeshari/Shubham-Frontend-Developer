import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {Banner} from "./components/Banner"

function App() {
  return (
    <div className="upper-container">
      <Header />
      <Hero/>
      <Banner/>
    </div>
  );
}

export default App;
