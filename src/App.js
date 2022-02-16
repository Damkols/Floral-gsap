import "./styles/Global.scss";
import { reel } from "./ImageData/Data1";
import { reel2 } from "./ImageData/Data2";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Hero reel={reel} reel2={reel2} />
    </div>
  );
}

export default App;
