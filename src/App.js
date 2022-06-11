import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

//Componnents
import LandingPage from "./components/LandingPage/LandingPageContainer";
import TicTacToeContainer from "./components/TicTacToe/TicTacToeContainer";
import PaperRockScissorsContainer from "./components/PaperRockScissors/PaperRockScissorsContainer";
import ConnectFourContainer from "./components/ConnectFour/ConnectFourContainer";
import SimonSaysContainer from "./components/SimonSays/SimonSaysContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tic_tac_toe" element={<TicTacToeContainer />} />
          <Route
            path="/paper_rock_scissors"
            element={<PaperRockScissorsContainer />}
          />
          <Route path="/connect_four" element={<ConnectFourContainer />} />
          <Route path="/simon_says" element={<SimonSaysContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
