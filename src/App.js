import "./App.css";
import Main from "./components/Main/Main.js";
import { BidProvider } from "./components/context/Bidding.js";

function App() {
  return (
    <BidProvider>
      <div>
        <Main></Main>
      </div>
    </BidProvider>
  );
}
export default App;
