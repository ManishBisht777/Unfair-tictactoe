import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Classroom from "./pages/classroom";
import Match from "./pages/match";

function App() {
  return (
    <div className="App">
      <h1>Unfair Tic Tac Toe</h1>
      <p>The Game decide who is better {"(Literally)"}</p>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/match/student" element={<Match />} />
      </Routes>
    </div>
  );
}

export default App;
