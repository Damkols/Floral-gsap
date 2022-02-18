import "./styles/Global.scss";
import { reel } from "./ImageData/Data1";
import { reel2 } from "./ImageData/Data2";
import Hero from "./components/Hero/Hero";
import gsap from "gsap";

function App() {
  let timeline = gsap.timeline();

  return (
    <div className="App">
      <Hero reel={reel} reel2={reel2} timeline={timeline} />
    </div>
  );
}

export default App;
